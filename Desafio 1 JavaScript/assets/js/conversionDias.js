function calculoDias() {
    var anios = parseInt(document.getElementById("idDias").value / 365);
    var semana =document.getElementById("idDias").value / 7;
    var dias = document.getElementById("idDias").value - 365;
   

     
    document.getElementById("idAnios").innerText = anios;
    document.getElementById("idSemanas").innerText = Math.floor(semana);
    document.getElementById("idObtDias").innerText = Math.abs(dias);
   
}
