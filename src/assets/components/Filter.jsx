const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <label>
        Search by name{" "}
        <input
          type="text"
          value={value}
          onChange={(evt) => onFilter(evt.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
