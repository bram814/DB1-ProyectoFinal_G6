import React from 'react';
import './../css/Login.css'
import { useForm } from '../../Hooks/useForm';
// import { AddStudent } from '../Api/Routes';
import Swal from 'sweetalert2';
import { useNavigate  } from "react-router-dom";

export const UpdateStudent = () => {
  const navigate = useNavigate();
  const [ formValues, handleInputChange, reset ] = useForm(
    {
      name:"",
      lastname:"",
      carne: "",
      phone: "",
      direction: "",
      bornDate: "",
      email: "",
      password: ""
    }
  );
  const {name, lastname, carne, phone, direction, bornDate, email, password} = formValues;

  const verifyUser = async () => {
    if(name!==""){
    //   const SendBackend = await AddStudent(name, lastname, carne, phone, direction, email, password);

    //   await SendBackend.json();
    //   if(SendBackend.status === 200){
    //     Swal.fire(
    //       'Exito',
    //       'Se ha registrado el nuevo estudiante',
    //       'success'
    //     );
    //   } else {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Ha habido un error al ingresar al estudiante',
    //     });
    //   }
      reset();
    }
  };

  const bulkLoad = () => {

  };

  return (
     
    <div>
        <button onClick={() => navigate("/admin")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
            Menu
        </button>
        <button onClick={() => navigate("/registryStudent")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
            Crear
        </button>
        <button onClick={() => navigate("/updateStudent")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
            Editar
        </button>
        <button onClick={() => navigate("/deleteStudent")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
            Eliminar
        </button>
        <button onClick={() => navigate("/login")} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
            Cerrar sesion
        </button>
        <h3 className="userTeacher animate__animated animate__fadeInTopLeft">
            Admin - Maestro
        </h3>
        <div className="animate__animated animate__bounceInLeft registryStudent">
            <h2 id="headerTitle">Editar Estudiante</h2>
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
                <label>Fecha de nacimiento [YYYY-MM-DD</label>
                <input
                    name="bornDate"
                    type="text"
                    placeholder="Fecha de nacimiento [YYYY-MM-DD]"
                    value={bornDate}
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
    </div>
  
  )
}