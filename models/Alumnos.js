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

    async updateAlumno(id,alumno){
        // modifica un alumno por id
        const alumnoIndex = this.db.get('alumnos').value().findIndex(student => student.id === parseInt(id));
        if(alumnoIndex === -1) return null
        this.db.get('alumnos').splice(alumnoIndex,1,{...alumno}).write()
        return alumno
    }

    async deleteAlumno(id){
        const alumnoIndex = this.db.get('alumnos').value().findIndex(student => student.id === parseInt(id));
        if(alumnoIndex === -1) return null
        this.db.get('alumnos').splice(alumnoIndex,1).write()
        return true
    }

}

module.exports = Alumno;