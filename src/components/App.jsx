
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Statistics } from './Statistics/Statistics';

import data from '../data/data.json';
import user from '../data/user.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'


import css from'./style.module.css'


export const App = () => {
  return (
    <div className={css.app}>
      <Profile  user={user}/>
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
      
)
};
