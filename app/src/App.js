import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Videos from "./components/Videos.js";
import Shop from "./components/Shop.js";
import Home from "./components/Home.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*Router*/}
      <Router>
        <Switch>
          {/*Home Route*/}
          <Route path="/" exact component={Home} />
          {/*Shop Route*/}
          <Route path="/shop" exact component={Shop} />
          {/*Video Route*/}
          <Route path="/video" exact component={Videos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
