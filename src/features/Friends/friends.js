import './friends.scss';
import { Link } from "react-router-dom"

export const friendList = [
  {id: 1, name: "friend1"},
  {id: 2, name: "friend2"},
  {id: 3, name: "friend3"},
  {id: 4, name: "friend4"},
]

export default function Friends({user, setFriend}) {
  const listItems = friendList.map((val) =>
    <li key={val.id}><Link onClick={()=>setFriend(val.id)} to={`/friends/${val.id}`}>{val.name}</Link></li>
  );
  return (
    <div className="profile">
      <h1>
        Welcome to the Friends!
      </h1>
      {
        user ? 
          <ul> {listItems} </ul> : (
          <h2>
            You are not authed! Please login in to the system
          </h2>
        )
      }


    </div>
    
  )
}