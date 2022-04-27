import React from 'react';
import './../css/Login.css'
import { useForm } from '../../Hooks/useForm';
import { AddCarrera } from '../../Api/ModAdministrador';
import Swal from 'sweetalert2';
import { useNavigate  } from "react-router-dom";

export const RegestryCarrera = () => {

  const navigate = useNavigate();
  const [ formValues, handleInputChange, reset] = useForm(
    { 
      Name: ""
    }
  );
  const { Name } = formValues;

  const verifyUser = async () => {
    if (Name !== "") {

      const SendBackend = await AddCarrera(Name);

      var result = await SendBackend.json();
      if(SendBackend.status === 200){
          Swal.fire(
              'Exito',
              result,
              'success'
          );
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: result,
          });
      }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Debe Ingresar el Name",
        });
        
    }
    reset();
  };

  return (
    <div>
      <button className="btn btn-success button-74 animate__animated animate__fadeInTopLeft"  onClick={() => navigate("/admin")}>
        Menu
      </button>
      <button onClick={() => navigate("/regestryCarrera")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Crear
      </button>
      <button onClick={() => navigate("/assignmentCarrera")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Asignar
      </button>
      <button onClick={() => navigate("/login")} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
        Cerrar sesion
      </button>
      <h3 className="userTeacher animate__animated animate__fadeInTopLeft">
        Admin - Carrera
      </h3>
      <div className="animate__animated animate__bounceInLeft registryStudent">
        <h2 id="headerTitle">Crear Carrera</h2>
        <div>

          <div className="row">
            <label>Name</label>
            <input
            name="Name"
            type="text"
            placeholder="Nombre de la Carrera"
            value={Name}
            onChange={handleInputChange}
            />
          </div>
          <div id="button" className="row">
            <button onClick={verifyUser}> Crear </button>
          </div>
          </div>
      </div>
    </div>
  )
}