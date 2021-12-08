import './main.scss';

export default function Main({ authed }) {
  return (
    <div className="home">
      <h1>
        Welcome to the homepage!
      </h1>
      {
        authed ? (
          <h2>
            You have successfully authed in your account!
            <br />
            You can now enter your pages
          </h2>
        ) : (
          <h2>
            You are not authed! Please login in to the system
          </h2>
        )
      }
    </div>
    
  )
}