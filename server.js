const express = require('express');
const bodyParser = require('body-parser');
const { createAlumno, fetchAlumnos } = require('./controllers/alumnoController');

const app = express(); // voy a crear una app de express

const PORT = process.env.PORT || 9000 //

app.use(bodyParser.urlencoded({extended: false})) // req.body o res.body puedan venir en un formulario basico de html
app.use(bodyParser.json()) //req.body o res.body puedan venir en formato json

app.get('/api/alumnos',fetchAlumnos);
app.post('/api/alumnos', createAlumno);


app.listen(PORT,() => {
    console.log(`Server starts in ${PORT} `)
})