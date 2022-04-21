const config = require('./config/env.js');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// imports
const getRoute = require('./routes/Routes.js')

// settings
app.set('port', config.PORT);

// Middleware -- Intercambio de información entre aplicaciones.
app.use(morgan('dev'));                         // Para desarrollador.
app.use(express.json());                        // Las peticiones las va a devolver en formato json.
app.use(express.urlencoded({extended:false}));  // Sirve para enviar fotos o videos, en este caso utilizaremos texto por eso es falso.

// Routes
app.use(getRoute);

// Run
app.listen(app.get('port'), ()=>{
    console.log('Server on Port 5000');
    console.log('NODE_ENV =', config.NODE_ENV);
    console.log('App listening on http://'+config.HOST+':'+config.PORT);
    console.log('ORACLE: - user: '+ config.USERDB ,'pass: '+config.PASS)
    
});