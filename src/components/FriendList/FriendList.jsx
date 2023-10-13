import friends from '../../components/data.json/friends.json';
import css from './FriendList.module.css';

export const FriendList = () => {
  return friends.map(friends => {
    const listItemStyle = {
      color: friends.isOnline ? 'green' : 'red',
    };
    return (
      <div className={css.infoFr}>
        <ul className={css.friendList}>
          <li key={friends.id} className="item" style={listItemStyle}>
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
