const BACKEND = "http://localhost:5000";
const url_addStudent = `${BACKEND}/registryStudent`;

export async function AddStudent(name, lastname, carnet, phone, direction, email, password){
    return fetch(url_addStudent, {
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

const url_addTeacher = `${BACKEND}/registryTeacher`;

export async function AddTeacher(name, lastname, phone, direction, email, password, borndate, dpi){
    return fetch(url_addTeacher, {
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
            dpi              : dpi
        }),
    });
}


const url_getLoginStudent = `${BACKEND}/loginStudent`;

export async function GetLoginStudent(carnet, password){ // verificar usuario
    return fetch(url_getLoginStudent, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            carnet  : carnet,
            pass    : password
        }),
    });
}

const url_getLoginTeacher = `${BACKEND}/loginTeacher`;

export async function GetLoginTeacher(dpi, password){
    return fetch(url_getLoginTeacher, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dpi  : dpi,
            pass : password
        }),
    });
}


const url_csvStudent = `${BACKEND}/csvStudent`;

export async function SetCsvStudent(name, info){
    return fetch(url_csvStudent, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre  : name,
            data    : info
        }),
    });
}