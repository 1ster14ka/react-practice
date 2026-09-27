import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoSearchCircleOutline } from "react-icons/io5";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.searchImg.value;
    if (!value) {
      toast.error("Input text please");
      return;
    }

    onSubmit(value);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <input
            type="text"
            name="searchImg"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            <IoSearchCircleOutline className={s.icon} width="30px" />
          </button>
        </label>
      </form>
    </header>
  );
};

export default SearchBar;
