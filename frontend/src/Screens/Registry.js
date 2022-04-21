import React from 'react';
import "./css/Login.css";
import { useForm } from '../Hooks/useForm';

export const Login = () => {
  const [ formValues, handleInputChange, reset ] = useForm( {username:"", password:""} );
  const { username, password } = formValues;

  const verifyUser = () => {
    console.log(username);
    console.log(password);
    if(username!==""){
      reset();
    }
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Inicio de sesion</h2>
      <div>
        <div className="row">
          <label>Usuario</label>
          <input
            name="username"
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div id="button" className="row">
          <button
            onClick={verifyUser}
          >Ingresar</button>
        </div>
      </div>
    </div>
  )
}
