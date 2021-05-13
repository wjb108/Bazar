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
    if (res.errors) {
      return alert("Please sign up for an account");
    } else if (res.token) {
      props.setCurrentUser(res.payload);
      props.setToggle((prevState) => !prevState);
      history.push("/profile");
    }
    console.log(res);
  };

  return (
    <div className="users-sign-in-container">
      <form className="user-signin-form" onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>
        <label htmlFor="email" placeholder="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter email .."
          onChange={handleChange}
          value={userInput.email}
        ></input>
        <br></br>
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
        <br></br>
        <button className="user-sign-in-button" type="submit">
          Sign-In
        </button>
      </form>
    </div>
  );
}
