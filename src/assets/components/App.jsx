import "../../App.css";
import userData from "../users.json";
import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import friends from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

function App() {
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
    </div>
  );
}

export default App;
