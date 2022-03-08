function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z\n]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Se requiere que ingrese un NOMBRE válido.";
        pasamosLaValidacion = false;
    };
    let validacionApellido = /[a-zA-Z\n]/gim;
    if (validacionApellido.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Se requiere que ingrese un ASUNTO válido.";
        pasamosLaValidacion = false;
    };
    let validacionEdad = /./gim;
    if (validacionEdad.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Se requiere un MENSAJERIJILLO.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
};
function mensajeEnviado(){
    document.querySelector(".resultado").innerHTML = "MENSAJE ENVIADO DE FORMA CORRECTA";
};
function limpiarErrores(){
    document.querySelector(".errorNombre").innerHTML="";
    document.querySelector(".errorAsunto").innerHTML="";
    document.querySelector(".errorMensaje").innerHTML="";
};
let form = document.getElementById("formulario");
form.addEventListener("submit", function consultar(event) {
        event.preventDefault();
        limpiarErrores();
        let nombre = document.querySelector(".nombre").value;
        let asunto = document.querySelector(".asunto").value;
        let mensaje = document.querySelector(".mensaje").value;
        let resultado = validar(nombre, asunto, mensaje);
        if (resultado == true) {
            mensajeEnviado();
        };
    });