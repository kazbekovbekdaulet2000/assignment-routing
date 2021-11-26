import './app.scss';
import { useState } from "react";
import { Link, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Main from "./features/Main/Main"
import Login from "./features/Login/Login"
function App() {
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();

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
        {authed ? <span className="link">Logout</span> : <Link className="link" to='/login'>Login</Link>}
      </nav>

      <Routes>
        <Route path="/" element={
          <Main authed={authed}/>
        } />
        <Route path="/profile" element={
          <p> profile 2</p>
        } />
        <Route path="/friends" element={
          <p> friends 3</p>
        }>
        <Route path=":friend" element={
          <p> :friend 4</p>
        } />
        </Route>
        <Route path="/login" element={
          <Login/>
        } />
      </Routes>
    </div>
  );
}

export default App;
