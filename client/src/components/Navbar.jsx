import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <div className="home-button">
        <Link to="/items">
          <h2>Bazar</h2>
        </Link>
      </div>
      {props.currentUser ? (
        <>
          <div className="profile-button">
            <Link to="/profile">
              <h3>Profile</h3>
            </Link>
            <button onClick={props.logout}>Sign Out</button>
          </div>
        </>
      ) : (
        <>
          <div className="other-buttons">
            <Link to="/users/sign_up">
              <h3>Sign Up</h3>
            </Link>
            <Link to="/users/sign_in">
              <h3>Sign In</h3>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
