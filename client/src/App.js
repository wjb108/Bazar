import { Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getItems,
  getItem,
  createItem,
  updatedItem,
  deleteItem,
} from "./services/items";
import ItemsGallery from "./screens/ItemsGallery/ItemsGallery";
import ItemDetail from "./screens/ItemDetail/ItemDetail.jsx";
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
      <Route path="/items/:id">
        <ItemDetail />
      </Route>
    </div>
  );
}

export default App;
