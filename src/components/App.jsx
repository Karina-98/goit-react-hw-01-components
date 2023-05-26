
// import { Description } from 'components/description/description'
// import user from './data/user.json';
// import { Stats } from 'components/stats/stats'
import user from './data/user.json';
import { Profile } from './profile/profile';
import { FriendList } from './friendList/friendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Statistics } from './statistics/statistics';
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'


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
