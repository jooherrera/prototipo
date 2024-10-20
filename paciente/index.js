

let mapa
let modal
let surveyedCenters = {};

function crearMapa(){
    mapa = Mapa.onContainer('mapa').fromCoords(-34.5439, -58.7113)
}
function openSurveyModal(centerName) {
    document.getElementById("centerName").value = centerName;
    modal.style.display = "block";
    if (surveyedCenters[centerName]) {
        surveyForm.style.display = "none";
        surveyResults.style.display = "none";
        errorMessage.style.display = "block";
    } else {
        surveyForm.style.display = "block";
        surveyResults.style.display = "none";
        errorMessage.style.display = "none";
    }
}
function cargarCentroDeSalud(){
    var healthCenters = [
        {name: "Centro de Salud A", lat: 40.4168, lng: -3.7038},
        {name: "Centro de Salud B", lat: 40.4268, lng: -3.7138},
        {name: "Centro de Salud C", lat: 40.4068, lng: -3.6938}
    ];

    healthCenters.forEach(function (center) {
        mapa.agregarMarcador(center.lat, center.lng, center.name, openSurveyModal)
    });

}

document.addEventListener('DOMContentLoaded', crearMapa)

//Carga informacion del centro de salud pidiendo al back.
window.addEventListener('load', cargarCentroDeSalud)




document.addEventListener('DOMContentLoaded', function () {




    // Objeto para almacenar los centros de salud que ya han sido encuestados



    // Funcionalidad del modal
     modal = document.getElementById("surveyModal");
    var span = document.getElementsByClassName("close")[0];
    var surveyForm = document.getElementById("surveyForm");
    var surveyResults = document.getElementById("surveyResults");
    var resultsContent = document.getElementById("resultsContent");
    var closeResults = document.getElementById("closeResults");
    var errorMessage = document.getElementById("errorMessage");



    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Manejar el envío del formulario
    surveyForm.onsubmit = function (e) {
        e.preventDefault();
        var formData = new FormData(surveyForm);
        var results = "<ul>";
        for (var pair of formData.entries()) {
            if (pair[0] !== "centerName") {
                var questionText = document.querySelector(`label[for="${pair[0]}"]`).textContent;
                results += `<li><strong>${questionText}</strong> ${pair[1]}</li>`;
            }
        }
        results += "</ul>";
        resultsContent.innerHTML = results;
        surveyForm.style.display = "none";
        surveyResults.style.display = "block";

        // Marcar el centro como encuestado
        var centerName = document.getElementById("centerName").value;
        surveyedCenters[centerName] = true;
    };

    closeResults.onclick = function () {
        modal.style.display = "none";
        surveyForm.reset();
    };

    // // Funcionalidad del botón de cierre de sesión
    // document.querySelector('.logout-btn').addEventListener('click', function() {
    //     alert('Cerrando sesión...');
    //     // Aquí iría la lógica real de cierre de sesión
    // });
});
