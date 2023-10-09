// import {} from 'components/Profile/Profile';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user';
import { FriendList } from './components/FriendList/FriendList';
import friends from './components/FriendList/friends';
import { Statistics } from './components/Statistic/Statistic';
import data from './components/Statistic/data';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />;
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
