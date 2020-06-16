import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import Register from "../screens/Register";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Products from '../screens/Products';
import Commerces from '../screens/Commerces';
import { login, register } from '../services/User';
import Navbar from "../components/Navbar";
import '../i18next';

const logedBrowser = (user) => {
  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Switch>
        <Route exact path="/" component={() => <Home/>} />
        <Route exact path="/products" component={() => <Products/>} />
        <Route exact path="/commerces" component={() => <Commerces/>} />
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
  const [user, setUser] = React.useState("null");

  var auth = React.useMemo(
    () => ({
      login: (username, password, errorCallback) => {
        login(username, password).then(res => handleResponse(res, errorCallback)).catch(res => handleResponse(res, errorCallback));
      },
      logout: () => {
        setUser(null);
      },
      register: (body, errorCallback) => {
        register(body).then(res => handleResponse(res, errorCallback)).catch(res => handleResponse(res, errorCallback));
      },
    }), [],
  );

  function handleResponse(res, errorCallback) {
    if(String(res.status).charAt(0) == 2) {
        setUser(res.data);
    }
    else {
        errorCallback(res.data.description);
    }
}

  return (
    <Suspense fallback={(<div>Loading</div>)}>
      <AuthContext.Provider value={auth} >
        {user ? logedBrowser(user) : loginBrowser()}
      </AuthContext.Provider>
    </Suspense>
  );
}
