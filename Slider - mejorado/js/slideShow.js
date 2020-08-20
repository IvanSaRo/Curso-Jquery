(function(){

    var actual = 0;
    var ancho = 600;
    
    var $slideShow = $(".slideShow ul");
    var slides = $slideShow.find("li").length;
    var $puntos = $(".slideShowButtons");

    $puntos.find("div").eq(0).css({
        backgroundColor: "#58167d"
    })

     var intervalo = setInterval(function(){

        mover("sig")
    }, 2500); 


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
       

        gsap.to(".slideShow ul", { marginLeft: margen, duration: 2.5, ease: "elastic.out(1, 0.8)"});
        gsap.to($puntoActual, { backgroundColor: "#58167d"});
        gsap.to($demasPuntos, {backgroundColor: "grey"});

        
       

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


})();