export default function Property({ title, children }) {
  return (
    <div className="property">
      <h3>✦ {title || 'Tính chất'}</h3>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
