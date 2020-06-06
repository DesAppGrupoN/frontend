import React, { Component } from "react";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            Comprando En Casa
          </div>
        </div>

        <div className="nav-links">
          <Link to="/">Nombre de usuario</Link>
        </div>
      </div>
    );
}

export default Navbar;