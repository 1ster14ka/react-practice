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

  return (
    <div>
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
