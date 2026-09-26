import "../../App.css";
import userData from "../users.json";
import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import friends from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { useEffect, useState } from "react";
import Descriptions from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar";
import LangSwitcher from "./LangSwitcher";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Filter from "./Filter";
import TaskList from "./TaskList";
import FormikLearn from "./FormikLearn";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  const [isReset, setIsReset] = useState(false);

  const [feedback, setFeedback] = useState(() => {
    const item = window.localStorage.getItem("feedback");

    if (item !== null) {
      return JSON.parse(item);
    }
    return { bad: 0, neutral: 0, good: 0 };
  });

  useEffect(() => {
    if (isReset) {
      window.localStorage.removeItem("feedback");
      return;
    }
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback, isReset]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (option) => {
    setFeedback((prev) => ({ ...prev, [option]: prev[option] + 1 }));
    setIsReset(false);
  };
  const resetFeedback = () => {
    setFeedback({ bad: 0, neutral: 0, good: 0 });
    setIsReset(true);
  };

  // Form

  const [contacts, setContacts] = useState(() => {
    const isContacts = window.localStorage.getItem("contacts");
    if (isContacts !== null) {
      return JSON.parse(isContacts);
    }
    return [];
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(value.toLowerCase());
  });

  const addContacts = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (id) =>
    setContacts((prev) => prev.filter((contact) => contact.id !== id));

  return (
    <div>
      <div>
        <h2 className="title">Phonebook</h2>
        <ContactForm addContacts={addContacts} />
        <SearchBox filterInput={value} onFilterInput={setValue} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      </div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

      <Descriptions />
      <Options
        onClickFeedback={updateFeedback}
        onClickReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
