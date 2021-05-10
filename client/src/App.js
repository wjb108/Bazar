import { Route, Switch } from "react-router";
import ItemsContainer from "./container/ItemsContainer/ItemsContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/items" component={ItemsContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
