import {Header} from "./header.js";
import {Mapa} from "./mapa.js";

const paciente = {
    nombre: 'Jose Herrera',
    avatar: 'https://github.com/shadcn.png'
}

const mapa = Mapa.onContainer('mapa').fromCoords(-34.5439, -58.7113);
const header = new Header(paciente);
header.on('nombre', actualizarNombreEnHeader)
header.on('avatar', actualizarAvatarEnHeader)



const logoutBtn = document.querySelector('.logout-btn');
logoutBtn.addEventListener('click', header.cerrarSesion);


function actualizarNombreEnHeader(nombre) {
    document.querySelector('.user-name').innerHTML = nombre
}

function actualizarAvatarEnHeader(avatar) {
    document.querySelector('.avatar').src = avatar
}
