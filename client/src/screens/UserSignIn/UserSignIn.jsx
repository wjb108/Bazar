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

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await signInUser(userInput);
    props.setCurrentUser(res.payload);
    history.push("/items");
  };

  function handleChange(event) {
    let { id, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  return (
    <div className="users-sign-in">
      <form className="user-signin-form" onSubmit={handleSubmit}>
        <h1>User Sign-In</h1>
        <label htmlFor="email" placeholder="email">
          email
        </label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={userInput.email}
        ></input>
        <label htmlFor="password" placeholder="password">
          Password
        </label>
        <input
          type="password"
          id="password"
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
