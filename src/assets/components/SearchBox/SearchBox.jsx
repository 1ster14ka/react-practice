import s from "./SearchBox.module.css";

const SearchBox = ({ filterInput, onFilterInput }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="filterContact"
        value={filterInput}
        onChange={(e) => onFilterInput(e.target.value)}
        className={s.filterInput}
      />
    </div>
  );
};

export default SearchBox;
