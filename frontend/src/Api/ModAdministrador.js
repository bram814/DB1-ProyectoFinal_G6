const BACKEND = "http://localhost:5000";
const url_updateStudent = `${BACKEND}/updateStudent`;
const url_deleteStudent = `${BACKEND}/deleteStudent`;
const url_updateTeacher = `${BACKEND}/updateTeacher`;
const url_deleteTeacher = `${BACKEND}/deleteTeacher`;

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