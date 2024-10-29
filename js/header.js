import {EventEmitter} from "./EventEmitter.js";

export class Header extends EventEmitter {

    constructor(paciente) {
        super({
            nombre: [],
            avatar: []
        });
        this.nombreCompleto = paciente.getNombreCompleto() || '---'
        this.avatar = paciente.getAvatar() || '/public/images.jpeg'

        this.emitEventos()
    }

    emitEventos() {
        this.emit('nombre', this.nombreCompleto )
        this.emit('avatar', this.avatar)
    }
}
