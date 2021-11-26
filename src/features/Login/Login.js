import { useState } from "react"
import { useNavigate } from "react-router";


import "./login.scss"
export default function Login({ authed }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  function onSubmit(e){
    
  }

  return (
    <div className="wrapper">
      <h1>
        Login page
      </h1>
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label for="user">User</label>
          <input type="text" class="form-control" id="user" value={username} onChange={(event) => setUsername(event.target.value)}/>
          <small class="form-text text-muted">The correct username is: Pablo</small>
        </div>
        <div class="form-group">
          <label for="passsword">Password</label>
          <input type="password" class="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <small class="form-text text-muted">The correct password is: qwerty</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    
  )
}