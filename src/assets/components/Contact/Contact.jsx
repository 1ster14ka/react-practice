import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Contact = ({ contact: { name, number, id }, onDeleteContact }) => {
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
      <button onClick={() => onDeleteContact(id)} className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
