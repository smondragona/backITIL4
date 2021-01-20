const express = require('express');
const Modulo = require('../models/modulo');

const app = express();

app.get('/modulo', (req, res) => {

  //console.log('usuario....' + req.usuario)
 
 return res.json({
   menssage: 'Mensaje de modulos'
  }) 
  
 });

 app.post('/modulo', function (req, res) {
  
   let body = req.body;

   let modulo = new Modulo({
      numModulo: body.numModulo,
      nombre: body.nombre
   });

   modulo.save((err,moduloDB) =>{

      if(err){
        return res.status(400).json({
          ok: false,
          err
        });
      }
 
      res.json({
        ok: true,
        usuario: moduloDB
      });
   });

 });

module.exports = app;