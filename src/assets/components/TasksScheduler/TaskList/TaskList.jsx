import { useSelector } from "react-redux";
import Task from "../Task/Task";
import s from "./TaskList.module.css";
const getVisibleTask = (tasks, statusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const statusFilter = useSelector((state) => state.filters.status);
  const visibleTasks = getVisibleTask(tasks, statusFilter);
  return (
    <ul className={s.list}>
      {visibleTasks.map((task) => (
        <li key={task.id} className={s.item}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
