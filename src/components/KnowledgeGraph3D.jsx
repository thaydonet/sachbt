import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import topicData from '../data/topics';

// ─── Custom Sprite Text ───────────────────────────────────────────────────────
function createTextSprite(text, color) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  context.font = '24px Arial';
  const textWidth = context.measureText(text).width;
  
  canvas.width = Math.max(textWidth + 20, 64);
  canvas.height = 40;
  
  context.font = '24px Arial';
  context.fillStyle = color;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  
  const spriteMaterial = new THREE.SpriteMaterial({ 
    map: texture, 
    transparent: true,
    depthTest: false 
  });
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(canvas.width / 6, canvas.height / 6, 1);
  return sprite;
}

// ─── Theme-aware palette ──────────────────────────────────────────────────────
const PALETTE_DARK = {
  root:   { core: '#f0abfc', glow: '#d946ef', line: '#e879f9', text: '#ffffff' },
  branch: { core: '#a5b4fc', glow: '#6366f1', line: '#818cf8', text: '#ffffff' },
  leaf:   { core: '#6ee7b7', glow: '#059669', line: '#34d399', text: '#e2e8f0' },
};

const PALETTE_LIGHT = {
  root:   { core: '#a21caf', glow: '#86198f', line: '#c026d3', text: '#a21caf' },
  branch: { core: '#4338ca', glow: '#3730a3', line: '#4f46e5', text: '#4338ca' },
  leaf:   { core: '#047857', glow: '#065f46', line: '#059669', text: '#064e3b' },
};

const BG_DARK  = '#0d0d1a';
const BG_LIGHT = '#f4f6ff';

// ─── Flatten tree ─────────────────────────────────────────────────────────────
function flattenTree(node, parentId = null, depth = 0) {
  const nodes = [{ ...node, parentId, depth }];
  const links = [];
  if (node.children) {
    for (const child of node.children) {
      links.push({ source: node.id, target: child.id, sourceType: node.type });
      const sub = flattenTree(child, node.id, depth + 1);
      nodes.push(...sub.nodes);
      links.push(...sub.links);
    }
  }
  return { nodes, links };
}

