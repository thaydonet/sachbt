import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';
import topicData from '../data/topics';

const COLORS = {
  root: '#fbbf24',
  branch: '#6366f1',
  leaf: '#22d3ee',
};

function flattenTree(node, parentId = null, depth = 0) {
  const nodes = [{ ...node, parentId, depth }];
  const links = [];
  if (node.children) {
    for (const child of node.children) {
      links.push({ source: node.id, target: child.id });
      const sub = flattenTree(child, node.id, depth + 1);
      nodes.push(...sub.nodes);
      links.push(...sub.links);
    }
  }
  return { nodes, links };
}

function getRadius(d) {
  return d.depth === 0 ? 6 : d.depth === 1 ? 4.5 : 3;
}

function useWindowSize() {
  const { size } = useThree();
  return size;
}

function LinkLine({ link, srcIdx, tgtIdx, positions, color, depth }) {
  const ref = useRef(null);
  const size = useWindowSize();

  useFrame(() => {
    if (!ref.current) return;
    const p = positions.current;
    const si = srcIdx;
    const ti = tgtIdx;
    const geo = ref.current.geometry;
    const pos = geo.attributes.position;
    pos.array[0] = p[si].x; pos.array[1] = p[si].y; pos.array[2] = p[si].z;
    pos.array[3] = p[ti].x; pos.array[4] = p[ti].y; pos.array[5] = p[ti].z;
    pos.needsUpdate = true;
    geo.computeBoundingSphere();
  });

  return (
    <Line
      ref={ref}
      points={[[0, 0, 0], [0.1, 0.1, 0.1]]}
      color={color}
      lineWidth={depth === 0 ? 2.5 : depth === 1 ? 1.8 : 1.2}
      transparent
      opacity={0.45}
      resolution={[size.width * Math.min(2, window.devicePixelRatio || 1), size.height * Math.min(2, window.devicePixelRatio || 1)]}
    />
  );
}

function GraphNode({ node, position, color, radius, selected, onClick }) {
  const meshRef = useRef(null);
  const glowRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) return;
    const p = position;
    meshRef.current.position.set(p.x, p.y, p.z);
    if (glowRef.current) {
      glowRef.current.position.set(p.x, p.y, p.z);
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onClick={(e) => { e.stopPropagation(); onClick(node); }}
        onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { document.body.style.cursor = 'default'; }}
      >
        <sphereGeometry args={[radius, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={selected ? 0.5 : 0.08}
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[radius * (selected ? 1.6 : 1.2), 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={selected ? 0.25 : 0.08}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function LabelSprite({ node, position, offsetY, color }) {
  const ref = useRef(null);
  const textureRef = useRef(null);

  const canvas = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 128;
    const ctx = c.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, 512, 128);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.9)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = color;
      const fontSize = node.depth === 0 ? 42 : node.depth === 1 ? 36 : 32;
      ctx.font = `${node.depth <= 1 ? 'bold ' : ''}${fontSize}px "Segoe UI", system-ui, sans-serif`;
      ctx.fillText(node.name, 256, 64);
    }
    return c;
  }, [node, color]);

  const texture = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas);
    t.needsUpdate = true;
    return t;
  }, [canvas]);

  useFrame(() => {
    if (!ref.current) return;
    const p = position;
    ref.current.position.set(p.x, p.y + offsetY, p.z);
    const scale = node.depth === 0 ? 60 : node.depth === 1 ? 50 : 40;
    ref.current.scale.set(scale, scale * 0.25, 1);
  });

  return (
    <sprite ref={ref}>
      <spriteMaterial map={texture} transparent depthTest={false} sizeAttenuation />
    </sprite>
  );
}

