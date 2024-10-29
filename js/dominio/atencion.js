import {CentroSalud} from "./centro-salud.js";

export class Atencion{
    constructor(atencion) {
        this.id = atencion.id
        this.fechaVisita = atencion.fechaVisita
        this.centroDeSalud = new CentroSalud(atencion.centroDeSalud)
        this.feedback = atencion.feedback
    }
    getIdentificardor(){
        return this.id
    }
    getCentroDeSalud(){
        return this.centroDeSalud
    }

    encuestaRespondida(){
        this.feedback = true
    }

    estaRespondida(){
        return this.feedback
    }
}
