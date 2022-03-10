let tablaRadio = [
    {
        hora: '11:00',
        especialista: 'Ignacio Schulz',
        paciente: 'Francisca Rojas',
        rut: '9878782-1',
        prevision: 'Fonasa'
    },
    {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'Isapre'
    },
    {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        rut: '16445345-9',
        prevision: 'Isapre'
    },
    {
        hora: '15:30',
        especialista: 'Ana Maria Godoy',
        paciente: 'Manuel Godoy',
        rut: '17666419-0',
        prevision: 'Fonasa'
    },
    {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramon Ulloa',
        rut: '14989389-k',
        prevision: 'Fonasa'
    }
];

var textoRadio =
"<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";

for (var i = 0; i < tablaRadio.length; i++) {
    textoRadio += `<tr>
        <td>${tablaRadio[i].hora}</td>
        <td>${tablaRadio[i].especialista}</td>
        <td>${tablaRadio[i].paciente}</td>
        <td>${tablaRadio[i].rut}</td>
        <td>${tablaRadio[i].prevision}</td>
    </tr>`;
}

let tablaTrauma = [
    {
        hora: '08:00',
        especialista: 'Maria Paz Altuzarra',
        paciente: 'Paula Sanchez',
        rut: '15554774-5',
        prevision: 'Fonasa'
    },
    {
        hora: '10:00',
        especialista: 'Raul Araya',
        paciente: 'Angelica Navas',
        rut: '15444147-9',
        prevision: 'Isapre'
    },
    {
        hora: '10:30',
        especialista: 'Maria Arriagada',
        paciente: 'Ana Klapp',
        rut: '17879423-9',
        prevision: 'Isapre'
    },
    {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardonez',
        rut: '1547423-6',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Cecilia Budnik',
        paciente: 'Diago Marre',
        rut: '16554741-k',
        prevision: 'Fonasa'
    },
    {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        rut: '9747535-8',
        prevision: 'Isapre'
    },
    {
        hora: '12:30',
        especialista: 'Andres Kanacri',
        paciente: 'Marcial Suazo',
        rut: '11254785-5',
        prevision: 'Isapre'
    }
];

var textoTrauma =
"<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";

for (var i = 0; i < tablaTrauma.length; i++) {
    textoTrauma += `<tr>
        <td>${tablaTrauma[i].hora}</td>
        <td>${tablaTrauma[i].especialista}</td>
        <td>${tablaTrauma[i].paciente}</td>
        <td>${tablaTrauma[i].rut}</td>
        <td>${tablaTrauma[i].prevision}</td>
    </tr>`;
}

let tablaDental = [
    {
        hora: '08:30',
        especialista: 'Andrea Zuñiga',
        paciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'Isapre'
    },
    {
        hora: '11:00',
        especialista: 'Maria Pia Zañartu',
        paciente: 'Angel Muñoz',
        rut: '9878789-2',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Kast',
        rut: '7998789-5',
        prevision: 'Fonasa'
    },
    {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        rut: '18887662-k',
        prevision: 'Fonasa'
    },
    {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'Fonasa'
    },
    {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepulveda',
        rut: '14441281-0',
        prevision: 'Isapre'
    }
];

var textoDental =
"<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";

for (var i = 0; i < tablaDental.length; i++) {
    textoDental += `<tr>
        <td>${tablaDental[i].hora}</td>
        <td>${tablaDental[i].especialista}</td>
        <td>${tablaDental[i].paciente}</td>
        <td>${tablaDental[i].rut}</td>
        <td>${tablaDental[i].prevision}</td>
    </tr>`;
}

var textoDatosRadio = "";
var textoDatosTrauma = "";
var textoDatosDental = "";


for (let i = 0; i < tablaRadio.length; i++){
    if (i == 0){
        textoDatosRadio += `Primera atención: ${tablaRadio[i].paciente} - ${tablaRadio[i].prevision} | `
    } else if (i == (tablaRadio.length - 1)) {
        textoDatosRadio += `Última atención: ${tablaRadio[i].paciente} - ${tablaRadio[i].prevision}`
    }
}

for (let i = 0; i < tablaTrauma.length; i++){
    if (i == 0){
        textoDatosTrauma += `Primera atención: ${tablaTrauma[i].paciente} - ${tablaTrauma[i].prevision} | `
    } else if (i == (tablaTrauma.length - 1)) {
        textoDatosTrauma += `Última atención: ${tablaTrauma[i].paciente} - ${tablaTrauma[i].prevision}`
    }
}

for (let i = 0; i < tablaDental.length; i++){
    if (i == 0){
        textoDatosDental += `Primera atención: ${tablaDental[i].paciente} - ${tablaDental[i].prevision} | `
    } else if (i == (tablaDental.length - 1)) {
        textoDatosDental += `Última atención: ${tablaDental[i].paciente} - ${tablaDental[i].prevision}`
    }
}

document.getElementById("datosRadio").innerHTML = textoDatosRadio;
document.getElementById("tablaRadio").innerHTML = textoRadio;

document.getElementById("datosTrauma").innerHTML = textoDatosTrauma;
document.getElementById("tablaTrauma").innerHTML = textoTrauma;

document.getElementById("datosDental").innerHTML = textoDatosDental;
document.getElementById("tablaDental").innerHTML = textoDental;