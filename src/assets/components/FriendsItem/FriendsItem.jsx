import styles from "./FriendsItem.module.css";

const FriendsItem = ({ image, name, isOnline }) => {
  return (
    <div>
      <img className={styles.img} src={image} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendsItem;
