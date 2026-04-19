export default function Practice({ title, children }) {
  return (
    <div className="practice">
      <h3>✏️ {title || 'Thực hành'}</h3>
      {children}
    </div>
  );
}
