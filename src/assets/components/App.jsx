import "../../App.css";
import userData from "../users.json";
import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import friends from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { useEffect, useRef, useState } from "react";
import Descriptions from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImgGallery } from "../../gallery-img";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
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

  //  useRef

  const playerRef = useRef();
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    playerRef.current.play();
    setIsPlay(true);
  };
  const handlePause = () => {
    playerRef.current.pause();
    setIsPlay(false);
  };

  // Seach Image Gallery
  const [galleryImg, setGalleryImg] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState({});

  useEffect(() => {
    if (query === "") {
      return;
    }
    const searchQuery = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImgGallery(query, page);
        setGalleryImg((prev) => [...prev, ...results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    searchQuery();
  }, [page, query]);

  const handleSubmit = (value) => {
    if (value === query) {
      return;
    }
    setQuery(value);
    setGalleryImg([]);
  };

  const addPage = () => {
    setPage((prev) => prev + 1);
  };

  const OpenModal = (obj) => {
    setModalImg(obj);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {galleryImg.length > 0 && (
        <>
          <ImageGallery galleryData={galleryImg} onOpenModal={OpenModal} />
          <LoadMoreBtn onAddPage={addPage} />
          {/* <p>{page}</p> */}
        </>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isOpen && (
        <ImageModal
          img={modalImg}
          modalIsOpen={OpenModal}
          closeModal={closeModal}
        />
      )}

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
      <div className="testWrapper">
        {isPlay ? (
          <button onClick={handlePause}>
            <FaPauseCircle className="test" />
          </button>
        ) : (
          <button onClick={handlePlay}>
            <FaPlayCircle className="test" />
          </button>
        )}
        <video
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          ref={playerRef}
        ></video>
      </div>
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
