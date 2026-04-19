export default function Example({ title, children }) {
  return (
    <div className="example">
      <h3>💡 {title || 'Ví dụ'}</h3>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
