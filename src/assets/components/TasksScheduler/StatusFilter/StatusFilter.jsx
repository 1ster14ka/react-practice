import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import s from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filtersSlice";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <div className={s.wrapper}>
      <Button
        selected={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Complited
      </Button>
    </div>
  );
};

export default StatusFilter;
