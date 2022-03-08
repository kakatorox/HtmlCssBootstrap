function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z\n]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido.";
        pasamosLaValidacion = false;
    };
    let validacionApellido = /[a-zA-Z\n]/gim;
    if (validacionApellido.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un apellido válido.";
        pasamosLaValidacion = false;
    };
    let validacionEdad = /./gim;
    if (validacionEdad.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese una edad válida(sólo números).";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
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
            alert("Mensaje Enviado");
        };
    });