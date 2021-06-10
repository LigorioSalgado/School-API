const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

class Alumno{

    constructor(){
        
        const adapter = new FileSync(file);
        const db = low(adapter)
        this.db = db;
    }

    async getAlumnos(){
        await this.db.read(); //va a leer los ultimos datos en la BD
        return this.db.data.alumnos;
    }

    async addAlumno(alumno){
        this.db.data.alumnos.push(alumno)
        await this.db.write(); // esto modifica el db.json
        return alumno
    }

    async getAlumnoByEmail(email){
        await this.db.read();
        const alumno = this.db.data.alumnos.find(student => student.email === email);
        return alumno
    }


}

module.exports = Alumno;