import React from "react";
import Register from "./components/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login";

function App() {
  

  return (
    <Router >
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
    </Router>
  );
}

export default App;