function ForceGraph({ onNodeClick, selectedId }) {
  const { nodes, links } = useMemo(() => flattenTree(topicData), []);
  const positions = useRef(nodes.map(() => ({
    x: (Math.random() - 0.5) * 80,
    y: (Math.random() - 0.5) * 80,
    z: (Math.random() - 0.5) * 40,
    vx: 0, vy: 0, vz: 0,
  })));
  const frameCount = useRef(0);
  const settled = useRef(false);

  const nodeMap = useMemo(() => {
    const m = {};
    nodes.forEach((n, i) => { m[n.id] = i; });
    return m;
  }, [nodes]);

  const linkMeta = useMemo(() => links.map(l => {
    const si = nodeMap[typeof l.source === 'object' ? l.source.id : l.source];
    const ti = nodeMap[typeof l.target === 'object' ? l.target.id : l.target];
    const src = nodes[si];
    const depth = src ? src.depth : 0;
    let targetDist = 110;
    if (src) {
      if (src.depth === 0) targetDist = 150;
      else if (src.depth === 1) targetDist = 120;
    }
    return { si, ti, depth, targetDist };
  }), [links, nodeMap, nodes]);

  useFrame(() => {
    frameCount.current += 1;
    if (frameCount.current > 400) {
      settled.current = true;
      return;
    }

    const pos = positions.current;
    const progress = Math.min(frameCount.current / 200, 1);
    const alpha = 0.03 * (1 - progress);
    const decay = 0.82;

    for (const p of pos) { p.fx = 0; p.fy = 0; p.fz = 0; }

    for (const p of pos) {
      p.fx -= p.x * 0.012;
      p.fy -= p.y * 0.012;
      p.fz -= p.z * 0.006;
    }

    for (let i = 0; i < pos.length; i++) {
      for (let j = i + 1; j < pos.length; j++) {
        let dx = pos[i].x - pos[j].x;
        let dy = pos[i].y - pos[j].y;
        let dz = pos[i].z - pos[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
        const minDist = (getRadius(nodes[i]) + getRadius(nodes[j])) * 2.5;
        const force = dist < minDist
          ? 400 * (minDist - dist) / dist
          : 3000 / (dist * dist);
        const f = Math.min(force, 80);
        pos[i].fx += (dx / dist) * f;
        pos[j].fx -= (dx / dist) * f;
        pos[i].fy += (dy / dist) * f;
        pos[j].fy -= (dy / dist) * f;
        pos[i].fz += (dz / dist) * f * 0.3;
        pos[j].fz -= (dz / dist) * f * 0.3;
      }
    }

    for (const meta of linkMeta) {
      if (meta.si === undefined || meta.ti === undefined) continue;
      const dx = pos[meta.ti].x - pos[meta.si].x;
      const dy = pos[meta.ti].y - pos[meta.si].y;
      const dz = pos[meta.ti].z - pos[meta.si].z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
      const force = (dist - meta.targetDist) * 0.04;
      pos[meta.si].fx += (dx / dist) * force;
      pos[meta.ti].fx -= (dx / dist) * force;
      pos[meta.si].fy += (dy / dist) * force;
      pos[meta.ti].fy -= (dy / dist) * force;
      pos[meta.si].fz += (dz / dist) * force * 0.5;
      pos[meta.ti].fz -= (dz / dist) * force * 0.5;
    }

    for (const p of pos) {
      p.vx += p.fx * alpha;
      p.vy += p.fy * alpha;
      p.vz += p.fz * alpha;
      p.vx *= decay;
      p.vy *= decay;
      p.vz *= decay;
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[80, 120, 100]} intensity={0.9} />
      <directionalLight position={[-80, -40, -60]} intensity={0.3} />

      {linkMeta.map((meta, k) => {
        if (meta.si === undefined || meta.ti === undefined) return null;
        const src = nodes[meta.si];
        const color = COLORS[src?.type] || COLORS.leaf;
        return (
          <LinkLine
            key={`link-${k}`}
            srcIdx={meta.si}
            tgtIdx={meta.ti}
            positions={positions}
            color={color}
            depth={meta.depth}
          />
        );
      })}

      {nodes.map((node, i) => {
        const color = COLORS[node.type] || COLORS.leaf;
        const r = getRadius(node);
        return (
          <group key={node.id}>
            <GraphNode
              node={node}
              position={positions.current[i]}
              color={color}
              radius={r}
              selected={node.id === selectedId}
              onClick={onNodeClick}
            />
            <LabelSprite
              node={node}
              position={positions.current[i]}
              offsetY={-r - 12}
              color={color}
            />
          </group>
        );
      })}

      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        minDistance={30}
        maxDistance={300}
        autoRotate={false}
        dampingFactor={0.1}
        enableDamping
      />
    </>
  );
}

export default function KnowledgeGraph3D({ onNodeClick, selectedId }) {
  const bgColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#0a0a1a' : '#f0f4ff';

  return (
    <div className="graph-container graph-3d">
      <Canvas
        camera={{ position: [0, 0, 120], fov: 45, far: 500, near: 1 }}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color(bgColor);
          scene.fog = new THREE.Fog(bgColor, 200, 400);
        }}
      >
        <ForceGraph onNodeClick={onNodeClick} selectedId={selectedId} />
      </Canvas>
      <div className="graph-hint">
        <span>🖱 Kéo để xoay • Lăn để zoom • Click vào node để xem chi tiết</span>
      </div>
    </div>
  );
}
