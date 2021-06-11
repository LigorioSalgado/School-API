const  express = require('express');
const  router = express.Router();

const { createAlumno, fetchAlumnos, modifyAlumno, deleteAlumno } = require('../controllers/alumnoController');

router.post('/alumnos', createAlumno); // create           C
router.get('/alumnos',fetchAlumnos); // read               R 
router.put('/alumnos/:id', modifyAlumno); // update        U    
router.delete('/alumnos/:id', deleteAlumno) // delete      D

module.exports = router;