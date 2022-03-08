function cachi(juegos) {
    var cantiodadJuegos = parseInt(juegos);
    var juegosGanados = 0;
    var juegosPerdidos =0;
    var juegosEmpatados =0;
    var stringForTable = "";
    var salir = false;
    var element = document.getElementById("idValores");
    element.classList.add("d-none");
    for (index = 1; index <= cantiodadJuegos; index++) {
        var selUsuario = "";
        while (true) {
            var seleccionUsuario = prompt("Ingrese \n1.- Piedra  \n2.- Papel  \n3.- Tijera  \n4.- Salir");
            if (seleccionUsuario === "1") {
                selUsuario = "Piedra"; 
                break;
            }
            if (seleccionUsuario === "2") {
                selUsuario = "Papel";
                break;
            }
            if (seleccionUsuario === "3") {
                selUsuario = "Tijera";
                break;
            }
            if (seleccionUsuario ==="4") {
                index = cantiodadJuegos;
                salir = true;
                break;
            }
        }
        if (salir) {
            break;
        }
        var selMaquina = Math.floor((Math.random() * 3) + 1);
        switch (selMaquina) {
            case 1:
                selMaquina = "Piedra"; 
                break;
            case 2:
                selMaquina = "Papel";
                break;
            case 3:
                selMaquina = "Tijera";
                break;
            
        }
        if (selUsuario === selMaquina ) {
            ganador = "Empate";
            juegosEmpatados++;
        }
        var ganador;
        if (selUsuario === "Piedra" && selMaquina === "Papel") {
            ganador = "Maquina"; 
            juegosPerdidos++;  
        }
        if (selUsuario === "Piedra" && selMaquina === "Tijera") {
            ganador = "Jugador";
            juegosGanados++;
        }
        if (selUsuario === "Tijera" && selMaquina === "Papel") {
            ganador = "Jugador";
            juegosGanados++;
        }
        if (selUsuario === "Papel" && selMaquina === "Piedra") {
            ganador = "Jugador";
            juegosGanados++;
        }
        if (selUsuario === "Tijera" && selMaquina === "Piedra") {
            ganador = "Maquina"; 
            juegosPerdidos++; 
        }
        if (selUsuario === "Papel" && selMaquina === "Tijera") {
            ganador = "Maquina"; 
            juegosPerdidos++; 
        }
        alert(`Usuario = ${selUsuario} VS Máquina = ${selMaquina}  \nGanador = ${ganador}`);
        var stringFor = '<tr>' +
            '<td>' + index + '</td>' + 
            '<td>' + selUsuario + '</td>' +
            '<td>' + selMaquina + '</td>' +
            '<td>' + ganador + '</td>' +
        '</tr>';
        stringForTable = stringForTable + stringFor;
    }
    crear(stringForTable, juegosGanados, juegosPerdidos, juegosEmpatados);
};

function crear(string,contG,contP,contE) {
    var element = document.getElementById("idValores");
    element.classList.remove("d-none");
    document.getElementById("idJuegoGanado").innerText = contG;
    document.getElementById("idJuegoPerdidos").innerText = contP;
    document.getElementById("idJuegosEmpatados").innerText = contE;
    var inicio = '<table class="table table-hover col-6"id="mytable">' +
        '<thead>' +
        '<tr>' +
        '<th>ID JUEGO</th>' +
        '<th>JUGADOR</th>' +
        '<th>MAQUINA</th>' +
        '<th>GANADOR</th>' +
        '</tr>' +
        '<thead>' +
        '<tbody>';
    var final = '</tbody>' +
        '</table>';
    document.getElementById("idCachipun").innerHTML = inicio + string + final;
};
