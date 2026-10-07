import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { contactsSelect } from "../redux/contactsSlice";
import { filterSelect } from "../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(contactsSelect);
  const filterContacts = useSelector(filterSelect);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts),
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
