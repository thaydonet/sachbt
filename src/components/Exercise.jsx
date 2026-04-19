export default function Exercise({ title, children }) {
  return (
    <div className="exercise">
      <h3>🔥 {title || 'Bài tập'}</h3>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
