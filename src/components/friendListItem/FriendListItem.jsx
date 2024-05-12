import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt='Avatar' width='48' />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.isOnline : css.isOffline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
