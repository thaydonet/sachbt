export default function Theorem({ title, children }) {
  return (
    <div className="theorem">
      <h3>💠 {title || 'Định lý'}</h3>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
