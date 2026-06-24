import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import lessons from '../data/lessons';
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

function KatexText({ text }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {text}
    </ReactMarkdown>
  );
}

export default function NodePanel({ node, onClose }) {
  if (!node) return null;

  const isLeaf = node.type === 'leaf';
  const color = TYPE_COLORS[node.type] || '#22d3ee';
  const mdContent = isLeaf && node.mdKey ? lessons[node.mdKey] : null;

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
        </div>

        {isLeaf && mdContent && (
          <section className="panel-section">
            <div className="section-icon">📖</div>
            <h3>Lý thuyết</h3>
            <div className="panel-content markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {mdContent}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {isLeaf && node.video && (
          <section className="panel-section">
            <div className="section-icon">🎬</div>
            <h3>Video bài giảng</h3>
            <a
              href={node.video}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              ▶ Xem video trên YouTube
            </a>
          </section>
        )}

        {isLeaf && node.questions && node.questions.length > 0 && (
          <section className="panel-section">
            <div className="section-icon">❓</div>
            <h3>Câu hỏi liên quan</h3>
            <ul className="panel-list">
              {node.questions.map((q, i) => (
                <li key={i}><KatexText text={q} /></li>
              ))}
            </ul>
          </section>
        )}

        {isLeaf && node.exams && node.exams.length > 0 && (
          <section className="panel-section">
            <div className="section-icon">📝</div>
            <h3>Đề thi liên quan</h3>
            <ul className="panel-list">
              {node.exams.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
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
      </div>
    </div>
  );
}
