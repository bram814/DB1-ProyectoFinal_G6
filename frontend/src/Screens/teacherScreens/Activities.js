import React, { useEffect, useState } from 'react';
import "../css/Buttons.css";
import "../css/Publications.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AccordionTotal } from './components/AccordionTotal';

const dataPrueba = [
  {
    key: 1,
    title: "Actividad1",
    course: "Matematicas",
    description: "Descripcion 1",
    date: "0000-00-00",
    publish_date: "0000-00-00",
    students: [1, 2, 3, 4],
    value: 10,
    delivery_date: "0000-00-00"
  }, {
    key: 2,
    title: "Actividad2",
    course: "Matematicas",
    description: "Descripcion 2",
    date: "0000-00-00",
    publish_date: "0000-00-00",
    students: [1, 2, 3, 4],
    value: 10,
    delivery_date: "10/10000-00-00"
  }, {
    key: 3,
    title: "Actividad3",
    course: "Matematicas",
    description: "Descripcion 3",
    date: "0000-00-00",
    publish_date: "0000-00-00",
    students: [1, 2, 3, 4],
    value: 10,
    delivery_date: "0000-00-00"
  }
];

const dataCourses = [
  {
    id: 1,
    name: "Matematica"
  }, {
    id: 2,
    name: "Quimica"
  }, {
    id: 3,
    name: "Ipc"
  }
];

export const Activities = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [activities, setActivities] = useState(dataPrueba);
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

  const addActvitie = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Ingrese su publicacion',
      html:
        '<h2>Titulo:</h2>' +
        '<input id="swal-input1" class="swal2-input">' +
        '<h2>Descripcion:</h2>' +
        '<textarea id="swal-input2" class="swal2-input"></textarea>' +
        '<h2>Fecha</h2>' +
        '<input type="date" id="swal-input3" class="swal-input3"/>' +
        '<h2>Fecha de publicacion</h2>' +
        '<input type="date" id="swal-input4" class="swal-input4"/>' +
        '<h2>Valor de la actividad:</h2>' +
        '<input id="swal-input5" class="swal2-input">' +
        '<h2>Fecha de entrega</h2>' +
        '<input type="date" id="swal-input6" class="swal-input6"/>'
      ,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value,
          document.getElementById('swal-input5').value,
          document.getElementById('swal-input6').value,
        ]
      }
    });
    if (!formValues) return;
    
    //Armamos el objeto de opciones
    let options = {};
    for (let option of dataCourses) {
      options[option.id] = option.name;
    }
    
    //Obtenemos la información de la materia de la nueva publicacion mediante sweetAlert2
    const { value: course } = await Swal.fire({
      title: 'Elige la materia de la publicacion',
      input: 'select',
      inputOptions: options,
      inputPlaceholder: 'Materias',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value !== '') {
            resolve();
          } else {
            resolve('Debe elegir una materia');
          }
        });
      }
    });

    if (formValues && course) {
      const newActivity = {
        key: activities[activities.length-1].key+1,
        title: formValues[0],
        description: formValues[1],
        course: options[course],    //Course es el id de la materia
        date: formValues[2],
        publish_date: formValues[3],
        students: 10000,
        value: formValues[4],
        delivery_date: formValues[5]
      }
      setActivities([...activities, newActivity]);
      Swal.fire(  'Éxito',
      'Se ha agregado la nueva actividad',
      'success');
    }
  }

  const deleteItem = async (id) => {
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

  const editItem = async (id) => {
    const value = activities.filter(dato => dato.key === id);
    const { title, description } = value[0];
    const { value: formValues } = await Swal.fire({
      title: 'Ingrese los nuevos valores de su publicación',
      html:
        '<h2>Titulo:</h2>' +
        `<input id="swal-input1" class="swal2-input" value=${title}>` +
        '<h2>Descripcion:</h2>' +
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
        key: activities[activities.length - 1].key + 1,
        title: formValues[0],
        description: formValues[1],
        date: "Fecha random"
      }
      setActivities([...activities, newPublication]);
      Swal.fire('Good job!',
        'You clicked the button!',
        'success');
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/teacherPublications")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Publicaciones
      </button>
      <button className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
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
        Actividades
      </h1>
      <div className="container accordionPublications">
        <AccordionTotal data={activities} deleteItem={deleteItem} editItem={editItem} nameItem="actividad" />
      </div>
      <button onClick={addActvitie} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
        Agregar actividad
      </button>
    </div>
  )
}