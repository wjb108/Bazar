import { signInUser } from "../../services/users";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./UserSignIn.css";

export default function UserSignIn(props) {
  let defaultInput = {
    email: "",
    password: "",
  };
  const [userInput, setUserInput] = useState(defaultInput);

  const history = useHistory();

  function handleChange(event) {
    let { id, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await signInUser(userInput);
    props.setCurrentUser(res.payload);
    props.setToggle((prevState) => !prevState);
    history.push("/profile");
  };

  return (
    <div className="users-sign-in-container">
      <form className="user-signin-form" onSubmit={handleSubmit}>
        <h2>User Sign-In</h2>
        <label htmlFor="email" placeholder="email">
          email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter email .."
          onChange={handleChange}
          value={userInput.email}
        ></input>
        <label htmlFor="password" placeholder="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password .."
          onChange={handleChange}
          value={userInput.password}
        ></input>
        <button className="user-sign-in-button" type="submit">
          Sign-In
        </button>
      </form>
    </div>
  );
}
