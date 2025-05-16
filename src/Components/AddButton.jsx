export default function AddButton({ onClick, children }) {
  return (
    <button className="AddButton" onClick={onClick} style={{ marginLeft: '10px' }}>
      {children}
    </button>
  );
}