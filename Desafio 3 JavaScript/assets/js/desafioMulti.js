function multi(){
    var element = document.getElementById("idValores");
    var num = document.getElementById("idCant").value;
    let factorial = (num) => {
        var fac = 1;
        for (var index = 1; index <= num; index++) {
            fac = fac * index;
        }
        console.log(fac);
        return fac;
    };
    if (num < 1 || 20 < num || num === "") {
        alert("Número Ingresado Fuera de Rango");
    }
    else {
        element.classList.remove("d-none");
        document.getElementById("idJuegoGanado").innerHTML = factorial(num);
        }  
        
};