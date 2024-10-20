import {EventEmitter} from "./EventEmitter.js";

export class Header extends EventEmitter {

    constructor(paciente) {
        super({
            nombre: [],
            avatar: []
        });
        this.nombre = paciente.nombre || '---'
        this.avatar = paciente.avatar || '/public/images.jpeg'

        this.emit('nombre', this.nombre)
        this.emit('avatar', this.avatar)
    }

    cerrarSesion() {
        alert('Cerrando sesión...');
        sessionStorage.clear();
        window.location.href = '/index.html';
    }

}
