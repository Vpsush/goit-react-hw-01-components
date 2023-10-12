// import friends from '/components/FriendList/friends.json';
import friends from '../../components/data.json/friends.json';
import css from './FriendList.module.css';
// import friends from 'path/to/friends.json';

export const FriendList = ({ isOnline }) => {
  return friends.map(friends => {
    return (
      <div className={css.infoFr}>
        <ul className={css.friendList}>
          <li
            key={friends.id}
            className={css.totalInfo}
            {...(isOnline ? css.green : css.red)}
          >
            <span className={css.status}>{friends.status}</span>
            <img
              className={css.avatar}
              src={friends.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friends.name}</p>
          </li>
        </ul>
      </div>
    );
  });
};
