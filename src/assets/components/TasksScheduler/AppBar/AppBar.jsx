import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={s.header}>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};

export default AppBar;
