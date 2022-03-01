$(document).ready(function () {
    console.log("ready!");
    $('#tblProductos').bootstrapTable({
        url: './dataDummies/listaProductos.json',
        pagination: true,
        search: true,
        pageSize: 5,
        pageList: [5, 10],
        locale: "es-ES",
        columns: [{
            field: 'producto_id',
            title: 'ID',
            width: '40px'
        }, {
            field: 'categoria',
            title: 'Categoria',
            width: '180px'
        }, {
            field: 'proveedor',
            title: 'Proveedor',
            width: '180px'
        }, {
            field: 'precio',
            title: 'Precio',
            width: '180px'
        }, {
            field: 'stock',
            title: 'Stock',
            width: '130px'
        }, {
            field: 'descontinuado',
            title: 'Descontinuado',
            width: '130px'
        }]
    })
});