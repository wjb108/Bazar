import { Link } from "react-router-dom";
import "./Navbar.css";
import shop from "../../src/shop.png";
// import mktimg from "../img/mkt-place.jpeg";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <div className="home-button">
        <div className="home-button-img">
          <Link to="/items">
            <img className="button-img-link" src={shop} alt="home" />
          </Link>
        </div>
      </div>
      <div className="RightButtons">
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
    </div>
  );
}
