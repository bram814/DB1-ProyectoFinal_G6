import React from 'react';
import './../css/Login.css'
import { useForm } from '../../Hooks/useForm';
import { SetDeleteStudent } from '../../Api/ModAdministrador';
import Swal from 'sweetalert2';
import { useNavigate  } from "react-router-dom";

export const DeleteStudent = () => {

  const navigate = useNavigate();
  const [ formValues, handleInputChange, reset] = useForm(
    { 
      carne: ""
    }
  );
  const { carne } = formValues;

  const verifyUser = async () => {
    if (carne !== "") {

      const SendBackend = await SetDeleteStudent(carne);

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
            text: "Debe Ingresar el Carne",
        });
        
    }
    reset();
  };

  return (
    <div>
      <button className="btn btn-success button-74 animate__animated animate__fadeInTopLeft"  onClick={() => navigate("/admin")}>
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
      Admin - Estudiantes
      </h3>
      <div className="animate__animated animate__bounceInLeft registryStudent">
      <h2 id="headerTitle">Eliminar Estudiante</h2>
      <div>

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
        <div id="button" className="row">
        <button onClick={verifyUser}> Eliminar </button>
        </div>
        </div>
      </div>
    </div>
  )
}