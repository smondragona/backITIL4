const express = require('express');
const app = express();

//Se colocan las rutas de los archivos que estan en routes
app.use( require('./modulo'));


module.exports = app;
