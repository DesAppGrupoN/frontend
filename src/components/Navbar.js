import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

const Navbar = (props) => {

  const { logout } = React.useContext(AuthContext);

  return (
    <nav className="#ef5350 red lighten-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Comprando en casa</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/new_product">Agregar producto</a></li>
          <li><a href="badges.html">Mi perfil</a></li>
          <li><a href="collapsible.html">Cerrar sesion</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;