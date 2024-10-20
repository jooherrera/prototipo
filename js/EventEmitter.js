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

        this.eliminarEventosPendientes(evento);
    }

    emit(evento, data) {
        if (this.observadores[evento] && this.observadores[evento].length > 0) {
            this.observadores[evento].forEach(observador => observador(data));
            return;
        }

        this.eventosPendientes.push({evento, data});

    }

    eliminarEventosPendientes(evento) {
        this.eventosPendientes = this.eventosPendientes.filter(({evento: e, data}) => {
            if (e === evento) {
                this.observadores[evento].forEach(observador => observador(data));
            }
        });
    }
}
