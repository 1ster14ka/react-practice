import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="filterContact"
        // value={filterInput}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={s.filterInput}
      />
    </div>
  );
};

export default SearchBox;
