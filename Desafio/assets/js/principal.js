
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
    $("#idMenuCrearProducto").click(function (event) {
        console.log("Crear Producto");
        $("#idContenido").load('crearProducto.html');
    });
    $("#idMenuListarProductos").click(function (event) {
        console.log("Click listar Producto");
        $("#idContenido").load('producto.html');
    });
    /* Productos*/
    $("#idMenuCrearProveedor").click(function (event) {
        console.log("Crear Producto");
        $("#idContenido").load('crearProveedor.html');
    });
    $("#idMenuListarProveedores").click(function (event) {
        console.log("Click listar Producto");
        $("#idContenido").load('proveedores.html');
    });
});

