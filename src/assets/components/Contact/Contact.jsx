import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.info}>
        <p className={s.text}>
          <FaUser />
          {name}
        </p>
        <p className={s.text}>
          <IoCall />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        className={s.btn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
