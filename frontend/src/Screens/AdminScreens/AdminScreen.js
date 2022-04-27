import React from 'react';
import { useNavigate  } from "react-router-dom";

export const AdminScreen = () => {

  const navigate = useNavigate();
  return (
    <div>

      <button onClick={() => navigate("/admin")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Menu
      </button>
      <button onClick={() => navigate("/registryStudent")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Estudiantes
      </button>
      <button onClick={() => navigate("/registryTeacher")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Maestros
      </button>
      <button onClick={() => navigate("/regestryCarrera")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Carrera
      </button>
      <button onClick={() => navigate("/login")} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
        Cerrar sesion
      </button>
      <h3 className="userTeacher animate__animated animate__fadeInTopLeft">
        Admin
      </h3>
    </div>
  )
}
