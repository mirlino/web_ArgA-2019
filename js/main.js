$(document).ready(function(){
    var imgItems = $('.slider li').length; //Numero de slides
    var imgPos = 1;
    
    // Agregando paginacion
    for(i = 1; i<= imgItems; i++){
        $('.pagination').append('<li><i class="fas fa-circle"></i></li>');
    }

    //-----------------------------------
 
    $('.slider li').hide(); //Ocultamos todos los slides
    $('.slider li:first').show(); // Mostramos el primer slide
    $('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

    // Ejecutamos todas las funciones
    $('.pagination li').click(pagination);
    $('.right i').click(nextSlider);
    $('.left i').click(prevSlider);

    setInterval(function(){
        nextSlider();
    }, 4000);

    // FUNCIONES =====================================================================
    
    function pagination(){
        var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+paginationPos+')').fadeIn(); //Mostramos el Slide Seleccionado

        //Dandole estilo a la paginacion selecionada
        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});

        imgPos = paginationPos;
     
    }

    function nextSlider() {
        if (imgPos >= imgItems) {imgPos = 1;} else {imgPos++;}

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#CD6E2E'});
        
        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+imgPos+')').fadeIn(); //Mostramos el Slide Seleccionado
    }

    function prevSlider() {
        if (imgPos <= 1) {imgPos = imgItems;} else {imgPos--;}

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#CD6E2E'});
        
        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+imgPos+')').fadeIn(); //Mostramos el Slide Seleccionado

    }

});