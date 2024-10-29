export class EventEmitter {
    constructor(observadores) {
        this.observadores = observadores;
        this.eventosPendientes = [];
    }

    on(evento, observador) {
        if (!this.observadores[evento]) {
            this.observadores[evento] = [];
        }
        this.observadores[evento].push(observador);
        this.#notificarEventoPendiente(evento);
    }

    emit(evento, data) {
        if (this.observadores[evento] && this.observadores[evento].length > 0) {
            this.observadores[evento].forEach(observador => observador(data));
            return;
        }
        this.eventosPendientes.push({evento, data});
    }

    #notificarEventoPendiente(evento) {
        const eventoParaEmitir = this.eventosPendientes.find(e => e.evento === evento)
        this.observadores[evento].forEach(observador => observador(eventoParaEmitir.data))
        this.#eliminarEventoPendiente(evento)
    }

    #eliminarEventoPendiente(evento) {
        this.eventosPendientes = this.eventosPendientes.filter(e => e.evento !== evento);
    }
}
