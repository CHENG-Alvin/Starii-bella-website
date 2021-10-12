//Importing packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PartnerPage from "./components/PartnerPage.js";
import Shop from "./components/Shop.js";
import Home from "./components/Home.js";
import "./App.css";

//App
const App = () => {
  return (
    <div className="App">
      {/*Router*/}
      <Router>
        <Switch>
          {/*Home Route*/}
          <Route path="/" exact component={Home} />
          {/*Shop Route*/}
          <Route path="/shop" exact component={Shop} />
          {/*Colab Route*/}
          <Route path="/partner" exact component={PartnerPage} />
        </Switch>
      </Router>
    </div>
  );
};

//Export app
export default App;
