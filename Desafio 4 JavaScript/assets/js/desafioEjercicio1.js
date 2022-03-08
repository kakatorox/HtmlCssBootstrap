function validar(nombre, apellido, edad, telefono, email) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido.";
        pasamosLaValidacion = false;
    };
    let validacionApellido = /[a-zA-Z]/gim;
    if (validacionApellido.test(apellido) == false) {
        document.querySelector(".errorApellido").innerHTML = "Ingrese un apellido válido.";
        pasamosLaValidacion = false;
    };
    let validacionEdad = /\d/gim;
    if (validacionEdad.test(edad) == false) {
        document.querySelector(".errorEdad").innerHTML = "Ingrese una edad válida(sólo números).";
        pasamosLaValidacion = false;
    };
    let validacionTelefono = /\d/gim;
    if (validacionTelefono.test(telefono) == false) {
        document.querySelector(".errorTelefono").innerHTML = "Ingrese un teléfono válido(sólo números).";
        pasamosLaValidacion = false;
    };
    let validaciónEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.[a-zA-Z]/gim;
    if (validaciónEmail.test(email) == false) {
        document.querySelector(".errorEmail").innerHTML = "Ingrese un correo válido.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
};
function limpiarErrores(){
    document.querySelector(".errorNombre").innerHTML="";
    document.querySelector(".errorApellido").innerHTML ="";
    document.querySelector(".errorEdad").innerHTML = "";
    document.querySelector(".errorTelefono").innerHTML ="";
    document.querySelector(".errorEmail").innerHTML ="";
};
function consultar(event) {
    event.preventDefault();
    limpiarErrores();
    let nombre = document.querySelector(".textNombre").value;
    let apellido = document.querySelector(".textApellido").value;
    let edad = document.querySelector(".textEdad").value;
    let telefono = document.querySelector(".textTelefono").value;
    let email = document.querySelector(".textEmail").value;
    let resultado = validar(nombre, apellido, edad, telefono, email);
    if (resultado == true) {
        exito();
    };
};
let form = document.getElementById("formulario");
form.addEventListener("submit", consultar);