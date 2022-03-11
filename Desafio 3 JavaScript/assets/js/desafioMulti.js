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
        
        var set = new Set("preguuuuntaaaaa");
        console.log(set);

        var compras={
            manzana :2,
        };
    var keys = Object.values(compras);
    var keys = Object.entries(compras);
        var keys = Object.keys(compras);
        console.log(keys);

    var carbohidratos = ["Papas","Fideos","Avena","Arooz"];
    carbohidratos.pop();
    console.log(carbohidratos);
};