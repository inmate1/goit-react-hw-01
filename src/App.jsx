import './App.css';
import Profile from './components/profile/Profile.jsx';
import userData from './components/profile/userData.json';
import FriendList from './components/friendList/FriendList.jsx';
import friends from './components/friendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
