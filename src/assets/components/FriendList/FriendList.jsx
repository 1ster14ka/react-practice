import FriendsItem from "../FriendsItem/FriendsItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li key={id} className={styles.item}>
          <FriendsItem image={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
