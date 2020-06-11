import React from "react";
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Error from '../components/Error';

const Login = (props) => {

  const { login } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  function handleSubmit() {
    const body = {
      "username": username, 
      "password": password
    }
    login(body, setError)
  }

  return (
    <div className='lr-container'>
      <div className='bg-image' />
      <div className='login-box'>
        <div className="login-form">
            <h1>Bienvenido a Comprando en Casa</h1>
            <Error error={error}/>
            <input type="text" placeholder="Usuario" required onChange={(event) => setUsername(event.target.value)} />
            <input type="password" placeholder="Contraseña" required onChange={(event) => setPassword(event.target.value)} />
            <input type="submit" value="Iniciar sesion" onClick={() => handleSubmit()}/>
            <p className='bottom-text'>¿No tienes cuenta? ¡<Link className='link' to="/register">Registrate</Link>!</p>
        </div>
      </div>
    </div>
  );
}

export default Login;