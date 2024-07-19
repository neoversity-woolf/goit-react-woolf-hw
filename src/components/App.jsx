import Profile from './Profile/Profile';
import ProfileMeta from './Profile/ProfileMeta';
import Statistic from './Profile/Statistic';
import FriendList from './FriendsList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  const profileDetails = {
    username,
    tag,
    location,
    avatar,
  };

  return (
    <>
      <Profile>
        <ProfileMeta profileDetails={profileDetails} />
        <Statistic stats={stats} />
      </Profile>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
