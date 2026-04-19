export default function Theorem({ title, children }) {
  return (
    <div className="theorem">
      <h3>📜 {title || 'Định lý'}</h3>
      {children}
    </div>
  );
}
