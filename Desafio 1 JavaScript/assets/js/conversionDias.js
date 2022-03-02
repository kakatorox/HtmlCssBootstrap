function calculoDias() {
    var aniosCon = parseFloat(document.getElementById("idDias").value) / 365 ;
    var anios = parseInt(aniosCon);
    var semanaCon = parseFloat(document.getElementById("idDias").value) - 365;
    var semana = parseInt(semanaCon / 7);
    alert(semana / 7);
    var dias = 7-semana;

    document.getElementById("idAnios").innerText = anios;
    document.getElementById("idSemanas").innerText = semana;
    document.getElementById("idDias").innerText = dias;
   
}
