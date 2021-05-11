import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getItems,
  getItem,
  postItem,
  updatedItem,
  deleteItem,
} from "./services/items";
import ItemsGallery from "./screens/ItemsGallery/ItemsGallery";
import ItemDetail from "./screens/ItemDetail/ItemDetail.jsx";
import ItemCreate from "./screens/ItemCreate/ItemCreate.jsx";
import UserProfile from "./screens/UserProfile/UserProfile.jsx";
function App() {
  const [allItems, setAllItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const items = await getItems();
    console.log(items);
    setAllItems(items);
  };

  return (
    <div className="App">
      <Route exact path="/items">
        <ItemsGallery allItems={allItems} />
      </Route>
      <Route exact path="/items/new">
        <ItemCreate />
      </Route>
      <Route path="/items/:id">
        <ItemDetail />
      </Route>
      <Route exact path="/users/:id">
        <UserProfile />
      </Route>
    </div>
  );
}

export default App;
