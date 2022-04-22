import React, { useEffect, useState } from 'react';
import "../css/Buttons.css";
import "../css/Publications.css";
import { useNavigate  } from "react-router-dom";
import { AccordionPublications } from './components/AccordionPublications';
import Swal from 'sweetalert2';

const dataPrueba = [
  {
    key: 1,
    title: "Titulo1",
    description: "Descripcion 1",
    date: "10/12/2022"
  },{
    key: 2,
    title: "Titulo2",
    description: "Descripcion 2",
    date: "10/12/2022"    
  },{
    key: 3,
    title: "Titulo3",
    description: "Descripcion 3",
    date: "10/12/2022"
  }
];

export const Publications = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(""); 
  const [pubs, setPubs] = useState(dataPrueba);
  useEffect(() => {
    const profile = localStorage.getItem("teacherProfile");
    const initialValue = JSON.parse(profile);
    const data = {
      username: initialValue.username || "",
      password: initialValue.password || ""
    }
    setProfile(data);
  }, []);

  const closeSession =  () => {
    const data = {
      username: "",
      password: ""
    }
    localStorage.setItem("teacherProfile", JSON.stringify(data));
    navigate("/login");
  };

  const addPublication = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Ingrese su publicacion',
      html:
        '<h2>Titulo:</h2>' +
        '<input id="swal-input1" class="swal2-input">' +
        '<h2>Descripcion:</h2>'+
        '<textarea id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
    
    if (formValues) {
      const newPublication = {
        key: pubs[pubs.length-1].key+1,
        title: formValues[0],
        description: formValues[1],
        date: "Fecha random"
      }
      setPubs([...pubs, newPublication]);
      Swal.fire(  'Éxito',
      'Se ha agregado la nueva publicación',
      'success')
    }
  }

  const deletePublication = async (id) => {
    Swal.fire({
      title: '¿Esta segudo que desea borrar la publicación?',
      text: "Una vez realizada esta acción no se podrá revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminada',
          'La publicación ha sido eliminada',
          'success'
        )
      }
    })
  }

  const editPublication = async (id) => {
    const value = pubs.filter(dato=>dato.key===id);
    const { title, description } = value[0];
    const { value: formValues } = await Swal.fire({
      title: 'Ingrese los nuevos valores de su publicación',
      html:
        '<h2>Titulo:</h2>' +
        `<input id="swal-input1" class="swal2-input" value=${title}>` +
        '<h2>Descripcion:</h2>'+
        `<textarea id="swal-input2" class="swal2-input">${description}</textarea>`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
    
    if (formValues) {
      const newPublication = {
        key: pubs[pubs.length-1].key+1,
        title: formValues[0],
        description: formValues[1],
        date: "Fecha random"
      }
      setPubs([...pubs, newPublication]);
      Swal.fire(  'Good job!',
      'You clicked the button!',
      'success')
    }
  }

  return (
    <div>
      <button className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Publicaciones
      </button>
      <button onClick={() => navigate("/teacherActivities")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Actividades
      </button>
      <button onClick={() => navigate("/teacherExams")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Examenes
      </button>
      <button onClick={() => navigate("/teacherStudents")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Estudiantes
      </button>
      <button onClick={closeSession} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
        Cerrar sesion
      </button>
      <h3 className="userTeacher animate__animated animate__fadeInTopLeft">
        {profile.username}
      </h3>
      <h1 className="h1-titlePublications">
        Publicaciones realizadas
      </h1>
      <div className="container accordionPublications">
        <AccordionPublications data={pubs} deletePublication={deletePublication} editPublication={editPublication}/>
      </div>
      <button onClick={addPublication} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
        Agregar publicacion
      </button>
    </div>
  )
}
