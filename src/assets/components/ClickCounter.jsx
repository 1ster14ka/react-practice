const ClickCounter = ({ value, onUpdate }) => {
  return (
    <div>
      <button onClick={onUpdate}>Click me: {value}</button>
    </div>
  );
};

export default ClickCounter;
