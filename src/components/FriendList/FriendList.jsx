import React from 'react';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'; // Import the FriendListItem component

export const FriendList = ({ friends }) => (
  <div className={css.infoFr}>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  </div>
);
