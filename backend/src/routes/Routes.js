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


router.post('/registryStudent', async (req, res)=>{


    var sql = `BEGIN insert_alumno ( '${req.body.nombre}','${req.body.apellido}',${req.body.carnet},'${req.body.telefono}','${req.body.direccion}','${req.body.correo}','${req.body.password}',${req.body.fecha_nacimiento}); END;`
    var result = await DB.Open(sql,[],true)

    res.status(200).send(JSON.stringify(result));

})

router.post('/registryTeacher', async (req, res)=>{

    var sql = `BEGIN insert_maestro ( '${req.body.nombre}','${req.body.apellido}','${req.body.telefono}','${req.body.direccion}','${req.body.correo}','${req.body.password}',${req.body.fecha_nacimiento},'${req.body.dpi}'); END;`
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




module.exports = router;