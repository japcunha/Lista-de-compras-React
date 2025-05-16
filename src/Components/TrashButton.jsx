export default function TrashButton({ onClick, children }) {
  return (
    <button className="TrashButton" onClick={onClick} style={{ marginLeft: '10px', color: 'red' }}>
      {children}
    </button>
  );
}
