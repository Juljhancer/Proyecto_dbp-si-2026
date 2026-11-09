var formulario = document.getElementById("Formulario");
var campos = document.querySelectorAll(".label");
var nombre = campos[0];
var edad = campos[1];
var dias = campos[2];
var entrenador = document.getElementById("Entrenador");
var checks = document.querySelectorAll("input[type='checkbox']");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nombre.value.trim().length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    }
    if (edad.value < 18 || edad.value > 65) {
        alert("La edad debe estar entre 18 y 65 años");
        return;
    }
    if (dias.value < 1 || dias.value > 7) {
        alert("Los dias de entreno deben estar entre 1 y 7");
        return;
    }
    var marcados = 0;
    for (var i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            marcados++;
        }
    }
    if (marcados == 0) {
        alert("Debe seleccionar al menos un grupo de musculos");
        return;
    }
    if (entrenador.value == "0") {
        alert("Debe seleccionar un entrenador");
        return;
    }
    alert("¡Formulario enviado correctamente, " + nombre.value + "!");
    formulario.reset();
});