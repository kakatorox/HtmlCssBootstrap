$(document).ready(function (){
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126",
        dataType: "json",
        success: function (data) {
            var len = data.results.length;
            for (var i = 0; i < len; i++) {
                var id = i;
                var name = data.results[i]['name'];
                var url = data.results[i]['url'];                                                      
                $('#idDivDropIdPokebaby').append('<option class="dropdown-item" id=' + id + ' value="' + name + '" name="' + url +'">' + name + '</option>');
            };
        },
        error: function (dataError) {
            console.log("El error es: " + dataError);
        },
        async: true,
    });
    $('#idTablePokeBabys').bootstrapTable({
        url: '',
        pagination: true,
        search: true,
        pageSize: 5,
        pageList: [5, 10, 50],
        locale: "es-ES",
        columns: [
            {
                field: 'name',
                title: 'Nombre',
                sortable: true,
                width: '200px',
                formatter: function (value, row, index) {
                    return ' <a href="javascript:onClickLinkPokemon()">' + value + '</a>';
                }
            },
            {
                field: 'url',
                title: 'ENLACE',
                formatter: function (value, row, index) {
                    return ' <a href="javascript:onClickLinkPokemon()">' + value + '</a>';
                }

            }
        ]
    }); 
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126",
        dataType: "json",
        success: function (data) {
            $('#idTablePokeBabys').bootstrapTable('load', data.results);
        },
        error: function (dataError) {
            console.log("El error es: " + dataError);
        },
        async: true,
    });
    $("#idDivDropIdPokebaby").on('change', function () {
        let url = $(this).find('option:selected').attr('name');
        $('#idNombrePoke').empty();
        $('#idNombrePoke').append($(this).find('option:selected').attr('value'));
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (data) {
                $.ajax({
                    type: "GET",
                    url: data.forms[0].url,
                    dataType: "json",
                    success: function (data) {
                        var urlImagen = data.sprites.front_default;
                        $('#idPokeFoto').attr("src", data.sprites.front_default);

                    },
                    error: function (dataError) {
                        console.log("El error es: " + dataError);
                    },
                    async: true,
                });

                var chart = new CanvasJS.Chart("chartContainer", {
                    theme: "light1", // "light2", "dark1", "dark2"
                    animationEnabled: true, // change to true		
                    title: {
                        text: "Pokemon Stat Base"
                    },
                    data: [
                        {
                            // Change type to "bar", "area", "spline", "pie",etc.
                            type: "column",
                            dataPoints: [                                
                                { label: data.stats[5].stat['name'], y: data.stats[5].base_stat },
                                { label: data.stats[4].stat['name'], y: data.stats[4].base_stat },
                                { label: data.stats[3].stat['name'], y: data.stats[3].base_stat },
                                { label: data.stats[2].stat['name'], y: data.stats[2].base_stat },
                                { label: data.stats[1].stat['name'], y: data.stats[1].base_stat },
                                { label: data.stats[0].stat['name'], y: data.stats[0].base_stat }
                            ]
                        }
                    ]
                });
                chart.render();
            },
            error: function (dataError) {
                console.log("El error es: " + dataError);
            },
            async: true,
        });
        
        
        var chart2 = new CanvasJS.Chart("chartContainer2", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Grafico Poder Base"
            },
            data: [{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 51.08, label: "Chrome" },
                    { y: 27.34, label: "Internet Explorer" },
                    { y: 10.62, label: "Firefox" },
                    { y: 5.02, label: "Microsoft Edge" },
                    { y: 4.07, label: "Safari" },
                    { y: 1.22, label: "Opera" },
                    { y: 0.44, label: "Others" }
                ]
            }]
        });
        chart2.render();
    });
});


