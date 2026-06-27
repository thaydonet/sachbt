import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import lessons from '../data/lessons';
import topicData from '../data/topics';
import './NodePanel.css';

const TYPE_LABELS = {
  root: 'Gốc',
  branch: 'Chủ đề',
  leaf: 'Bài học'
};

const TYPE_COLORS = {
  root: '#fbbf24',
  branch: '#6366f1',
  leaf: '#22d3ee'
};

export default function NodePanel({ node, onClose, isCompleted, onToggleCompleted }) {
  const navigate = useNavigate();

  const isLeaf = node?.type === 'leaf';
  const color = node ? (TYPE_COLORS[node.type] || '#22d3ee') : '#22d3ee';
  const mdContent = isLeaf && node?.mdKey ? lessons[node.mdKey] : null;

  const relatedLessons = useMemo(() => {
    if (!isLeaf || !node) return [];
    let related = [];
    const traverse = (n) => {
      if (n.children) {
        if (n.children.some(child => child.id === node.id)) {
          related = n.children.filter(child => child.id !== node.id && child.type === 'leaf');
        } else {
          n.children.forEach(traverse);
        }
      }
    };
    traverse(topicData);
    return related;
  }, [node, isLeaf]);

  const handleRelatedClick = (relatedNode) => {
    navigate(`/lesson/${relatedNode.id}`);
  };

  if (!node) return null;

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel-container" onClick={(e) => e.stopPropagation()}>
        <button className="panel-close" onClick={onClose}>✕</button>

        <div className="panel-header">
          <span className="panel-badge" style={{ background: color }}>
            {TYPE_LABELS[node.type] || 'Bài học'}
          </span>
          <h2 className="panel-title">{node.name}</h2>
          {node.description && (
            <p className="panel-desc">{node.description}</p>
          )}
          {isLeaf && (
            <button 
              className={`completed-toggle ${isCompleted ? 'completed' : ''}`}
              onClick={onToggleCompleted}
            >
              {isCompleted ? '✅ Đã hoàn thành' : '⬜ Đánh dấu đã học'}
            </button>
          )}
        </div>

        {isLeaf && mdContent && (
          <section className="panel-section">
            <div className="section-icon">📖</div>
            <h3>Lý thuyết</h3>
            <div className="panel-content markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
              >
                {mdContent}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {!isLeaf && (
          <section className="panel-section">
            <div className="section-icon">📂</div>
            <h3>Các bài học trong chủ đề này</h3>
            <div className="children-list">
              {node.children?.map((child) => (
                <span key={child.id} className="child-tag">
                  {child.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {isLeaf && relatedLessons.length > 0 && (
          <section className="panel-section related-section">
            <div className="section-icon">🔗</div>
            <h3>Các bài liên quan</h3>
            <div className="related-list">
              {relatedLessons.map(rel => (
                <div 
                  key={rel.id} 
                  className="related-item"
                  onClick={() => handleRelatedClick(rel)}
                >
                  <span className="related-name">{rel.name}</span>
                  <span className="related-arrow">→</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
