import css from './Profile.module.css';

import data from '../data.json/user.json';

export const Profile = () => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={data.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{data.username}</p>
        <p className={css.tag}>{data.tag}</p>
        <p className={css.location}>{data.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsNumber}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>1000</span>
        </li>
        <li className={css.statsNumber}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>2000</span>
        </li>
        <li className={css.statsNumber}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
};
