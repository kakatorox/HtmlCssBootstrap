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
function loadPage() {
    ComboAnio();
}
function ComboAnio() {

    var d = new Date();
    var n = d.getFullYear();
    var select = document.getElementById("aDrop");
    for (var i = n; i >= 1900; i--) {
        var a = document.createElement("option")
        a.className = "dropdown-item"
        a.href = "#"
        a.id = "idAnio"
        a.value = i
        a.innerText = i
        select.append(a);
    }
}
function es_bisiesto(year) {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 366 : 365;
}
function calculoDias(optionValue) {
    var idAnio = optionValue;
    console.log(idAnio);
    var anios = parseInt(idAnio / 365);
    var semana = parseInt(idAnio/ 365) % 7;
    var dias = parseInt(idAnio - 365) ;//- 7;

    document.getElementById("idAnios").innerText = anios;
    document.getElementById("idSemanas").innerText = Math.floor(semana);
    document.getElementById("idObtDias").innerText =dias;
}
//jquery siempre debe llevar als sentencias asi
$(document).ready(function () {
    $('#aDrop').change(function () {
        var optionValue = $('option:selected').attr('value');
        if (es_bisiesto(optionValue) === 366) {
            document.getElementById("idAnioBi").innerText = "Es Año Bisiesto";
        } else {
            document.getElementById("idAnioBi").innerText = "No es Año Bisiesto";
        };
        calculoDias(es_bisiesto(optionValue), $('option:selected').attr('value'));

    });
});
function sumProm() {

    var iFor= prompt("Cuantos numeros de sea ingresar");
    var acum = 0;
    for (var index = 1; index <= iFor; index++) {
        var num =parseInt(prompt("Ingrese Numero " + index));
        acum=num+acum;        
    }
    var prom = acum / iFor;

    document.getElementById("idSuma").innerText = acum;
    document.getElementById("idProm").innerText = prom;
}