import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = ({ unAuth }) => (
  <header>
    <nav>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ display: "inline", marginRight: 20 }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "inline", marginRight: 20 }}>
          <Link to="/players">Players</Link>
        </li>
        <li style={{ display: "inline", marginRight: 20 }}>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link to="/" onClick={unAuth}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
