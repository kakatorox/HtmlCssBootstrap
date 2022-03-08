function calculoDias() {
    var anios = parseInt(document.getElementById("idDias").value / 365);
    var semana =(document.getElementById("idDias").value % 365) / 7;
    var dias =(document.getElementById("idDias").value % 365) % 7;

    document.getElementById("idAnios").innerText = anios;
    document.getElementById("idSemanas").innerText = Math.floor(semana);
    document.getElementById("idObtDias").innerText = Math.abs(dias);
}
function sumProm() {
    var sum = parseFloat(document.getElementById("idDias1").value) +
        parseFloat(document.getElementById("idDias2").value) +
        parseFloat(document.getElementById("idDias3").value) +
        parseFloat(document.getElementById("idDias4").value) +
        parseFloat(document.getElementById("idDias5").value)
    var prom = sum / 5;

    document.getElementById("idSuma").innerText = sum;
    document.getElementById("idProm").innerText = prom;
}
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
function conversion() {
    var graK = parseFloat(document.getElementById("idGradosCelsius").value) + 273.15;
    var graF = ((parseFloat(document.getElementById("idGradosCelsius").value) * 9) / 5) + 32;

    document.getElementById("idKelvin").innerText = graK + " K";
    document.getElementById("idFahrenheit").innerText = graF + " °F";
}
