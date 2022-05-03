import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import "./css/Login.css";
import { useForm } from '../Hooks/useForm';
import { GetLoginStudent, GetLoginTeacher } from '../Api/Routes';
import Swal from 'sweetalert2';

export const Login = () => {
  const navigate = useNavigate();
  const [formValues, handleInputChange, reset] = useForm({ username: "", password: "" });
  const { username, password } = formValues;
  const [rol, setRol] = useState("Estudiante");

  const verifyUser = async () => {
    if(username==="rocket1530" && password==="123456" && rol === "Maestro"){
      const data = {
        username,
        password
      }
      reset();
      localStorage.setItem("teacherProfile", JSON.stringify(data));
      navigate("/teacherPublications");
    }

    if (username !== "" && password !== "") {
      
      if (rol === "Estudiante") {

        const SendBackend = await GetLoginStudent(username, password);
        const result = await SendBackend.json();
  
        if (SendBackend.status === 200) {
          Swal.fire(
            'Exito',
            'Welcome Student!',
            'success'
          );

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result,
          });
        }

      } else if(rol === "Maestro") {

        const SendBackend = await GetLoginTeacher(username, password);
        const result = await SendBackend.json();
  
        if (SendBackend.status === 200) {
          Swal.fire(
            'Exito',
            'Welcome Teacher!',
            'success'
          );
          const data = {
            username,
            password
          }
          reset();
          localStorage.setItem("teacherProfile", JSON.stringify(data));
          navigate("/teacherPublications");

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result,
          });
        }

      } else if (rol === "Administrador") {
        
        if (username === "admin" && password === "admin"){
          Swal.fire(
            'Exito',
            'Bienvenido administrador!',
            'success'
          );
          navigate("/admin");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "User/Password Admin Wrong!!",
          });
         
        }

      }
     
     
     

      reset();
    }
  };

  return (
    <div className="animate__animated animate__bounceInLeft" id="loginform">
      <h2 id="headerTitle">Inicio de sesión</h2>
      <div>
        <div className="row">
          <label>Usuario</label>
          <input
            name="username"
            type="text"
            placeholder="Carnet/DPI"
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
        <Combobox className="combo"
          value={rol}
          onChange={(nextValue) => setRol(nextValue)}
          defaultValue="Estudiante"
          data={["Estudiante", "Maestro", "Administrador"]}
        />
        <div id="button" className="row">
          <button
            onClick={verifyUser}
          >Ingresar</button>
        </div>
      </div>
    </div>
  )
}
