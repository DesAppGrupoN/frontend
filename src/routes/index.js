import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Home from "../screens/Home";

const loged = false;

const logedBrowser = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  )
}


const loginBrowser = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
)

export default () => {
  return loged ? logedBrowser() : loginBrowser()
}
