import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInUser, signUpUser } from "../../services/users";
import "./UserSignUp.css";

export default function UserSignUp(props) {
  const defaultInput = {
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
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
    let data = await signUpUser(userInput);
    let res = await signInUser({
      email: userInput.email,
      password: userInput.password,
    });
    props.setCurrentUser(res.payload);
    props.setToggle((prevState) => !prevState);
    history.push("/items");
  };

  return (
    <div className="users-sign-up-container">
      <form onSubmit={handleUserSubmit} className="user-signup-form">
        <h2> User Sign-Up </h2>
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
        <label>Password Confirmation</label>
        <input
          name="password_confirmation"
          type="password"
          value={userInput.password_confirmation}
          placeholder="Enter password again .."
          onChange={handleChange}
        />
        <label>first_name</label>
        <input
          name="first_name"
          type="first_name"
          value={userInput.first_name}
          placeholder="Enter first_name .."
          onChange={handleChange}
        />
        <label>last_name</label>
        <input
          name="last_name"
          type="last_name"
          value={userInput.last_name}
          placeholder="Enter last_name .."
          onChange={handleChange}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}
