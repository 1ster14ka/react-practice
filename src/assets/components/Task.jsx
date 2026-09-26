const Task = ({ data, onDelete }) => {
  return (
    <li>
      <p>{data.text}</p>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </li>
  );
};

export default Task;
