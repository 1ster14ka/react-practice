import { useDispatch } from "react-redux";
import s from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className={s.completed}
      />
      <p className={s.text}>{task.text}</p>
      <button onClick={handleDelete} className={s.btn}>
        Delete
      </button>
    </div>
  );
};

export default Task;