// ─── Main Graph Component ─────────────────────────────────────────────────────
export default function KnowledgeGraph3D({ onNodeClick, selectedId, completedNodes = [], searchQuery = '' }) {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const bgColor = isDark ? BG_DARK : BG_LIGHT;
  const PALETTE = isDark ? PALETTE_DARK : PALETTE_LIGHT;

  const { nodes, links } = useMemo(() => flattenTree(topicData), []);
  const [hoverNode, setHoverNode] = useState(null);
  const fgRef = useRef();

  // Create a set of highlighted node IDs (hover or search)
  const relatedNodes = useMemo(() => {
    const set = new Set();
    if (!hoverNode) return set;
    set.add(hoverNode.id);
    links.forEach(link => {
      const srcId = typeof link.source === 'object' ? link.source.id : link.source;
      const tgtId = typeof link.target === 'object' ? link.target.id : link.target;
      if (srcId === hoverNode.id) set.add(tgtId);
      if (tgtId === hoverNode.id) set.add(srcId);
    });
    return set;
  }, [hoverNode, links]);

  const searchedSet = useMemo(() => {
    if (!searchQuery || !searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const set = new Set();
    nodes.forEach(n => {
      if (n.name.toLowerCase().includes(q) || (n.description && n.description.toLowerCase().includes(q))) {
        set.add(n.id);
      }
    });
    return set;
  }, [searchQuery, nodes]);

  // Adjust engine parameters on load to give a more spaced-out ELTiverse look
  useEffect(() => {
    if (fgRef.current) {
      const fg = fgRef.current;
      fg.d3Force('charge').strength(-250);
      fg.d3Force('link').distance(link => {
        const srcNode = nodes.find(n => n.id === (typeof link.source === 'object' ? link.source.id : link.source));
        const depth = srcNode?.depth || 0;
        return depth === 0 ? 100 : depth === 1 ? 60 : 40;
      });
    }
  }, [nodes]);

  const handleNodeClick = useCallback(node => {
    // Zoom in and center on the clicked node
    const distance = 80;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    if (fgRef.current) {
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        node,
        1500
      );
    }
    onNodeClick(node);
  }, [onNodeClick]);

  return (
    <div className="graph-container graph-3d" style={{ background: bgColor }}>
      <ForceGraph3D
        ref={fgRef}
        graphData={{ nodes, links }}
        backgroundColor={bgColor}
        nodeId="id"
        nodeLabel="" // We disable the default tooltip because we use SpriteText
        nodeThreeObject={node => {
          const isCompleted = completedNodes.includes(node.id);
          const pal = PALETTE[node.type] || PALETTE.leaf;
          const coreColor = isCompleted ? '#10b981' : pal.core;
          const textColor = isCompleted ? '#34d399' : pal.text;
          const nodeRadius = node.depth === 0 ? 8 : node.depth === 1 ? 5 : 3;

          const isHoveredOrSelected = relatedNodes.size > 0;
          const isSearched = searchedSet != null && searchedSet.size > 0;

          let highlighted = false;
          let dimmed = false;
          if (isHoveredOrSelected) {
            highlighted = relatedNodes.has(node.id);
            dimmed = !highlighted;
          } else if (isSearched) {
            highlighted = searchedSet.has(node.id);
            dimmed = !highlighted;
          }

          const opacity = dimmed ? 0.15 : highlighted ? 1 : 0.8;

          const group = new THREE.Group();

          // Sphere
          const geometry = new THREE.SphereGeometry(nodeRadius, 16, 16);
          const material = new THREE.MeshBasicMaterial({ 
            color: coreColor,
            transparent: true,
            opacity: opacity
          });
          const sphere = new THREE.Mesh(geometry, material);
          group.add(sphere);

          // If node is selected, add a halo
          if (node.id === selectedId) {
            const haloGeo = new THREE.SphereGeometry(nodeRadius * 1.5, 16, 16);
            const haloMat = new THREE.MeshBasicMaterial({
              color: coreColor,
              transparent: true,
              opacity: 0.3 * opacity,
              side: THREE.BackSide
            });
            const halo = new THREE.Mesh(haloGeo, haloMat);
            group.add(halo);
          }

          // Text Label
          const textHeight = node.depth === 0 ? 8 : node.depth === 1 ? 6 : 4;
          const labelText = isCompleted ? `${node.name} ✅` : node.name;
          const sprite = createTextSprite(labelText, textColor);
          sprite.scale.set(sprite.scale.x * (textHeight/4), sprite.scale.y * (textHeight/4), 1);
          sprite.position.y = nodeRadius + (textHeight / 2) + 2;
          sprite.material.opacity = opacity;
          sprite.material.depthWrite = false;
          group.add(sprite);

          return group;
        }}
        linkWidth={link => {
          const srcId = typeof link.source === 'object' ? link.source.id : link.source;
          const tgtId = typeof link.target === 'object' ? link.target.id : link.target;
          if (relatedNodes.has(srcId) && relatedNodes.has(tgtId)) return 1.5;
          return 0.5;
        }}
        linkColor={link => {
          const srcId = typeof link.source === 'object' ? link.source.id : link.source;
          const tgtId = typeof link.target === 'object' ? link.target.id : link.target;
          const highlighted = relatedNodes.has(srcId) && relatedNodes.has(tgtId);
          const dimmed = relatedNodes.size > 0 && !highlighted;
          
          if (highlighted) return isDark ? '#ffffff' : '#6366f1';
          if (dimmed) return isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
          
          return PALETTE[link.sourceType || 'leaf'].line;
        }}
        linkOpacity={0.6}
        linkDirectionalParticles={link => {
          if (!link.source || !link.target) return 0;
          const srcId = typeof link.source === 'object' ? link.source.id : link.source;
          const tgtId = typeof link.target === 'object' ? link.target.id : link.target;
          return (relatedNodes.has(srcId) && relatedNodes.has(tgtId)) ? 4 : 0;
        }}
        linkDirectionalParticleWidth={2}
        onNodeClick={handleNodeClick}
        onNodeHover={node => {
          setHoverNode(node);
          document.body.style.cursor = node ? 'pointer' : 'default';
        }}
        enableNodeDrag={false}
      />
      
      {/* Legend */}
      <div className={`graph-legend-3d ${isDark ? 'legend-dark' : 'legend-light'}`}>
        <span className="legend-dot" style={{ background: PALETTE.root.core, boxShadow: `0 0 8px ${PALETTE.root.glow}` }} />
        <span className="legend-label">Gốc</span>
        <span className="legend-dot" style={{ background: PALETTE.branch.core, boxShadow: `0 0 8px ${PALETTE.branch.glow}` }} />
        <span className="legend-label">Chương</span>
        <span className="legend-dot" style={{ background: PALETTE.leaf.core, boxShadow: `0 0 8px ${PALETTE.leaf.glow}` }} />
        <span className="legend-label">Bài học</span>
      </div>

      <div className={`graph-hint ${isDark ? '' : 'hint-light'}`}>
        <span>🖱 Kéo để xoay · Lăn để zoom · Hover để highlight · Click để đọc bài</span>
      </div>
    </div>
  );
}
