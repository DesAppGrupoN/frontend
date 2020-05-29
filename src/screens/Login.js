import React, { Component } from "react";
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { login } from '../services/User';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    login(this.state).then(res => console.log(res)).catch(res => console.log("rompio: ", res));
  }

  render() {
    return (
      <div className='container'>
      <div className='bg-image'/>
      <div className='login-box'>
        <div className="login-form">
          <h1>Bienvenido a Comprando en Casa</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Usuario" required onChange={(event) => this.setState({username: event.target.value}) } />
            <input type="password" placeholder="Contraseña" required onChange={(event) => this.setState({password: event.target.value}) } />
            <input type="submit" value="Iniciar sesion" />
          </form>
          <p className='bottom-text'>¿No tienes cuenta? ¡<Link className='link' to="/register">Registrate</Link>!</p> 
        </div>
      </div>
    </div>
    )
  }

}