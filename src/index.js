import React from "react";
import { render } from "react-dom";
import App from "./routes";
import { Auth0Provider } from "@auth0/auth0-react";

render( <Auth0Provider
    domain="dev-4n2l98-q.us.auth0.com"
    clientId="cUjfi1XqKxo3iIBAcfeHw2ILS2lG2gGv"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>, document.getElementById("root"));
