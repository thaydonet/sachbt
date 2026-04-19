export default function Theory({ title, children }) {
  return (
    <div className="theory">
      <h3>📝 {title || 'Lý thuyết'}</h3>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
