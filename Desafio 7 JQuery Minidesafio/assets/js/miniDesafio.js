$(document).ready(function (){
    // EJERCICIO 1
    $('#idDivHazClick').click(function () {
        if ($('#idDivCambiame').hasClass('seleccionado')) {
            $('#idDivCambiame').removeClass('seleccionado');
        } else {
            $('#idDivCambiame').addClass('seleccionado');
        }
    });
     // EJERCICIO 2
    $('#idIcono').click(function () {
            if ($('#idUlToHide').is(':hidden')) {
                $('#idUlToHide').fadeIn("slow",function (){
                    $('#idUlToHide').show();
                });
                // $('#idUlToHide').fadeToggle(5000,function (){
                //     $('#idUlToHide').show();
                // })
            }else{
                $('#idUlToHide').fadeOut("slow",function (){
                    $('#idUlToHide').hide();
                });
            }
    });
    // EJERCICIO 3
    $('#idPasaSobreMi').mouseover(function () {
        $('div > div > div > ul > li:even').addClass('pintarImpares');
        $('div > div > div > ul > li:odd').addClass('pintarPares');
        //$('div > div > div > ul > li:even').css('background-color', 'yellow');
        //$("li:even").css("background-color", "yellow");
        //$("div.ul > li:even").addClass('pintarpares');
    });
    $('#idPasaSobreMi').mouseleave(function () {
        $("li:even").removeClass('pintarImpares');
        $("li:odd").removeClass('pintarPares');
        
    });    
});