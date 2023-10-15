import React from 'react';
import css from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ friend }) => (
  <li key={friend.id} className={`${css.item} ${css.withShadow}`}>
    <span
      className={friend.isOnline ? css.green : css.red}
      style={{ fontSize: '50px', marginRight: '5px' }}
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
);

export default FriendListItem;
