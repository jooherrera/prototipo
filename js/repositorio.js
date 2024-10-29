import {Paciente} from "./dominio/paciente.js";
import {Encuesta} from "./dominio/encuesta.js";

export async function obtenerPaciente(){
    let paciente = localStorage.getItem('paciente')
    if(paciente){
        return new Paciente(JSON.parse(paciente))
    }
    const resp = await fetch('../db/pacientes.json')
    const pacientes = await resp.json()
    const idPacienteLogueado = localStorage.getItem('paciente_logueado')
    const paciente_encontrado = pacientes.find(paciente => paciente.id === +idPacienteLogueado)
    paciente = new Paciente(paciente_encontrado)
    actualizarPaciente(paciente)
    return paciente
}

export function actualizarPaciente(paciente){
    localStorage.setItem('paciente',JSON.stringify(paciente))
}

export async function obtenerEncuesta(){
    const resp = await fetch('../db/preguntas.json')
    const preguntas = await resp.json()
    return new Encuesta(preguntas)
}

