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


router.get('/oracle', async (req, res)=>{
    sql = "SELECT * FROM Estudiante";
    var result = await DB.PEDO(sql,[],false)
    console.log(result)
    res.status(200).json({
        msg:"????"
    });

})


module.exports = router;