import './profile.scss';
export default function Profile({user}) {
  return (
    <div className="profile">
      <h1>
        Welcome to the profile!
      </h1>
      {
        user ? (
          <p>You are authed!</p>
        ): (
          <h2>
            You are not authed! Please login in to the system
          </h2>
        )
      }
    </div>
    
  )
}