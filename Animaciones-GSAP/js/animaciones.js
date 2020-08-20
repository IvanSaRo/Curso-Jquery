(function(){

	
	function mover(dir){
		
			var $cajaRoja = $(".cajaRoja");
		
			var $cajaAzul = $(".cajaAzul");

		$cajaRoja.clearQueue();//limpia la cola de comandos para que si pulsamos varias veces no se queden guardados
		

		switch( dir ){

			case "arr":
				$cajaRoja.animate({
					top: "-=100",
				});
				gsap.to(".cajaAzul", {y: "-=100"});
			break;

			case "aba":
				$cajaRoja.animate({
					top: "+=100",
				});
				gsap.to(".cajaAzul", {y: "+=100"});

			break;

			case "izq":
				$cajaRoja.animate({
					left: "-=100",
				});
				gsap.to(".cajaAzul", {x: "-=100"});

			break;

			case "der":
				$cajaRoja.animate({
					left: "+=100",
				});
				gsap.to(".cajaAzul", {x: "+=100"});

			break;


			case "res": 

				$cajaRoja.animate({
					top: "0px",
					left: "0px",
					width: "50px",
					height: "50px"
				}, 100);
				gsap.to(".cajaAzul", {x: 0, 
									  y: 0, 
									  width: "50px",
									  height: "50px",
									  backgroundColor: "blue",
									  duration: 0.1
									});

		}

	}

	// Funcion del keypress en la pagina, para moverlo con las teclas direccionales
	$(document).on("keypress",function(e){


		switch( e.keyCode ){
			case 119:
				mover("arr");
			break;
		
			case 115:
				mover("aba");
			break;

			case 100:
				mover("der");
			break;

			case 97:
				mover("izq");
			break;
		
			default:
				mover("res");
			break;
		}

	});

	$("#button").on('click', function() {
		
		var $cajaRoja = $(".cajaRoja");
		
		var $cajaAzul = $(".cajaAzul");

		$cajaRoja.clearQueue();

		$cajaRoja.animate({
			width: "+=150",
			height: "+=150"
		}, 500);

		gsap.to(".cajaAzul", {	width: "+=150",
								height: "+=150",
								duration: 0.5,
								backgroundColor: "red" 
							})

	});
	
	
	
	// Funcion de los botones
	$("button").on('click', function() {
		
		var dir = $(this).data("dir");
		mover( dir );

	});


})();