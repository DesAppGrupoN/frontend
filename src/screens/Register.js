import React, { Component } from "react";
import '../styles/Login.css';
import { Link } from 'react-router-dom';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
    }
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className='container'>
      <div className='bg-image'/>
      <div className='login-box'>
        <div className="login-form">
          <h1>Bienvenido a Comprando en Casa</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Nombre" required onChange={(event) => this.setState({name: event.target.value}) } />
            <input type="text" placeholder="Email" required onChange={(event) => this.setState({email: event.target.value}) } />
            <input type="password" placeholder="Contraseña" required onChange={(event) => this.setState({password: event.target.value}) } />
            <input type="submit" value="Registrarse" />
          </form>
          <p className='bottom-text'>¿Ya tenes una cuenta? ¡<Link className='link' to="/">Inicia sesion</Link>!</p> 
        </div>
      </div>
    </div>
    )
  }

}