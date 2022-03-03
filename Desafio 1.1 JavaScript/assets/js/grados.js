function conversion() {
    var graK = parseFloat(document.getElementById("idGradosCelsius").value) + 273.15;
    var graF = ((parseFloat(document.getElementById("idGradosCelsius").value) * 9)/5) + 32;

    document.getElementById("idKelvin").innerText = graK + " K";
    document.getElementById("idFahrenheit").innerText = graF + " °F";
}
