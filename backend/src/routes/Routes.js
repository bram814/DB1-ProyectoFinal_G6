const {Router} = require('express');
const router = Router();
const DB = require('../config/Config')



// req : request
// res : responseve
router.get('/', (req, res) => {
    console.log("NUESTRO PRIMER ENDPOINT")
    res.status(200).json({
        msg:"todo ok"
    });
});


router.post('/csvStudent', async (req, res)=>{
    var sql = ``
    
    var myArray  = req.body.data.split("\n");

    var aux = myArray[0].split(',');

    if (aux.length != 8) {
        return res.status(402).send(JSON.stringify('false'));

    }

    for (var i = 1; i < myArray.length; i++) {

        aux = myArray[i].split(',');
        if (aux.length == 8) {
            
            sql = `BEGIN insert_alumno ( '${getComilla(aux[2])}','${getComilla(aux[3])}',${aux[1]},'${getComilla(aux[4])}','${getComilla(aux[5])}','${getComilla(aux[6])}','${getComilla(aux[7].split('\r')[0])}'); END;`
            try {
                var result = await DB.Open(sql,[],true)
            } catch(e) {
                console.log(e)
            }
               
        }
    }
    res.status(200).send(JSON.stringify('Csv Cargado'));

  
   
    // id,Carnet,Nombre,Apellido,Telefono,Direccion,Correo,Contrasena


  

    // var result = await DB.Open(sql,[],true)

    

})

function getComilla (array) {
    if (array.split("'").length != 1) {
        var aux = ""
        for (var i = 0; i < array.length; i++) {
            aux += array[i]
            if (array[i] == "'"){
                aux += "'"
            }
            
        }

        return aux
    }
    
    return array
}



router.post('/registryStudent', async (req, res)=>{


    var sql = `BEGIN insert_alumno ( '${req.body.nombre}','${req.body.apellido}',${req.body.carnet},'${req.body.telefono}','${req.body.direccion}','${req.body.correo}','${req.body.password}'); END;`
    var result = await DB.Open(sql,[],true)

    res.status(200).send(JSON.stringify(result));

})

router.post('/registryTeacher', async (req, res)=>{

    var sql = `BEGIN insert_maestro ( '${req.body.nombre}','${req.body.apellido}','${req.body.telefono}','${req.body.direccion}','${req.body.correo}','${req.body.password}',${req.body.fecha_nacimiento},'${req.body.dpi}'); END;`
    var result = await DB.Open(sql,[],true)
    
    res.status(200).send(JSON.stringify(result));

})


router.post('/loginStudent', async (req, res)=>{

    try{

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_login_student(${req.body.carnet},'${req.body.pass}'); END;`
        console.log(sql)
        var result = await DB.Open(sql,[],false)
        console.log(result)
        res.status(200).send(JSON.stringify(`Welcome Student!!`));
    }catch(e){

        res.status(404).send(JSON.stringify("User/Password Student Wrong!!"));
    }
    

})


router.post('/loginTeacher', async (req, res)=>{

    try{

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_login_teacher(${req.body.dpi},'${req.body.pass}'); END;`
        console.log(sql)
        var result = await DB.Open(sql,[],false)
        console.log(result)
        res.status(200).send(JSON.stringify(`Welcome Teacher!!`));
    }catch(e){

        res.status(404).send(JSON.stringify("User/Password Teacher Wrong!!"));
    }
    

})

router.post('/updateStudent', async (req, res)=>{

    try {

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_student(${req.body.carnet}); END;`
        var result = await DB.Open(sql,[],false)

        sql = `BEGIN update_alumno ( '${req.body.nombre}','${req.body.apellido}',${req.body.carnet},'${req.body.telefono}','${req.body.direccion}','${req.body.correo}','${req.body.password}'); END;`
        console.log(sql)
        result = await DB.Open(sql,[],true)

        res.status(200).send(JSON.stringify(`Estudiante Editado!!`));
    } catch(e) {

        res.status(404).send(JSON.stringify("No existe ese Estudiante!!"));
    }

})

router.post('/updateTeacher', async (req, res)=>{

    try {

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_teacher('${req.body.dpi}'); END;`
        var result = await DB.Open(sql,[],false)

        sql = `BEGIN update_teacher ( '${req.body.nombre}','${req.body.apellido}','${req.body.telefono}','${req.body.direccion}','${req.body.correo}','${req.body.password}','${req.body.fecha_nacimiento}','${req.body.dpi}'); END;`
        result = await DB.Open(sql,[],true)

        res.status(200).send(JSON.stringify(`Maestro Editado!!`));

    } catch(e) {

        res.status(404).send(JSON.stringify("No existe ese Maestro!!"));
    }

})


router.post('/deleteTeacher', async (req, res)=>{

    try {

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_teacher('${req.body.dpi}'); END;`
        var result = await DB.Open(sql,[],false)

        sql = `BEGIN delete_teacher ('${req.body.dpi}'); END;`
        result = await DB.Open(sql,[],true)

        res.status(200).send(JSON.stringify(`Maestro Eliminado!!`));

    } catch(e) {

        res.status(404).send(JSON.stringify("No existe ese Maestro!!"));
    }

})


router.post('/deleteStudent', async (req, res)=>{

    try {

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_student('${req.body.carnet}'); END;`
        var result = await DB.Open(sql,[],false)

        sql = `BEGIN delete_student ('${req.body.carnet}'); END;`
        result = await DB.Open(sql,[],true)

        res.status(200).send(JSON.stringify(`Estudiante Eliminado!!`));

    } catch(e) {

        res.status(404).send(JSON.stringify("No existe ese Maestro!!"));
    }

})


router.post('/regestryCarrera', async (req, res)=>{

    try {

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_carrera('${req.body.nombre}'); END;`
        console.log(sql)
       
        var result = await DB.Open(sql,[],false)
        

        res.status(404).send(JSON.stringify("Ya Existe esa Carrera!!"));
        

    } catch(e) {
        
        var sql = `BEGIN insert_carrera ('${req.body.nombre}'); END;`
        var result = await DB.Open(sql,[],true)
        

        res.status(200).send(JSON.stringify(`Carrera Creada!!`));

    }

})




router.post('/carreraStudent', async (req, res)=>{

    try {

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_student('${req.body.usuario}'); END;`       
        var result = await DB.Open(sql,[],false)

        sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_carrera_id('${req.body.nombre}'); END;`    
        result = await DB.Open(sql,[],false)
        
        sql = `BEGIN carrera_student('${req.body.nombre}',${req.body.usuario}); END;`         
        result = await DB.Open(sql,[],true)

        res.status(200).send(JSON.stringify("Asignacion Correcta de Estudiante!!"));
        

    } catch(e) {
        
        res.status(404).send(JSON.stringify(`No Existe esa Carrera/Estudiante!!`));

    }

})

router.post('/carreraTeacher', async (req, res)=>{


    try {

        var sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_teacher('${req.body.maestro}'); END;`       
        var result = await DB.Open(sql,[],false)

        sql = `DECLARE v_fn varchar2(50 char); \n BEGIN v_fn := fn_search_carrera_id('${req.body.carrera}'); END;`    
        result = await DB.Open(sql,[],false)
        
        sql = `BEGIN carrera_teacher('${req.body.carrera}',${req.body.maestro}); END;`          
        result = await DB.Open(sql,[],true)

        res.status(200).send(JSON.stringify("Asignacion Correcta de Maestro!!"));
        

    } catch(e) {
        
        res.status(404).send(JSON.stringify(`No Existe esa Carrera/Maestro!!`));

    }

})




module.exports = router;