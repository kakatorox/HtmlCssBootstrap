$(document).ready(function (){
    $('#idBtnSearch').click(function (){
        let idSuperHero = $('#idInputCode').val();
        let url = "https://www.superheroapi.com/api.php/4905856019427443/" + idSuperHero;
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (data) {
                if (data.response === "error") {
                    alert('Se a Generado el Siguiente Error : ' + data.error);
                }
                else{
                    $('#idFotoSuperHero').attr("src", data.image.url);
                    $('#idNombreSuperHero').html('Nombre: ' + data.name);
                    $('#idConexionesSuperHero').html('Conexiones: ' + data.connections['group-affiliation']);
                    $('#idPublicadoPor').html('Publicado por: ' + data.biography.publisher);
                    $('#idOcupacion').html('Ocupacion: ' + data.work['occupation']);
                    $('#idPrimeraAparicion').html('Primera Aparición: ' + data.biography['first-appearance']);
                    let altura = "";
                    let peso = "";
                    let alianzas = "";
                    for (let i = 0; i < data.appearance.height.length; i++) {
                        if (altura === "") {
                            altura = data.appearance.height[i];
                        } else {
                            altura = altura + " - " + data.appearance.height[i];
                        }
                    }
                    for (i = 0; i < data.appearance.weight.length; i++) {
                        if (peso === "") {
                            peso = data.appearance.weight[i];
                        } else {
                            peso = peso + " - " + data.appearance.weight[i];
                        }
                    }
                    for (i = 0; i < data.biography.aliases.length; i++) {
                        if (alianzas === "") {
                            alianzas = data.biography.aliases[i];
                        } else {
                            alianzas = alianzas + ", " + data.biography.aliases[i];
                        }
                    }
                    $('#idAltura').html('Altura: ' + altura);
                    $('#idPeso').html('Peso: ' + peso);
                    $('#idAlianzas').html('Alienzas: ' + alianzas);
                    $('#idCardFooter').html('Base de' + data.name + ' : ' + data.work.base);
                    var chart2 = new CanvasJS.Chart("chartContainer2", {
                        theme: "dark1", // "light1", "light2", "dark1", "dark2"
                        exportEnabled: true,
                        animationEnabled: true,
                        title: {
                            text: "Estadística de Poder para " + data.name
                        },
                        data: [{
                            type: "pie",
                            startAngle: 25,
                            toolTipContent: "<b>{label}</b>: {y}",
                            showInLegend: "true",
                            legendText: "{label}",
                            indexLabelFontSize: 16,
                            indexLabel: "{label}  ({y})",
                            dataPoints: [
                                { y: data.powerstats.intelligence, label: "Intelligence" },
                                { y: data.powerstats.strength, label: "Strength" },
                                { y: data.powerstats.speed, label: "Speed" },
                                { y: data.powerstats.durability, label: "Durability" },
                                { y: data.powerstats.power, label: "Power" },
                                { y: data.powerstats.combat, label: "Combat" }
                            ]
                        }]
                    });
                    chart2.render();
                    $('#idDivOculto').attr('style','Display: block');
                }
                
            },
            error: function (data) {
                console.log("El error es: " + data);
                alert('Se a Generado el Siguiente Error: ' + data.error);
            },
            async: true,
        });
        
    });
});


