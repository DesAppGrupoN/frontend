import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (props) => {  

  const { t } = useTranslation();
  const { logout } = useAuth0();
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <ul id="languaje_sel" className="dropdown-content">
        <li><a onClick={() => i18next.changeLanguage("es")}>Español</a></li>
        <li><a onClick={() => i18next.changeLanguage("en")}>English</a></li>
      </ul>
      <nav className="#ef5350 red lighten-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Comprando en casa</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/cart">{t('navbar.cart')}</Link></li>
            <li><Link to="/commerces">{t('navbar.commerces')}</Link></li>
            <li><Link to="/profile">{t('navbar.profile')}</Link></li>
            <li><a className="dropdown-trigger" href="#!" data-target="languaje_sel">{t('navbar.language')}</a></li>
            <li><Link onClick={() => logout({ returnTo: window.location.origin })} to="/">{t('navbar.logout')}</Link></li>
          </ul>
          <div className="files">
         
        </div>        
        </div>
      </nav>
    </div>
  );
}

export default Navbar;