document
    .getElementById('paciente-btn-1')
    .addEventListener('click', () => loginComoPaciente(1))

document
    .getElementById('paciente-btn-2')
    .addEventListener('click', () => loginComoPaciente(2))

document
    .getElementById('paciente-btn-3')
    .addEventListener('click', () => loginComoPaciente(3))

// document
//     .getElementById('coordinador-btn-')
//     .addEventListener('click', loginComoCoordinador)


function loginComoPaciente(paciente_id) {
    localStorage.setItem('paciente', JSON.stringify({paciente_id: paciente_id}))
    window.location.href = 'html/vista-paciente.html'
}

// function loginComoCoordinador(paciente) {
//     window.location.href = 'coordinador/index.html'
// }
