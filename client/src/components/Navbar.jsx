import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <Link to="/items">
        <h2>Bazar</h2>
      </Link>
      <Link to="/users/sign_up">
        <h3>Sign Up</h3>
      </Link>
      <Link to="/users/sign_in">
        <h3>Sign in</h3>
      </Link>
      <Link to="/profile">
        <h3>Profile</h3>
      </Link>
      <button onClick={props.logout}>Sign Out</button>
    </div>
  );
}
