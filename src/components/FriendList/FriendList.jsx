import friends from '../../components/data.json/friends.json';
import css from './FriendList.module.css';

export const FriendList = ({ isOnline }) => {
  return (
    <div className={css.infoFr}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={`${css.item} ${css.withShadow}`}>
            <span
              className={friend.isOnline ? css.green : css.red}
              style={{
                fontSize: '50px',
                marginRight: '5px',
              }}
            >
              •
            </span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
