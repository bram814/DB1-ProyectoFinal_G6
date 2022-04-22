import React from 'react';
import "./css/Login.css";
import { useForm } from '../Hooks/useForm';

export const RegistryTeacher = () => {
    const [formValues, handleInputChange, reset] = useForm(
        {
            name: "",
            lastname: "",
            registry: 0,
            phone: "",
            direction: "",
            email: "",
            bornDate: "",
            DPI: "",
            profilePicture: "",
            password: ""
        }
    );
    const { name, lastname, registry, phone, direction, email, bornDate, DPI, profilePicture, password } = formValues;

    const verifyUser = () => {
        console.log(name);
        console.log(lastname);
        console.log(registry);
        console.log(phone);
        console.log(direction);
        console.log(email);
        console.log(bornDate);
        console.log(DPI);
        console.log(password);
        if (name !== "") {
            reset();
        }
    };

    const readFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = () => {
            console.log(fileReader.result);
        }
        fileReader.onerror = () => {
            alert(fileReader.error);
        }
    }

    return (
        <div className="animate__animated animate__bounceInLeft registryStudent">
            <h2 id="headerTitle">Registro de maestro</h2>
            <div>
                <div className="row">
                    <label>Nombre</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Nombre del maestro"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <label>Apellido</label>
                    <input
                        name="lastname"
                        type="text"
                        placeholder="Apellido del maestro"
                        value={lastname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <label>No. Registro</label>
                    <input
                        name="registry"
                        type="text"
                        placeholder="No. Registro del maestro"
                        value={registry}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <label>Telefono</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="Telefono del maestro"
                        value={phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <label>Dirección</label>
                    <input
                        name="direction"
                        type="text"
                        placeholder="Dirección del maestro"
                        value={direction}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <label>Correo electrónico</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email del maestro"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <label>Fecha de nacimiento</label>
                    <input
                        name="bornDate"
                        type="text"
                        placeholder="Fecha de nacimiento"
                        value={bornDate}
                        onChange={handleInputChange}
                    />
                </div>
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
                <div className="custom-input-file col-md-6 col-sm-6 col-xs-6">
                    <input 
                        type="file" 
                        id="fichero-tarifas" 
                        className="input-file"
                        placeholder="Seleccione un archivo"
                        multiple={false}
                        onChange={readFile}
                    />
                        Subir foto de perfil...
                </div>
                <div className="row">
                    <label>Contraseña</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña del maestro"
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
                </div>
            </div>
        </div>
    )
}
