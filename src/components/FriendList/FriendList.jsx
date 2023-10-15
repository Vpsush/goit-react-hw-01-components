import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import friends from 'dataJson/friends.json';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = () => {
  return (
    <div className={css.infoFr}>
      <ul className={css.friendList}>
        {friends.map(friends => (
          <FriendListItem />
          // <li key={friend.id} className={`${css.item} ${css.withShadow}`}>
          //   <span
          //     className={friend.isOnline ? css.green : css.red}
          //     style={{
          //       fontSize: '50px',
          //       marginRight: '5px',
          //     }}
          //   >
          //     •
          //   </span>
          //   <img
          //     className={css.avatar}
          //     src={friend.avatar}
          //     alt="User avatar"
          //     width="48"
          //   />
          //   <p className={css.name}>{friend.name}</p>
          // </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
