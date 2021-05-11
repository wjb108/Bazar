import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <button onClick={props.logout}>Sign Out</button>
      <Link to="/items">
        <button>Bazar</button>
      </Link>
      <Link to="/users/sign_up">
        <button>Sign Up</button>
      </Link>
      <Link to="/users/sign_in">
        <button>Sign in</button>
      </Link>
    </div>
  );
}
