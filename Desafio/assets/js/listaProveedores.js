$(document).ready(function () {
    console.log("ready!");
    $('#tblProveedor').bootstrapTable({
        url: './dataDummies/listaProveedores.json',
        pagination: true,
        search: true,
        pageSize: 5,
        pageList: [5, 10],
        locale: "es-ES",
        columns: [{
            field: 'proveedor_id',
            title: 'ID',
            width: '40px'
        }, {
            field: 'nombrecompania',
            title: 'Nombre Compañia',
            width: '180px'
        }, {
            field: 'nombrecontacto',
            title: 'Nombre Contacto',
            width: '180px'
        }, {
            field: 'direccion',
            title: 'Direccion',
            width: '180px'
        }, {
            field: 'region',
            title: 'Region',
            width: '130px'
        }, {
            field: 'ciudad',
            title: 'Ciudad',
            width: '130px'
        }, {
            field: 'telefono',
            title: 'Telefono',
            width: '130px'
        }]
    });
    $("#idModificarProveedor").click(function (event) {
        console.log("Click Modificar Proveedor");
        $("#idContenido").load('modificarProveedor.html');
    });
    $("#idEliminarProveedor").click(function (event) {
        console.log("Eliminar Orden de Compra");
        alert("Proveedor Eliminado");
    });
    
});