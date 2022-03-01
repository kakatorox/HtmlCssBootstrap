
$(document).ready(function () {
        /* Ordenes de Compra*/
        $("#idMenuCrearOrdenCompra").click(function (event) {
            console.log("Click lista crear ordenes compra");
            $("#idContenido").load('crearOrdenCompra.html');
        });
        $("#idMenuListaOrdenes").click(function (event) {
            console.log("Click lista ordenes compra");
            $("#idContenido").load('ordenesCompra.html');
        });
        /* Productos*/
        $("#idMenuListarProductos").click(function (event) {
            console.log("Click listar Producto");
            $("#idContenido").load('producto.html');
        });

        $("#idMenuModificarProductos").click(function (event) {
            console.log("Click Modificar Producto");
            $("#idContenido").load('modificarProducto.html');
        });
        
});

