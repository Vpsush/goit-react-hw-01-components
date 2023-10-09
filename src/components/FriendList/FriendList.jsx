export const FriendList = friends => {
  return (
    <ul className="friend-list">
      <li class="item">
        <span class="status">{friends.status}</span>
        <img class="avatar" src={friends.avatar} alt="User avatar" width="48" />
        <p class="name">{friends.name}</p>
      </li>
      <li className="FriendListItem"></li>
      <li className="FriendListItem"></li>
      <li className="FriendListItem"></li>
      <li className="FriendListItem"></li>
    </ul>
  );
};
