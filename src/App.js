import Home from "./components/Home";
import Event from "./components/Navlink/Event"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mission from "./components/Mission/Mission";


function App() {
  return (
    <Router>
      <Switch>


        <Route path="/" exact component={Home} />
        <Route path="/Event" exact component={Event} />
        <Route path="/mission" exact component={Mission} />
      </Switch>
    </Router>
  );
}

export default App;
