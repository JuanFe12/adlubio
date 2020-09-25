import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import Login from "./components/login";
import Register from "./components/register";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
