import React, { useEffect } from "react";
import '../styles/Login.css';
import Error from '../components/Error';
import { useAuth0 } from "@auth0/auth0-react";

const Login = (props) => {

  const { loginWithRedirect, error } = useAuth0();

  return (
    <div className='lr-container'>
      <div className='bg-image' />
      <div className='login-box'>
        <div className="login-form">
            <h1>Bienvenido a Comprando en Casa</h1>
            <Error error={error}/>
            <input type="submit" value="Iniciar sesion" onClick={loginWithRedirect}/>
        </div>
      </div>
    </div>
  );
}

export default Login;