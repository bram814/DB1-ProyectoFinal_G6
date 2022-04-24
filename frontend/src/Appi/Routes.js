const url_api1 = "http://localhost:5000/registryStudent";

export async function AddStudent(n1,n2,n3,n4,n5,n6,n7,n8,n9){ // verificar usuario

    return fetch(url_api1, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre           : n1,
            apellido         : n2,
            carnet           : n3,
            telefono         : n4,
            direccion        : n5,
            correo           : n6,
            password         : n7,
            fecha_nacimiento : n8,
            dpi              : n9
        }),
    });
}

const url_api2 = "http://localhost:5000/registryTeacher";

export async function AddTeacher(n1,n2,n3,n4,n5,n6,n7,n8){ // verificar usuario

    return fetch(url_api2, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre           : n1,
            apellido         : n2,
            telefono         : n3,
            direccion        : n4,
            correo           : n5,
            password         : n6,
            fecha_nacimiento : n7,
            dpi              : n8
        }),
    });
}