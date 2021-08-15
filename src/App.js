import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DessertSelectionWidget from "./components/DessertSelectionWidget";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DessertSelectionWidget} />
      </Switch>
    </Router>
  );
}

export default App;
