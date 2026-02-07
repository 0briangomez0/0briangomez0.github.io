function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    alert("Mensaje enviado correctamente. ¡Gracias!");
    return true;
}
