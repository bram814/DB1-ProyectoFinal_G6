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

const url_updatePublicationTeacher = `${BACKEND}/updatePublicationTeacher`;
export async function updatePublicationTeacher(key, title, course, publish_date, hour_begin, hour_final){
    return fetch(url_updatePublicationTeacher, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            key:            key,
            title:          title,
            course:         course,
            publish_date:   publish_date,
            hour_begin:     hour_begin,
            hour_final:     hour_final
        }),
    });
}