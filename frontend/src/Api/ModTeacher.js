const BACKEND = "http://localhost:5000";
const url_getCourses = `${BACKEND}/getMateriasProfesor`;

export async function getCoursesTeacher(dpi){
    return fetch(url_getCourses, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dpi           : dpi
        }),
    });
}

const url_getPublicationsTeacher = `${BACKEND}/getPublicacionesProfesor`;
export async function getPublicationsTeacer(dpi){
    return fetch(url_getPublicationsTeacher, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dpi           : dpi
        }),
    });
}

const url_getActivitiesTeacher = `${BACKEND}/getActividadesProfesor`;
export async function getActivitiesTeacher(dpi){
    return fetch(url_getActivitiesTeacher, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dpi           : dpi
        }),
    });
}