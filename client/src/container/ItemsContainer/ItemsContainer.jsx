import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
  getItems,
  getItem,
  createItem,
  updatedItem,
  deleteItem,
} from "../../services/items";
import Items from "../../screens/Items/Items";

export default function ItemsContainer() {
  const [allItems, setAllItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const items = await getItems();
    setAllItems(items);
  };

  return (
    <div>
      <Switch>
        <Route path="/items">
          <Items allItems={allItems} />
        </Route>
      </Switch>
    </div>
  );
}
