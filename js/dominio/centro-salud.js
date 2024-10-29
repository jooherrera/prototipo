import {Zona} from "./zona.js";

export class CentroSalud {
    constructor(centro) {
        this.id = centro.id
        this.nombre = centro.nombre
        this.direccion = centro.direccion
        this.coordenada = {
            latitud: centro.coordenada.latitud,
            longitud: centro.coordenada.longitud
        }
        this.servicios = centro.servicios
        this.zona = new Zona(centro.zona)
    }

    getCoordenada() {
        return {
            latitud: this.coordenada.latitud,
            longitud: this.coordenada.longitud
        }
    }

    getNombre() {
        return this.nombre
    }
}
