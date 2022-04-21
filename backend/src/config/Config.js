/*                  Oracle
   ---------------------------------------------
   -   ¿Qué Hace el Commit adentro de la DB?   -
   - Confirmar los cambios en la base de datos -
   -   como viene siendo un insert en la DB    -
   --------------------------------------------- 
*/  
const config = require('./env.js');
const oracledb = require('oracledb');

db = {
    user: config.USERDB,
    password: config.PASS,
    connectString: config.CONN
}

async function open(query, binds, autoCommit){
    var con = await oracledb.getConnection(db);
    var result = await con.execute(query, binds, {autoCommit});   
    con.release();
    return result;
}

exports.PEDO = open;

