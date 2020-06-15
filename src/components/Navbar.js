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
          <li><Link to="/commerces">Mis comercios</Link></li>
          <li><Link to="/profile">Mi perfil</Link></li>
          <li><Link onClick={logout} to="/">Cerrar sesion</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;