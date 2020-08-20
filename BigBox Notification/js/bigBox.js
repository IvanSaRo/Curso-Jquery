(function(){


    $.bigBox = function( opciones, callback ){

        opciones = $.extend({
            fa: "fa-thumbs-up",
            titulo: undefined,
            contenido: undefined,
            boton: "Aceptar"
    


        }, opciones);



        if( opciones.titulo === undefined){
            alert("El título es necesario");
            return;
        }else if( opciones.contenido === undefined){
            alert("El contenido es necesario");
            return;
        }





        var contenido = "";
            contenido = '<div class="bigBox-Fondo"></div>';

            
            
            contenido += '<div class="bigBox-Contenedor" align="center">';
            contenido += '<div class="bigBox-Cerrar"><i class="fas fa-times"></i></div>';
            contenido += '<div class="bigBox-Circulo"><i class="far '+ opciones.fa +' fa-2x"></i></div>';
            contenido += '<div class="bigBox-Contenido">';
            contenido += '<span class="bigBox-Titulo">'+ opciones.titulo +'</span>';
            contenido += '<span class="bigBox-Texto">'+ opciones.contenido +'</span>';
            contenido += '</div>';
            contenido += '<button class="bigBox-Boton">'+ opciones.boton +'</button>';
            contenido += '</div>';
            
            
            $("body").append( contenido ); 
        
        animar_entrada();
        
        
        
        //Función del botón cerrar
        $(".bigBox-Cerrar").on("click", function(){

            animar_salida();

            if( typeof callback == 'function'){

                callback('boton-cerrar');
            }


        });

         //Función del botón principal
         $(".bigBox-Boton").on("click", function(){

            animar_salida();

            if( typeof callback == 'function'){

                callback('boton-principal');
            }


        });

        // anima la entrada
        function animar_entrada(){

            var $fondo  = $(".bigBox-Fondo");
            var $bigBox = $(".bigBox-Contenedor");   

            var ancho = $(window).width();
            var alto = $(window).height();

            var anchoB = $bigBox.width();
            var altoB = $bigBox.height();

            
            //centrar la caja
            $bigBox.css({
                top: (alto/2) - (altoB/2),
                left: (ancho/2) - (anchoB/2)
            })

            
                // .show() quita el display:none
                $fondo.show();
                $bigBox.show();

                gsap.to($fondo, { opacity: 0.3, duration: 1});
                gsap.to($bigBox, {opacity: 1, duration: 0.5, });
                gsap.from($bigBox, {y: "-=30", duration:0.8, ease: "bounce.out"});
        };

        function animar_salida(){

            var $fondo  = $(".bigBox-Fondo");
            var $bigBox = $(".bigBox-Contenedor");   
            
                

                gsap.to($fondo, { opacity: 0, duration: 0.3});
                gsap.to($bigBox, {opacity: 0, duration: 0.3, onComplete: borrar_bigBox });
                
        };

        function borrar_bigBox(){

            //esta función elmimina cuadro y fondo del DOM para que no consuman recursos, se llama en la función animar_salida
            
            var $fondo  = $(".bigBox-Fondo");
            var $bigBox = $(".bigBox-Contenedor"); 

            $fondo.remove();
            $bigBox.remove();




        };





    };
})();