const  express = require('express');
const  router = express.Router();
const { createAlumno, fetchAlumnos, retrieveAlumno, modifyAlumno, deleteAlumno } = require('../controllers/alumnoController');

// Creamos un rachivo de rutas ya que es mejor organizar la rutas de esta forma



router.get('/alumnos',fetchAlumnos);
router.post('/alumnos', createAlumno);
router.get('/alumnos/:id', retrieveAlumno)
router.put('/alumnos/:id',modifyAlumno)
router.delete('/alumnos/:id',deleteAlumno)

module.exports = router;
