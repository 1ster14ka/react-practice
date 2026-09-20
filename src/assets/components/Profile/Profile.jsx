import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImg}>
        <img src={image} alt={name} className={styles.img} />
        <h3 className={styles.username}>{name}</h3>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.text}>Followers</span>
          <span className={styles.info}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
