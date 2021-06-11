const express = require('express');
const bodyParser = require('body-parser');
const { createAlumno, fetchAlumnos, modifyAlumno, deleteAlumno } = require('./controllers/alumnoController');

const app = express(); // voy a crear una app de express

const PORT = process.env.PORT || 9000 //

app.use(bodyParser.urlencoded({extended: false})) // req.body o res.body puedan venir en un formulario basico de html
app.use(bodyParser.json()) //req.body o res.body puedan venir en formato json

app.post('/api/alumnos', createAlumno); // create           C
app.get('/api/alumnos',fetchAlumnos); // read               R 
app.put('/api/alumnos/:id', modifyAlumno); // update        U    
app.delete('/api/alumnos/:id', deleteAlumno) // delete      D

app.listen(PORT,() => {
    console.log(`Server starts in ${PORT} `)
})