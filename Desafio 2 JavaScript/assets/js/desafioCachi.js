
function cachi() {
    var num = parseInt(document.getElementById("idCant").value);
    var maquina;
    for (index = 1 ; index <=num ; index++) {
        var jugador = prompt("Elegir Piedra, Papel o Tijera");
        var ju = Math.floor((Math.random() * 3) + 1);        
        if (ju === 1) {
            maquina = "Piedra";
        };
        if (ju === 2) {
            maquina = "Papel";
        };
        if (ju === 3) {
            maquina = "Tijera";
        };
        if (jugador == maquina) {
            document.getElementById("idResultado").innerText = "Empate";
            alert("Empate");
        }
        if (( jugador == piedra) && (maquina == tijera)) {
                piedra
        }
        if (piedra && papel) {
                papel
        }
        if (tijera && papel) {
                piedra
        }

        alert(ju);

    }



    var stringFor = '<tr>' +
        '<td>Row 2 - Column 1</td>' +
        '<td>Row - 2 Column 2</td>' +
        '<td>Row - 2 Column 2</td>' +
        '</tr>';
    crear(stringFor);
    document.getElementById("idResultado").innerText = num;
};

function crear(string){
    var stringFor = string;
    alert(stringFor);
    var select = '<table class="table table-hover col-6"id="mytable">' +
                    '<thead>' +
                        '<tr>' +
                            '<th>JUGADOR</th>' +
                            '<th>MAQUINA</th>' +
                            '<th>GANADOR</th>' +
                        '</tr>' +
                    '<thead>' +
                    '<tbody>';
    var final =     '</tbody>' +
                '</table>';
    document.getElementById("tblCachipunRes").innerHTML = select + stringFor + final;
}
