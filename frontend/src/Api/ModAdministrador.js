const BACKEND = "http://localhost:5000";
const url_updateStudent = `${BACKEND}/updateStudent`;

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