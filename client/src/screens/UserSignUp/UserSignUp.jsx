import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInUser, signUpUser } from "../../services/users";
import "./UserSignUp.css";

export default function UserSignUp(props) {
  const defaultInput = {
    email: "",
    password: "",
  };

  let history = useHistory();
  const [userInput, setUserInput] = useState(defaultInput);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    await signUpUser(userInput);
    let res = await signInUser({
      username: userInput.username,
      password: userInput.password,
    });
    props.setCurrentUser(res.payload);
    props.setToggle((prevState) => !prevState);
    history.push("/items");
  };

  return (
    <div id="userSignUp">
      <h2 id="user-sign-up-title"> User Sign Up </h2>
      <form onSubmit={handleUserSubmit} id="userSignUpForm">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={userInput.email}
          placeholder="Enter email .."
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={userInput.password}
          placeholder="Enter password .."
          onChange={handleChange}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}
