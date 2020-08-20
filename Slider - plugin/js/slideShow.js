(function(){

    $.slideShow = function( opciones ){

        
        //con el extend toda info que venga por parámetro sustituirá a los que haya definidos
        opciones = $.extend({
            divDestino: ".slideShow",
            slides: [],
            intervalo: 1500,
            ancho: 600,
            velocidad: 2.5,
            colorBoton: "green",
            colorTodosBotones: "grey"
        }, opciones);

        if( opciones.slides.length === 0){
            alert("Los slides son necesarios");
            return;
        }
        
        
        var actual = 0;
        var ancho = opciones.ancho;
    
        var slides = opciones.slides.length;
        
        //Creación del slideshow
        var contenido = "";
            contenido += "<ul>"
            
            for(let i = 0; i < opciones.slides.length; i++){
                
                contenido += '<li><img src="'+ opciones.slides[i] + '"></li>';
            }
            
            contenido += "</ul>";
            
            $( opciones.divDestino ).append( contenido );
            
        var $slideShow = $( opciones.divDestino + "ul");
        
        
        //Creación de los botones
        var contenido = "";
            contenido += '<div class="slideShowButtons">'

            for(let i = 0; i < opciones.slides.length; i++){
                
                contenido += '<div data-id="' + i + '" class="slideButton"></div>';
            };

            contenido += "</div>";

            $( opciones.divDestino ).append( contenido );



        
        
        
        
        
        
        var $puntos = $(".slideShowButtons");

        //Estas dos cambian el color por defecto de todos los botones menos el primero y el primero como seleccionado
        $puntos.find("div").not(0).css({
            backgroundColor: opciones.colorTodosBotones
        })
       
        $puntos.find("div").eq(0).css({
            backgroundColor: opciones.colorBoton
        })

        var intervalo = setInterval(function(){
            mover("sig")
        }, opciones.intervalo); 


        function mover( dir, click ){

            
            (dir === "sig") ? actual-- : actual++;
            
            if (actual > 0){
                actual = (slides - 1) *-1;
            } else if( actual <= (slides * -1)){
                actual = 0;
            }
            
            move_by_point( actual )
        }

        
        function move_by_point( actual, click){

        
            if(click){// este if sirve para que si se pulsa un botón para el intervalo
                clearInterval(intervalo);
            };
        
            var margen = actual * ancho;
            var indice = actual * -1; //saco por qué slide va la animación para animar el punto que le corresponda

            var $puntoActual = $puntos.find("div").eq(indice);
            var $demasPuntos = $puntos.find("div").not($puntoActual);
        

            gsap.to(".slideShow ul", { marginLeft: margen, duration: opciones.velocidad, ease: "elastic.out(1, 0.8)"});
            gsap.to($puntoActual, { backgroundColor: opciones.colorBoton});
            gsap.to($demasPuntos, {backgroundColor: opciones.colorTodosBotones});

            
        

        }
        
        
        $(".slideButton").on("click", function(){

            var idx = $(this).data("id"); 

            idx = idx * -1;

            move_by_point( idx, true );
        })
        
        $(".botonSlide").on("click", function(){


            var dir = $(this).data("mov");

            mover( dir, true );
            
            
        })


        };
    
    
    
    

})();