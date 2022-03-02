function sumar() {
    var num = parseInt(document.getElementById("idNum1").value) + parseInt(document.getElementById("idNum2").value);
    document.getElementById("idResultado").innerText = num;
}
function resta() {
    var num = parseInt(document.getElementById("idNum1").value) - parseInt(document.getElementById("idNum2").value);
    document.getElementById("idResultado").innerText = num;
}
function multiplicar() {
    var num = parseInt(document.getElementById("idNum1").value) * parseInt(document.getElementById("idNum2").value);
    document.getElementById("idResultado").innerText = num;
}
function dividir() {
    var num = parseInt(document.getElementById("idNum1").value) / parseInt(document.getElementById("idNum2").value);
    document.getElementById("idResultado").innerText = num;
}
function modulo() {
    var num = parseInt(document.getElementById("idNum1").value) % parseInt(document.getElementById("idNum2").value);
    document.getElementById("idResultado").innerText = num;
}