// import {} from 'components/Profile/Profile';
import css from './index.module.css';

import { Profile } from './components/Profile/Profile';
import user from 'dataJson/user.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from 'dataJson/friends.json';
import { Statistics } from './components/Statistic/Statistic';
import data from 'dataJson/data.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from 'dataJson/transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <div className={css.infoFr}>
        <FriendList friends={friends} />
      </div>
      {/* <div className={css.trans}> */}
      {/* <TitleTransaction /> */}
      <TransactionHistory items={transactions} />
      {/* </div> */}
    </div>
  );
};
