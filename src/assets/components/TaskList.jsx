import Task from "./Task";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} data={task} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
