const Alumno = require('../models/Alumnos');

const fetchAlumnos = async (req, res) => {
    // va a retornar todo los alumnos
    const alumnos = new Alumno()
    const allAlumnos = await alumnos.getAlumnos()
    res.status(200).send(allAlumnos);
}

const createAlumno = async (req, res) => {
    // Va a crear un nuevo alumno
    // Los Alumnos deben tener los siguientes datos:
    // Nombre, Apellidos, Edad,id,correo
    // No puede haber dos alumnos con el mismo correo
    const validFields = ['id','nombre','apellidos','edad','correo']
    Object.keys(req.body).forEach((key) => {
        if(validFields.indexOf(key) === -1){
            return res.status(400).send({message:`Key: ${key} no es valido`})
        }
    })

    const alumno = new Alumno();
    const student = await alumno.getAlumnoByEmail(req.body.email);
    if(student) return res.status(400).send({message:"Alumno ya existe en la BD"})
    const newAlumno = await alumno.addAlumno(req.body);
    return res.status(201).send(newAlumno);

}

module.exports = {
    fetchAlumnos,
    createAlumno
}