import { Suspense, lazy, useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NodePanel from './components/NodePanel';
import topicData from './data/topics';

const KnowledgeGraph = lazy(() => import('./components/KnowledgeGraph'));
const KnowledgeGraph3D = lazy(() => import('./components/KnowledgeGraph3D'));
const TopicList = lazy(() => import('./components/TopicList'));

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

function findNodeById(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (let child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
  }
  return null;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, toggleTheme] = useTheme();
  const [dim3d, setDim3d] = useState(false);
  
  const isListView = location.pathname.startsWith('/list');
  const viewMode = isListView ? 'list' : 'graph';

  // Redirect to preferred view mode on initial load of root
  useEffect(() => {
    if (location.pathname === '/') {
      const savedMode = localStorage.getItem('viewMode');
      if (savedMode === 'list') {
        navigate('/list', { replace: true });
      }
    }
  }, [location.pathname, navigate]);
  
  // Progress tracking state
  const [completedNodes, setCompletedNodes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('completedNodes')) || [];
    } catch {
      return [];
    }
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  const flatNodes = useMemo(() => {
    const nodes = [];
    const traverse = (n) => {
      nodes.push(n);
      if (n.children) n.children.forEach(traverse);
    };
    traverse(topicData);
    return nodes;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return flatNodes.filter(n => 
      n.name.toLowerCase().includes(query) || 
      (n.description && n.description.toLowerCase().includes(query))
    ).slice(0, 8); // limit to 8 results
  }, [searchQuery, flatNodes]);

  // Handle click outside search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sync selected node with URL
  const match = location.pathname.match(/^(?:\/list)?\/lesson\/(.+)$/);
  const selectedId = match ? match[1] : null;
  const selectedNode = selectedId ? findNodeById(topicData, selectedId) : null;

  const handleNodeClick = useCallback((node) => {
    navigate(`${viewMode === 'list' ? '/list' : ''}/lesson/${node.id}`);
  }, [navigate, viewMode]);

  const handleClose = useCallback(() => {
    navigate(`${viewMode === 'list' ? '/list' : '/'}`);
  }, [navigate, viewMode]);

  const toggleDim = useCallback(() => {
    setDim3d(prev => {
      localStorage.setItem('dim3d', String(!prev));
      return !prev;
    });
  }, []);

  const handleViewModeChange = useCallback((mode) => {
    let targetPath = location.pathname;
    if (mode === 'list') {
      if (!targetPath.startsWith('/list')) {
        targetPath = '/list' + (targetPath === '/' ? '' : targetPath);
      }
    } else {
      if (targetPath.startsWith('/list')) {
        targetPath = targetPath.replace(/^\/list/, '') || '/';
      }
    }
    navigate(targetPath);
    localStorage.setItem('viewMode', mode);
  }, [location.pathname, navigate]);

  const toggleCompleted = useCallback((nodeId) => {
    setCompletedNodes(prev => {
      const isCompleted = prev.includes(nodeId);
      const next = isCompleted ? prev.filter(id => id !== nodeId) : [...prev, nodeId];
      localStorage.setItem('completedNodes', JSON.stringify(next));
      return next;
    });
  }, []);

  const handleSearchResultClick = useCallback((node) => {
    setSearchQuery('');
    setShowSearchResults(false);
    navigate(`${viewMode === 'list' ? '/list' : ''}/lesson/${node.id}`);
  }, [navigate, viewMode]);

  const leafNodes = useMemo(() => flatNodes.filter(n => n.type === 'leaf'), [flatNodes]);
  const totalLessons = leafNodes.length;
  const validCompletedCount = useMemo(() => {
    return completedNodes.filter(id => leafNodes.some(l => l.id === id)).length;
  }, [completedNodes, leafNodes]);
  const progressPercent = totalLessons > 0 ? Math.round((validCompletedCount / totalLessons) * 100) : 0;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <span className="logo" onClick={() => navigate(viewMode === 'list' ? '/list' : '/')} style={{ cursor: 'pointer' }}>🧠</span>
          <h1 onClick={() => navigate(viewMode === 'list' ? '/list' : '/')} style={{ cursor: 'pointer' }}>Toán THPT</h1>
        </div>
        
        <div className="header-center" ref={searchRef}>
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              className="search-input"
              placeholder="Tìm kiếm bài học..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
            />
            {showSearchResults && searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.map(res => (
                  <div 
                    key={res.id} 
                    className="search-result-item"
                    onClick={() => handleSearchResultClick(res)}
                  >
                    <div className="search-result-name">{res.name}</div>
                    {res.description && <div className="search-result-desc">{res.description}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="header-right">
          <div className="progress-widget" title={`${validCompletedCount}/${totalLessons} bài học đã hoàn thành`}>
            <div className="progress-text">
              <span className="progress-label">Tiến độ</span>
              <span className="progress-value">{progressPercent}%</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="view-mode-toggle">
            <button 
              className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => handleViewModeChange('list')}
            >
              List
            </button>
            <button 
              className={`view-mode-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => handleViewModeChange('graph')}
            >
              Graph
            </button>
          </div>

          {viewMode === 'graph' && (
            <button className="dim-toggle" onClick={toggleDim} aria-label="Chuyển 2D/3D">
              <span className={`dim-icon ${!dim3d ? 'active' : ''}`}>2D</span>
              <span className="dim-divider">/</span>
              <span className={`dim-icon ${dim3d ? 'active' : ''}`}>3D</span>
            </button>
          )}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Đổi sáng/tối">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      <main className="app-main">
        <Suspense fallback={<div className="loading-canvas">Đang tải...</div>}>
          {viewMode === 'list' ? (
            <TopicList 
              onNodeClick={handleNodeClick} 
              completedNodes={completedNodes}
              searchQuery={searchQuery}
            />
          ) : dim3d ? (
            <KnowledgeGraph3D 
              onNodeClick={handleNodeClick} 
              selectedId={selectedNode?.id}
              completedNodes={completedNodes}
              searchQuery={searchQuery}
            />
          ) : (
            <KnowledgeGraph 
              onNodeClick={handleNodeClick} 
              selectedId={selectedNode?.id}
              completedNodes={completedNodes}
              searchQuery={searchQuery}
            />
          )}
        </Suspense>
        {selectedNode && (
          <NodePanel 
            node={selectedNode} 
            onClose={handleClose} 
            isCompleted={completedNodes.includes(selectedNode.id)}
            onToggleCompleted={() => toggleCompleted(selectedNode.id)}
          />
        )}
      </main>
    </div>
  );
}
