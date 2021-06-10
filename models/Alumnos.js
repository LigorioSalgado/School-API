const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

class Alumno{

    constructor(){
        const adapter = new FileSync('db.json');
        const db = low(adapter)
        this.db = db;
    }

    async getAlumnos(){
         //va a leer los ultimos datos en la BD
        return this.db.get('alumnos').value();
    }

    async addAlumno(alumno){
        this.db.get('alumnos').push(alumno).write()
        return alumno
    }

    async getAlumnoByEmail(email){
        const alumno = this.db.get('alumnos').value().find(student => student.email === email);
        return alumno
    }


}

module.exports = Alumno;