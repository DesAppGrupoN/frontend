import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Products from '../screens/Products';
import Commerces from '../screens/Commerces';
import Search from "../screens/Search";
import Profile from '../screens/Profile';
import SearchProducts from '../screens/SearchProducts';
import ShoppingCart from '../screens/ShoppingCart';
import Navbar from "../components/Navbar";
import SnackBar from '../components/SnackBar';
import { useAuth0 } from "@auth0/auth0-react";
import '../i18next';
import History from "../screens/History";

const logedBrowser = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={() => <Home/>} />
        <Route exact path="/products" component={() => <Products/>} />
        <Route exact path="/commerces" component={() => <Commerces/>} />
        <Route exact path="/search" component={() => <Search/>} />
        <Route exact path="/search_prod" component={() => <SearchProducts/>} />
        <Route exact path="/cart" component={() => <ShoppingCart/>} />
        <Route exact path="/profile" component={() => <Profile/>} />
        <Route exact path="/history" component={() => <History/>} />
      </Switch>
      <SnackBar/>
    </BrowserRouter>
  )
}

const loginBrowser = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default () => {

  const { isAuthenticated } = useAuth0();

  return (
    <Suspense fallback={(<div>Loading</div>)}>
        {isAuthenticated ? logedBrowser() : loginBrowser()}
    </Suspense>
  );
}
