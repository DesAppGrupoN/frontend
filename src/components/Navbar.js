import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

const Navbar = (props) => {

  const { logout } = React.useContext(AuthContext);

  return (
    <nav className="#ef5350 red lighten-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Comprando en casa</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to={{pathname: "/new_product", restaurant_id: 1}}>Agregar producto</Link></li>
          <li><Link to="/new_commerce">Agregar comercio</Link></li>
          <li><Link to="badges.html">Mi perfil</Link></li>
          <li><Link to="collapsible.html">Cerrar sesion</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;