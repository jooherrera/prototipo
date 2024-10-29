import {Atencion} from "./atencion.js";

export class Paciente{
    constructor(paciente) {
        this.id = paciente.id
        this.nombre = paciente.nombre
        this.apellido = paciente.apellido
        this.dni = paciente.dni
        this.mail = paciente.mail
        this.telefono = paciente.telefono
        this.avatar = paciente.avatar
        this.direccion = paciente.direccion
        this.ultimaConexion = paciente.ultimaConexion ? new Date(paciente.ultimaConexion) : new Date()
        this.atenciones = paciente.atenciones.map(atencion => new Atencion(atencion))
    }

    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    getAvatar(){
        return this.avatar
    }

    getAtenciones(){
        return this.atenciones
    }

    responderEncuenta(atencionId){
        this.atenciones.forEach(atencion =>{
            if(atencion.id === atencionId){
                atencion.encuestaRespondida()
            }
        })
    }

}
