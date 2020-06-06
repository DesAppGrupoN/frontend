import React from "react";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

const Navbar = (props) => {
  
    const { logout } = React.useContext(AuthContext);

    return (
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            Comprando En Casa
          </div>
        </div>

        <div className="nav-links">
          <Link to="/">{props.user.username}</Link>
          <Link onClick={logout}>Cerrar sesion</Link>
        </div>
      </div>
    );
}

export default Navbar;