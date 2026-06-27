import { useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import topicData from '../data/topics';
import './KnowledgeGraph.css';

const COLORS = {
  root: { bg: '#fbbf24', stroke: '#f59e0b', glow: 'rgba(251,191,36,0.4)' },
  branch: { bg: '#6366f1', stroke: '#4f46e5', glow: 'rgba(99,102,241,0.35)' },
  leaf: { bg: '#22d3ee', stroke: '#06b6d4', glow: 'rgba(34,211,238,0.3)' },
};

function flattenTree(node, parentId = null, depth = 0) {
  const nodes = [{ ...node, parentId, depth, collapsed: false }];
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

export default function KnowledgeGraph({ onNodeClick, selectedId, completedNodes = [], searchQuery = '' }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const simulationRef = useRef(null);
  const nodeElementsRef = useRef(null);
  const linkElementsRef = useRef(null);
  const labelElementsRef = useRef(null);

  const getNodeColor = useCallback((d) => {
    const t = d.type || 'leaf';
    return COLORS[t] || COLORS.leaf;
  }, []);

  useEffect(() => {
    const { nodes, links } = flattenTree(topicData);
    const width = containerRef.current?.clientWidth || 1200;
    const height = containerRef.current?.clientHeight || 800;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const g = svg.append('g');

    // Zoom
    svg.call(d3.zoom().scaleExtent([0.2, 3]).on('zoom', (event) => {
      g.attr('transform', event.transform);
    }));

    // Gradients for links
    const defs = svg.append('defs');
    Object.entries(COLORS).forEach(([key, val]) => {
      const grad = defs.append('linearGradient')
        .attr('id', `grad-${key}`)
        .attr('x1', '0%').attr('y1', '0%')
        .attr('x2', '100%').attr('y2', '100%');
      grad.append('stop').attr('offset', '0%').attr('stop-color', val.stroke).attr('stop-opacity', 0.6);
      grad.append('stop').attr('offset', '100%').attr('stop-color', val.stroke).attr('stop-opacity', 0.15);
    });

    // Glow filter
    const filter = defs.append('filter').attr('id', 'glow');
    filter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur');
    const merge = filter.append('feMerge');
    merge.append('feMergeNode').attr('in', 'blur');
    merge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Arrow markers
    Object.entries(COLORS).forEach(([key, val]) => {
      defs.append('marker')
        .attr('id', `arrow-${key}`)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 28)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', val.stroke)
        .attr('opacity', 0.5);
    });

    // Links
    const linkGroup = g.append('g').attr('class', 'links');
    const linkElements = linkGroup.selectAll('line')
      .data(links)
      .join('line')
      .attr('class', 'graph-link')
      .attr('stroke', (d) => {
        const src = nodes.find(n => n.id === (typeof d.source === 'object' ? d.source.id : d.source));
        const c = getNodeColor(src);
        return `url(#grad-${src.type || 'leaf'})`;
      })
      .attr('stroke-width', (d) => {
        const src = nodes.find(n => n.id === (typeof d.source === 'object' ? d.source.id : d.source));
        if (!src) return 1.2;
        return src.depth === 0 ? 2.8 : src.depth === 1 ? 2.0 : src.depth === 2 ? 1.4 : 0.8;
      })
      .attr('marker-end', (d) => {
        const src = nodes.find(n => n.id === (typeof d.source === 'object' ? d.source.id : d.source));
        return `url(#arrow-${src.type || 'leaf'})`;
      });

    // Nodes group
    const nodeGroup = g.append('g').attr('class', 'nodes');

    const nodeElements = nodeGroup.selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'graph-node')
      .style('cursor', 'pointer');

    // Node circles
    nodeElements.append('circle')
      .attr('r', (d) => {
        if (d.depth === 0) return 22;
        if (d.depth === 1) return 16;
        if (d.depth === 2) return 11;
        return 7;
      })
      .attr('fill', (d) => {
        const c = getNodeColor(d);
        return c.bg;
      })
      .attr('stroke', (d) => {
        const c = getNodeColor(d);
        return c.stroke;
      })
      .attr('stroke-width', (d) => d.id === selectedId ? 3 : 1.5)
      .attr('filter', (d) => d.id === selectedId ? 'url(#glow)' : null)
      .style('transition', 'stroke-width 0.3s, filter 0.3s');

    // Inner dot
    nodeElements.append('circle')
      .attr('r', (d) => {
        if (d.depth === 0) return 8;
        if (d.depth === 1) return 5;
        if (d.depth === 2) return 3;
        return 1.5;
      })
      .attr('fill', 'rgba(255,255,255,0.35)')
      .attr('pointer-events', 'none');

    // Labels
    const labelGroup = g.append('g').attr('class', 'labels');
    const labelElements = labelGroup.selectAll('text')
      .data(nodes)
      .join('text')
      .attr('class', 'node-label')
      .attr('text-anchor', 'middle')
      .attr('dy', (d) => {
        const r = d.depth === 0 ? 22 : d.depth === 1 ? 16 : d.depth === 2 ? 11 : 7;
        return r + 16;
      })
      .attr('fill', (d) => {
        const c = getNodeColor(d);
        return c.bg;
      })
      .attr('font-size', (d) => d.depth === 0 ? 14 : d.depth === 1 ? 12 : d.depth === 2 ? 10 : 8.5)
      .attr('font-weight', (d) => d.depth <= 1 ? '600' : '500')
      .text((d) => d.name)
      .style('pointer-events', 'none');

    // Force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links)
        .id((d) => d.id)
        .distance((d) => {
          if (d.source.depth === 0) return 140;
          if (d.source.depth === 1) return 90;
          if (d.source.depth === 2) return 60;
          return 40;
        })
        .strength(0.65)
      )
      .force('charge', d3.forceManyBody()
        .strength((d) => {
          if (d.depth === 0) return -700;
          if (d.depth === 1) return -400;
          if (d.depth === 2) return -150;
          return -60;
        })
      )
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d) => {
        if (d.depth === 0) return 45;
        if (d.depth === 1) return 35;
        if (d.depth === 2) return 22;
        return 14;
      }))
      .on('tick', () => {
        linkElements
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y);

        nodeElements.attr('transform', (d) => `translate(${d.x},${d.y})`);
        labelElements.attr('x', (d) => d.x).attr('y', (d) => d.y);
      });

    simulationRef.current = simulation;

    // Drag
    const drag = d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    nodeElements.call(drag);

    // Hover
    nodeElements
      .on('mouseenter', function (event, d) {
        const circle = d3.select(this).select('circle:first-child');
        circle
          .transition().duration(200)
          .attr('r', (d.depth === 0 ? 22 : d.depth === 1 ? 16 : d.depth === 2 ? 11 : 7) * 1.25);

        // Highlight connected
        const connectedIds = new Set();
        links.forEach((l) => {
          const sid = typeof l.source === 'object' ? l.source.id : l.source;
          const tid = typeof l.target === 'object' ? l.target.id : l.target;
          if (sid === d.id || tid === d.id) {
            connectedIds.add(sid);
            connectedIds.add(tid);
          }
        });

        linkElements
          .transition().duration(200)
          .attr('opacity', (l) => {
            const sid = typeof l.source === 'object' ? l.source.id : l.source;
            const tid = typeof l.target === 'object' ? l.target.id : l.target;
            return (sid === d.id || tid === d.id) ? 1 : 0.08;
          })
          .attr('stroke-width', (l) => {
            const sid = typeof l.source === 'object' ? l.source.id : l.source;
            const tid = typeof l.target === 'object' ? l.target.id : l.target;
            return (sid === d.id || tid === d.id) ? 2.5 : 0.5;
          });

        nodeElements
          .transition().duration(200)
          .attr('opacity', (n) => connectedIds.has(n.id) || n.id === d.id ? 1 : 0.2);

        labelElements
          .transition().duration(200)
          .attr('opacity', (n) => connectedIds.has(n.id) || n.id === d.id ? 1 : 0.15);
      })
      .on('mouseleave', function (event, d) {
        const circle = d3.select(this).select('circle:first-child');
        circle
          .transition().duration(200)
          .attr('r', d.depth === 0 ? 22 : d.depth === 1 ? 16 : d.depth === 2 ? 11 : 7);

        linkElements
          .transition().duration(300)
          .attr('opacity', 0.5)
          .attr('stroke-width', (d) => {
            const src = nodes.find(n => n.id === (typeof d.source === 'object' ? d.source.id : d.source));
            return src.depth === 0 ? 2.5 : src.depth === 1 ? 1.8 : 1.2;
          });

        nodeElements
          .transition().duration(300)
          .attr('opacity', 1);

        labelElements
          .transition().duration(300)
          .attr('opacity', 1);
      });

    // Click
    nodeElements.on('click', (event, d) => {
      event.stopPropagation();
      onNodeClick(d);
    });

    svg.on('click', () => {
      onNodeClick(null);
    });

    nodeElementsRef.current = nodeElements;
    linkElementsRef.current = linkElements;
    labelElementsRef.current = labelElements;

    return () => {
      simulation.stop();
    };
  }, []);

  // Update selection highlight
  useEffect(() => {
    if (!nodeElementsRef.current) return;
    nodeElementsRef.current.selectAll('circle:first-child')
      .transition().duration(300)
      .attr('stroke-width', (d) => d.id === selectedId ? 3 : 1.5)
      .attr('filter', (d) => d.id === selectedId ? 'url(#glow)' : null);
  }, [selectedId]);

  // Update completed status
  useEffect(() => {
    if (!nodeElementsRef.current || !labelElementsRef.current) return;
    
    nodeElementsRef.current.selectAll('circle:first-child')
      .transition().duration(300)
      .attr('stroke', (d) => completedNodes.includes(d.id) ? '#10b981' : getNodeColor(d).stroke);
      
    labelElementsRef.current
      .text((d) => completedNodes.includes(d.id) ? `${d.name} ✅` : d.name);
  }, [completedNodes, getNodeColor]);

  // Handle Search Query Highlight and Physics
  useEffect(() => {
    if (!nodeElementsRef.current || !linkElementsRef.current || !labelElementsRef.current || !simulationRef.current) return;
    
    const q = searchQuery.trim().toLowerCase();
    const isSearchActive = q.length > 0;
    
    const isMatch = (d) => {
      if (!isSearchActive) return false;
      return d.name.toLowerCase().includes(q) || (d.description && d.description.toLowerCase().includes(q));
    };

    nodeElementsRef.current
      .transition().duration(400)
      .attr('opacity', (d) => !isSearchActive || isMatch(d) ? 1 : 0.15);
      
    labelElementsRef.current
      .transition().duration(400)
      .attr('opacity', (d) => !isSearchActive || isMatch(d) ? 1 : 0.15);

    linkElementsRef.current
      .transition().duration(400)
      .attr('opacity', (l) => {
        if (!isSearchActive) return 0.6;
        const sMatch = isMatch(typeof l.source === 'object' ? l.source : {name: '', description: ''});
        const tMatch = isMatch(typeof l.target === 'object' ? l.target : {name: '', description: ''});
        return (sMatch || tMatch) ? 0.8 : 0.05;
      });

    const width = containerRef.current.clientWidth || 800;
    const height = containerRef.current.clientHeight || 600;

    if (isSearchActive) {
      simulationRef.current
        .force('searchX', d3.forceX(width / 2).strength(d => isMatch(d) ? 0.12 : 0))
        .force('searchY', d3.forceY(height / 2).strength(d => isMatch(d) ? 0.12 : 0));
      simulationRef.current.alpha(0.6).restart();
    } else {
      simulationRef.current.force('searchX', null).force('searchY', null);
      simulationRef.current.alpha(0.3).restart();
    }
  }, [searchQuery]);

  return (
    <div className="graph-container" ref={containerRef}>
      <svg ref={svgRef} width="100%" height="100%" />
      <div className="graph-hint">
        <span>🔍 Lăn chuột để zoom • Kéo để di chuyển • Click vào node để xem chi tiết</span>
      </div>
    </div>
  );
}
