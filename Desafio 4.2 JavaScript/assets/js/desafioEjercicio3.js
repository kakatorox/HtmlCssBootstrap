$(document).ready(function () {
    $('body').on('click', 'button', function () {
        let a = parseInt(document.getElementById("valor1").value);
        let b = parseInt(document.getElementById("valor2").value);
        if ($(this).attr('id') === "btn-sumar") {
            document.querySelector(".resultado").innerHTML = a + b;
        };
        if ($(this).attr('id') === "btn-restar") {
            var resta = a - b
            if (resta < 0) {
                resta = 0;
            }
            document.querySelector(".resultado").innerHTML = resta;
        };
    });
});