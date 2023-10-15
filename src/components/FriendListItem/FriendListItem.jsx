// import friends from '../../components/FriendList/friends.json';
import PropTypes from "prop-types";
import css from './FriendListItem.module.css';

export const FriendListItem = ({ status, name, avatar, isOnline, id }) => {
  return (
    <li key={id} className={`${css.item} ${css.withShadow}`}>
      <span
        className={(status = 'isOnline' ? css.green : css.red)}
        style={{
          fontSize: '50px',
          marginRight: '5px',
        }}
      >
        •
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
