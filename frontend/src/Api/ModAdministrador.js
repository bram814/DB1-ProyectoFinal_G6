const BACKEND = "http://localhost:5000";
/* STUDENT */
const url_updateStudent = `${BACKEND}/updateStudent`;
const url_deleteStudent = `${BACKEND}/deleteStudent`;
/* TEACHER */
const url_updateTeacher = `${BACKEND}/updateTeacher`;
const url_deleteTeacher = `${BACKEND}/deleteTeacher`;
/* CARRERA */
const url_regestryCarrera = `${BACKEND}/regestryCarrera`;
const url_carreraStudent = `${BACKEND}/carreraStudent`;
const url_carreraTeacher = `${BACKEND}/carreraTeacher`;

export async function SetUpdateStudent(name, lastname, carnet, phone, direction, email, password){
    return fetch(url_updateStudent, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre           : name,
            apellido         : lastname,
            carnet           : carnet,
            telefono         : phone,
            direccion        : direction,
            correo           : email,
            password         : password
        }),
    });
}

export async function SetUpdateTeacher(name, lastname, phone, direction, email, password, borndate, pdpi){
    return fetch(url_updateTeacher, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre           : name,
            apellido         : lastname,
            telefono         : phone,
            direccion        : direction,
            correo           : email,
            password         : password,
            fecha_nacimiento : borndate,
            dpi              : pdpi
        }),
    });
}

export async function SetDeleteTeacher(pdpi){
    return fetch(url_deleteTeacher, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dpi              : pdpi
        }),
    });
}

export async function SetDeleteStudent(carne){
    return fetch(url_deleteStudent, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            carnet              : carne
        }),
    });
}

export async function AddCarrera(name){
    return fetch(url_regestryCarrera, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre              : name
        }),
    });
}

export async function SetCarreraStudent(name, user){
    return fetch(url_carreraStudent, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre              : name,
            usuario             : user
        }),
    });
}

export async function SetCarreraTeacher(name, user){
    return fetch(url_carreraTeacher, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            carrera              : name,
            maestro              : user
        }),
    });
}