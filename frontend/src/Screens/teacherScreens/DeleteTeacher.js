import React from 'react';
import './../css/Login.css'
import { useForm } from '../../Hooks/useForm';
import { SetDeleteTeacher } from '../../Api/ModAdministrador';
import Swal from 'sweetalert2';
import { useNavigate  } from "react-router-dom";

export const DeleteTeacher = () => {
    const navigate = useNavigate();
    const [formValues, handleInputChange, reset] = useForm(
        {
           
            DPI: "",
        }
    );
    const {DPI} = formValues;

    const verifyUser = async () => {

        if (DPI !== "") {

            const SendBackend = await SetDeleteTeacher(DPI);

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

            reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Debe Ingresar el DPI",
            });
            
        }
        reset();
    };

    return (
        <div>
             <button onClick={() => navigate("/admin")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
                Menu
            </button>
            <button onClick={() => navigate("/registryTeacher")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
                Crear
            </button>
            <button onClick={() => navigate("/updateTeacher")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
                Editar
            </button>
            <button onClick={() => navigate("/deleteTeacher")} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
                Eliminar
            </button>
            <button onClick={() => navigate("/login")} className="btn btn-success button-75 animate__animated animate__fadeInTopLeft">
                Cerrar sesion
            </button>
            <h3 className="userTeacher animate__animated animate__fadeInTopLeft">
                Admin - Maestro
            </h3>
            <div className="animate__animated animate__bounceInLeft registryStudent">
                <h2 id="headerTitle">Eliminar Maestro</h2>
                <div>
                    <div className="row">
                        <label>DPI</label>
                        <input
                            name="DPI"
                            type="text"
                            placeholder="DPI de nacimiento"
                            value={DPI}
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
