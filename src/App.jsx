// import {} from 'components/Profile/Profile';
import csss from './index.css';
import css from './components/Statistic/Statistic.module.css';
import { Profile } from './components/Profile/Profile';
import user from './components/data.json/user.json';
import { FriendList } from './components/FriendList/FriendList';
import { Statistics } from './components/Statistic/Statistic';
import data from './components/data.json/data.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './components/data.json/transactions.json';

export const App = () => {
  return (
    <div className="mainBody">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <div className={css.infoFr}>
        <FriendList isOnline />
      </div>
      {/* <FriendListItem /> */}
      {/* <Statistics stats={data} />; */}
      <TransactionHistory items={transactions} />
    </div>
  );
};
