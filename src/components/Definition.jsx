export default function Definition({ title, children }) {
  return (
    <div className="definition">
      <h3>⚡ {title || 'Định nghĩa'}</h3>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
