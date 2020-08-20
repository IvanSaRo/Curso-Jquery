(function(){

    var actual = 0;
    var ancho = 600;
    
    var $slideShow = $(".slideShow ul");
    var slides = $slideShow.find("li").length;

    var intervalo = setInterval(function(){

        mover("sig")
    }, 1500);


    function mover( dir, click ){

        if(click){// este if sirve para que si se pulsa un botón para el intervalo
            clearInterval(intervalo);
        }
        
        (dir === "sig") ? actual-- : actual++;
        
          if (actual > 0){
            actual = (slides - 1) *-1;
        } else if( actual <= (slides * -1)){
            actual = 0;
        }
        
        var margen = actual * ancho;
       

        gsap.to(".slideShow ul", { marginLeft: margen, duration: 1.5, ease: "elastic.out(1, 0.8)"});
       /*  $slideShow.animate({
            marginLeft: margen
        },450) */
        
    }

    $(".botonSlide").on("click", function(){


        var dir = $(this).data("mov");

        mover( dir, true );
        
        
    })


})();