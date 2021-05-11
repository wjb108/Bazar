import { Route, Switch } from "react-router";
import ItemsGallery from "./components/ItemsGallery";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/items">
          <ItemsGallery />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
