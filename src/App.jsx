import { useCallback, useState, useEffect } from 'react';
import KnowledgeGraph from './components/KnowledgeGraph';
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

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
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
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Đổi sáng/tối">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      <main className="app-main">
        <KnowledgeGraph onNodeClick={handleNodeClick} selectedId={selectedNode?.id} />
        {selectedNode && (
          <NodePanel node={selectedNode} onClose={handleClose} />
        )}
      </main>
    </div>
  );
}
