function symProm() {
    var sum = parseFloat(document.getElementById("idDias1").value) +
        parseFloat(document.getElementById("idDias2").value) +
        parseFloat(document.getElementById("idDias3").value) +
        parseFloat(document.getElementById("idDias4").value) +
        parseFloat(document.getElementById("idDias5").value)
    var prom = sum / 5;

    document.getElementById("idSuma").innerText = sum;
    document.getElementById("idProm").innerText = prom;
}
