import React, { useContext } from "react";
import Search from "./pages/Search";
import Top from "./pages/Top";
import Watch from "./pages/Watch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Store } from "./store/index";

function App() {
  const { globalState, setGlobalState } = useContext(Store);
  const term = globalState.term;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path={`/search`} component={Search} />
        <Route exact path="/watch" component={Watch} />
      </Switch>
    </Router>
  );
}

export default App;
