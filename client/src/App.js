import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItems } from "./services/items";
import { getCategories } from "./services/categories";
import { verifyUser } from "./services/users";
import ItemsGallery from "./screens/ItemsGallery/ItemsGallery";
import ItemDetail from "./screens/ItemDetail/ItemDetail.jsx";
import ItemEdit from "./screens/ItemEdit/ItemEdit.jsx";
import ItemCreate from "./screens/ItemCreate/ItemCreate.jsx";
import UserProfile from "./screens/UserProfile/UserProfile.jsx";
import UserSignUp from "./screens/UserSignUp/UserSignUp.jsx";
import UserSignIn from "./screens/UserSignIn/UserSignIn.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [toggle, setToggle] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetchItems();
    fetchCategories();
    requestUserVerification();
  }, [toggle]);

  const fetchItems = async () => {
    const items = await getItems();
    setAllItems(items);
  };
  const fetchCategories = async () => {
    const categories = await getCategories();
    setAllCategories(categories);
  };

  const requestUserVerification = async () => {
    const user = await verifyUser();
    setCurrentUser(user);
  };

  const logout = async () => {
    await localStorage.clear();
    setToggle((prevState) => !prevState);
    history.push("/items");
  };

  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout} />
      <Route exact path="/items">
        <ItemsGallery allItems={allItems} />
      </Route>
      <Route exact path="/items/:id">
        <ItemDetail />
      </Route>
      <Route exact path="/new/item">
        <ItemCreate setToggle={setToggle} allCategories={allCategories} />
      </Route>
      <Route exact path="/edit/item/:id">
        <ItemEdit setToggle={setToggle} />
      </Route>
      <Route exact path="/profile">
        <UserProfile setToggle={setToggle} currentUser={currentUser} />
      </Route>
      <Route exact path="/users/sign_up">
        <UserSignUp setToggle={setToggle} setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/users/sign_in">
        <UserSignIn setToggle={setToggle} setCurrentUser={setCurrentUser} />
      </Route>
    </div>
  );
}

export default App;
