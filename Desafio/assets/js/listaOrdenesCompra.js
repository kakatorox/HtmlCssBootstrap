$(document).ready(function () {
    console.log("ready!");
    $('#tblOrdenesCompra').bootstrapTable({
        url: './dataDummies/listaOrdenesCompra.json',
        pagination: true,
        search: true,
        pageSize: 5,
        pageList: [5, 10],
        locale: "es-ES",
        columns: [{
            field: 'orden_id',
            title: 'ID',
            width: '40px'
        }, {
            field: 'nombreEmpleado',
            title: 'Nombre Empleado',
            width: '180px'
        }, {
            field: 'nombreCliente',
            title: 'Nombre Cliente',
            width: '180px'
        }, {
            field: 'nombreDespachador',
            title: 'Nombre Despachador',
            width: '180px'
        }, {
            field: 'fechaRequerimiento',
            title: 'F. Requerimiento',
            width: '130px'
        }, {
            field: 'fechaEnvio',
            title: 'Fecha Envío',
            width: '130px'
        }, {
            field: 'nombreEnvio',
            title: 'Nombre Envío',
            width: '180px'
        }, {
            field: 'direccion',
            title: 'Dirección',
            width: '200px'
        }, {
            field: 'codigoPostal',
            title: 'Código Postal',
            width: '130px'
        }, {
            field: 'ciudad',
            title: 'Ciudad',
            width: '150px'
        }, {
            field: 'region',
            title: 'Región',
            width: '150px'
        }, {
            field: 'pais',
            title: 'País',
            width: '150px'
        }, {
            field: 'viaEnvio',
            title: 'Vía Envío',
            width: '150px'
        }]
    })
});