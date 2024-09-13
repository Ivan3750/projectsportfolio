import Profile from "./ComponentsJSXPage/Profile"
import Statistics from "./ComponentsJSXPage/Statistics"
import FriendList from "./ComponentsJSXPage/FriendList"
import TransactionHistory from "./ComponentsJSXPage/TransactionHistory"
import user from "./ComponentsJSXPage/user.json"
import data from "./ComponentsJSXPage/data.json"
import friends from "./ComponentsJSXPage/friends.json"
import transactions from "./ComponentsJSXPage/transactions.json"




function App() {

  return (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />,
    <TransactionHistory items={transactions} />,

  
  </>  )
}

export default App
