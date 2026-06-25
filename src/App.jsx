import { useCallback, useState, useEffect } from 'react';
import KnowledgeGraph from './components/KnowledgeGraph';
import KnowledgeGraph3D from './components/KnowledgeGraph3D';
import NodePanel from './components/NodePanel';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  return [theme, toggle];
}

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [theme, toggleTheme] = useTheme();
  const [dim3d, setDim3d] = useState(() => localStorage.getItem('dim3d') === 'true');

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
  }, []);

  const toggleDim = useCallback(() => {
    setDim3d(prev => {
      localStorage.setItem('dim3d', String(!prev));
      return !prev;
    });
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <span className="logo">🧠</span>
          <h1>Knowledge Graph — Toán THPT</h1>
        </div>
        <div className="header-right">
          <p className="header-subtitle">Kiến thức Toán THPT dưới dạng đồ thị tri thức</p>
          <button className="dim-toggle" onClick={toggleDim} aria-label="Chuyển 2D/3D">
            <span className={`dim-icon ${!dim3d ? 'active' : ''}`}>2D</span>
            <span className="dim-divider">/</span>
            <span className={`dim-icon ${dim3d ? 'active' : ''}`}>3D</span>
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Đổi sáng/tối">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      <main className="app-main">
        {dim3d ? (
          <KnowledgeGraph3D onNodeClick={handleNodeClick} selectedId={selectedNode?.id} />
        ) : (
          <KnowledgeGraph onNodeClick={handleNodeClick} selectedId={selectedNode?.id} />
        )}
        {selectedNode && (
          <NodePanel node={selectedNode} onClose={handleClose} />
        )}
      </main>
    </div>
  );
}
