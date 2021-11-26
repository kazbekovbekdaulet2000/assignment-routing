import { useState } from "react"
import { useNavigate } from "react-router";
import './login.scss';
import {users} from './logins'
export default function Login({ authed, setAuthed }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault();
    const user = users.find((val)=>{
      return val.username === username && val.password === password
    })
    if(user){
      setAuthed(true);
      navigate('/', { replace: true })
    } else {
      setErrorMsg('Username or password is not correct');
    }
  }

  return (
    <section className="wrapper">
      <h1>
        Login page
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="user">User</label>
          <input type="text" id="user" value={username} onChange={(event) => setUsername(event.target.value)}/>
          <small>The correct username is: Pablo</small>
        </div>
        <div className="form-group">
          <label htmlFor="passsword">Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <small>The correct password is: qwerty</small>
        </div>
        <button type="submit">Submit</button>
      </form>
      {errorMsg && (
        <div className="alert" role="alert">
          {errorMsg}
         </div>
      )}
    </section>
    
  )
}