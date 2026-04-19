export default function Note({ title, children }) {
  return (
    <div className="note">
      <h3>⚠️ {title || 'Chú ý'}</h3>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
