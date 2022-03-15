$(document).ready(function (){
    $.ajax({
        type: "GET",
        url: "https://www.feriadosapp.com/api/holidays.json",
        dataType: "json",
        success: function (data) {
            console.log(data.data);
            $('#idTableFeriados').bootstrapTable('load', data.data);
        },
        error: function (dataError) {
            console.log("El error es: " + dataError);
        },
        async: true,
    });
    $('#idTableFeriados').bootstrapTable({
        url: '',
        pagination: true,
        search: true,
        pageSize: 5,
        pageList: [5, 10, 50],
        locale: "es-ES",
        columns: [
            {
                field: 'id',
                title: 'ID',
                sortable: true,
                width: '200px',
            },
            {
                field: 'date',
                title: 'Fecha',
                sortable: true,
                width: '200px',
            },
            {
                field: 'title',
                title: 'Titulo',
                sortable: true,
                width: '200px',
            },
            {
                field: 'extra',
                title: 'Razon',
                sortable: true,
                width: '200px',
            },
            {
                field: 'law',
                title: 'Ley',
                sortable: true,
                width: '200px',
            },
            {
                field: 'law_id',
                title: 'Ley ID',
                sortable: true,
                width: '200px',
            }   

        ]
    });
});


