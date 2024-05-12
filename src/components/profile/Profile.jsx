import css from './Profile.module.css';
import './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.cardWrapper}>
      <div className={css.imgWrapper}>
        <img
          className={css.logo}
          src={image}
          alt={name}
          width='160'
          height='160'
        />
        <p className={css.username}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.cardList}>
        <li className={css.cardListItem}>
          <span className={css.cardText}>Followers</span>
          <span className={css.cardPoints}>{followers}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.cardText}>Views</span>
          <span className={css.cardPoints}>{views}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.cardText}>Likes</span>
          <span className={css.cardPoints}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
