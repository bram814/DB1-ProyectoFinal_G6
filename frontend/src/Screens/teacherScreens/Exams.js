import React, { useEffect, useState } from 'react';
import "../css/Buttons.css";
import { useNavigate } from "react-router-dom";
import { AccordionTotal } from './components/AccordionTotal';
import Swal from 'sweetalert2';

const dataPrueba = [
  {
    key: 1,
    title: "Titulo1",
    course: "Matematicas",
    publish_date: "10/12/2022",
    hour_begin: "15",
    hour_final: "17"
  },{
    key: 2,
    title: "Titulo2",
    course: "Matematicas",
    publish_date: "10/12/2022",
    hour_begin: "15",
    hour_final: "17"
  },{
    key: 3,
    title: "Titulo3",
    course: "Matematicas",
    publish_date: "10/12/2022",
    hour_begin: "15",
    hour_final: "17"
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

export const Exams = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [exams, setExams] = useState(dataPrueba);
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

  const addExam = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Ingrese su publicacion',
      html:
        '<h2>Id de examen:</h2>' +
        '<input id="swal-input1" class="swal2-input">' +
        '<h2>Fecha de publicacion</h2>' +
        '<input type="date" id="swal-input2" class="swal-input2"/>' +
        '<h2>Hora de inicio del examen</h2>' +
        '<input id="swal-input3" class="swal2-input">'+
        '<h2>Hora de finalizacion del examen</h2>' +
        '<input id="swal-input4" class="swal2-input">'
      ,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value
        ]
      }
    });
    if (!formValues) return;

    let options = {};
    for (let option of dataCourses) {
      options[option.id] = option.name;
    }
    
    //Obtenemos la información de la materia de la nueva publicacion mediante sweetAlert2
    const { value: course } = await Swal.fire({
      title: 'Elige la materia del examen',
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
      const newExam = {
        key: exams[exams.length-1].key+1,
        title: formValues[0],
        course: options[course],    //Course es el id de la materia
        publish_date: formValues[1],
        hour_begin: formValues[2],
        hour_final: formValues[3]
      }
      setExams([...exams, newExam]); //Cuando esté el backend se envía aquí
      Swal.fire(  'Éxito',
      'Se ha agregado el nuevo examen',
      'success');
    }
  }

  const deleteItem = async (id) => {
    Swal.fire({
      title: '¿Esta segudo que desea borrar el examen?',
      text: "Una vez realizada esta acción no se podrá revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Aqui se haría el delete");
        Swal.fire(
          'Eliminado',
          'El examen ha sido eliminado',
          'success'
        )
      }
    })
  }

  const editItem = async (id) => {
    const value = exams.filter(dato => dato.key === id);
    const { title, publish_date, hour_begin, hour_final } = value[0];
    const { value: formValues } = await Swal.fire({
      title: 'Ingrese los nuevos valores del examen',
      html:
        '<h2>Id de examen:</h2>' +
        `<input id="swal-input1" class="swal2-input" value=${title}>` +
        '<h2>Fecha de publicacion</h2>' +
        `<input type="date" id="swal-input2" class="swal-input2" value=${publish_date}/>` +
        '<h2>Hora de inicio del examen</h2>' +
        `<input id="swal-input3" class="swal2-input" value=${hour_begin}>`+
        '<h2>Hora de finalizacion del examen</h2>' +
        `<input id="swal-input4" class="swal2-input" value=${hour_final}>`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value
        ]
      }
    })

    if (formValues) {
      const newExam = {
        key: id,
        title: formValues[0],
        publish_date: formValues[1],
        hour_begin: formValues[2],
        hour_final: formValues[3],
      }
      console.log(newExam); //Aqui es donde se hace el update
      //setExams([...exams, newPublication]);
      Swal.fire('Exito',
        'Se ha actualizado el examen',
        'success');
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/teacherPublications")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Publicaciones
      </button>
      <button onClick={() => navigate("/teacherActivities")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Actividades
      </button>
      <button className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
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
        Examenes
      </h1>
      <div className="container accordionPublications">
        <AccordionTotal data={exams} deleteItem={deleteItem} editItem={editItem} nameItem="examen" />
      </div>
      <button onClick={addExam} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
        Agregar examen
      </button>
    </div>
  )
}