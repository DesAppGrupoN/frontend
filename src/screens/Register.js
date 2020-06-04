import React from "react";
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Error from '../components/Error';

const Register = (props) => {

  
  const { register } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  function handleSubmit(event) {
    const body = {
      "username": username, 
      "name": name,
      "lastName": lastName,
      "email": email,
      "password": password
    }
    register(body, setError)
  }

    return (
      <div className='container'>
      <div className='bg-image'/>
      <div className='login-box'>
        <div className="login-form">
            <h1>Bienvenido a Comprando en Casa</h1>
            <Error error={error}/>
            <input type="text" placeholder="Usuario" required onChange={(event) => setUsername(event.target.value) } />
            <input type="text" placeholder="Nombre" required onChange={(event) => setName(event.target.value) } />
            <input type="text" placeholder="Apellido" required onChange={(event) => setLastName(event.target.value) } />
            <input type="text" placeholder="Email" required onChange={(event) => setEmail(event.target.value) } />
            <input type="password" placeholder="Contraseña" required onChange={(event) => setPassword(event.target.value) } />
            <input type="submit" value="Registrarse" onClick={() => handleSubmit()}/>
            <p className='bottom-text'>¿Ya tenes una cuenta? ¡<Link className='link' to="/">Inicia sesion</Link>!</p> 
        </div>
      </div>
    </div>
    )

}

export default Register;