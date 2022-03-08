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
function calculoDias() {
    var anios = parseInt(document.getElementById("idDias").value / 365);
    var semana = (document.getElementById("idDias").value % 365) / 7;
    var dias = (document.getElementById("idDias").value % 365) % 7;
    document.getElementById("idAnios").innerText = anios;
    document.getElementById("idSemanas").innerText = Math.floor(semana);
    document.getElementById("idObtDias").innerText = Math.abs(dias);
}
function sumProm() {
    var iFor= prompt("Cuantos numeros de sea ingresar");
    var acum = 0;
    var concate = "";
    for (var index = 1; index <= iFor; index++) {
        var num =parseInt(prompt("Ingrese Numero " + index));
        acum=num+acum; 
        if (concate === "") {
            concate = "Los números ingresados son : " + concate + " " + num
        }else{
            concate = concate + " , " + num;
        }  
    }
    var prom = acum / iFor;
    document.getElementById("idNumerosIngresados").innerText = concate;
    document.getElementById("idSuma").innerText = acum;
    document.getElementById("idProm").innerText = prom;
}