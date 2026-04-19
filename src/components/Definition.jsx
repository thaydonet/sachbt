export default function Definition({ title, children }) {
  return (
    <div className="definition">
      <h3>📘 {title || 'Định nghĩa'}</h3>
      {children}
    </div>
  );
}
