import './app.scss';
import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom"
import Main from "./features/Main/Main"
import Login from "./features/Login/Login"
import Profile from './features/Profile/Profile';
import Friends from './features/Friends/friends';

function App() {
  const [authed, setAuthed] = useState(null);
  const [friend, setFriend] = useState(null);

  const logout=()=>{
    setAuthed(null)
  } 

  return (
    <div className="App">
      <nav>
        <div className="main_nav">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
          <Link to="/friends" className="link">
            Friends
          </Link>
        </div>
        {authed !== null ? <span className="link-logout" onClick = {logout}>Logout</span> : <Link className="link" to='/login'>Login</Link>}
      </nav>

      <Routes>
        <Route path="/" element={
          <Main authed={authed}/>
        } />
        <Route path="/profile" element={
          <Profile user = {authed}/>
        } />
        <Route path="/friends" element={
          <Friends user = {authed} setFriend={setFriend}/>
        }>
        </Route>
        <Route path="/friends/:id" element={
          <p> friend {friend}</p>
        } />
        <Route path="/login" element={
          <Login setAuthed = {setAuthed} />
        } />
      </Routes>
    </div>
  );
}

export default App;
