import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import s from "./TaskForm.module.css";
import { addTask } from "../../redux/tasksSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addTask({
        id: crypto.randomUUID(),
        text: form.elements.text.value,
        completed: false,
      }),
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text..."
        className={s.input}
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
