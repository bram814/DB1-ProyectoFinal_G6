import React, { useEffect, useState } from 'react';
import "../css/Buttons.css";
import { useNavigate  } from "react-router-dom";

export const Students = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");  
  useEffect(() => {
    const profile = localStorage.getItem("teacherProfile");
    const initialValue = JSON.parse(profile);
    const data = {
      username: initialValue.username || "",
      password: initialValue.password || ""
    }
    setProfile(data);
  }, []);

  const closeSession = async () => {
    const data = {
      username: "",
      password: ""
    }
    localStorage.setItem("teacherProfile", JSON.stringify(data));
    navigate("/login");
  };

  return (
    <div>
    <button onClick={() => navigate("/teacherPublications")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
      Publicaciones
    </button>
    <button onClick={() => navigate("/teacherActivities")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
      Actividades
    </button>
    <button onClick={() => navigate("/teacherExams")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
      Examenes
    </button>
    <button className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
      Estudiantes
    </button>
    <button onClick={closeSession} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
      Cerrar sesion
    </button>
    <h3 className="userTeacher animate__animated animate__fadeInTopLeft">
      {profile.username}
    </h3>
    <div>
      Estudiantes
    </div>
  </div>
  )
}