import React from 'react';
import "./css/Login.css";
import { useForm } from '../Hooks/useForm';

export const RegistryStudent = () => {
  const [ formValues, handleInputChange, reset ] = useForm(
    {
      name:"",
      lastname:"",
      carne: "",
      phone: "",
      direction: "",
      email: "",
      password: ""
    }
  );
  const {name, lastname, carne, phone, direction, email, password} = formValues;

  const verifyUser = () => {
    console.log(name);
    console.log(lastname);
    console.log(carne);
    console.log(phone);
    console.log(direction);
    console.log(email);
    console.log(password);
    if(name!==""){
      reset();
    }
  };

  const bulkLoad = () => {

  };

  return (
    <div className="animate__animated animate__bounceInLeft registryStudent">
      <h2 id="headerTitle">Registro de estudiante</h2>
      <div>
        <div className="row">
          <label>Nombre</label>
          <input
            name="name"
            type="text"
            placeholder="Nombre del estudiante"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Apellido</label>
          <input
            name="lastname"
            type="text"
            placeholder="Apellido del estudiante"
            value={lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Carne</label>
          <input
            name="carne"
            type="text"
            placeholder="Carnet del estudiante"
            value={carne}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Telefono</label>
          <input
            name="phone"
            type="text"
            placeholder="Telefono del estudiante"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Dirección</label>
          <input
            name="direction"
            type="text"
            placeholder="Dirección del estudiante"
            value={direction}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Correo electrónico</label>
          <input
            name="email"
            type="text"
            placeholder="Email del estudiante"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Contraseña del estudiante"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div id="button" className="row">
          <button
            onClick={verifyUser}
          >
            Registrar
          </button>
          <button className='bulkLoad'
            onClick={bulkLoad}
          >
            Agregar mediante CSV
          </button>
        </div>
      </div>
    </div>
  )
}
