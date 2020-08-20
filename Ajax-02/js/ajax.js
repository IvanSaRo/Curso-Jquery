(function(){


	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'http://www.json-generator.com/api/json/get/cgBIPuUKYy?indent=2'
	})
	.done(function( data ){
		console.log("Hecho Correcto!");

		var personas = data;

		
		
		for (let i = 0; i < personas.length; i++) {
			
			var persona = personas[i];
			
			var tags = "";

			for (let j = 0; j < persona.tags.length; j++) {
				
				tags += '<span class="label label-primary">' + persona.tags[j] + '</span>'
				
			}
			
			let contenido =  "";
				contenido += "<tr>";
				contenido += "<td>"+ persona.name +"</td>";
				contenido += "<td>"+ persona.age +"</td>";
				contenido += "<td>"+ tags +"</td>";
				contenido += "</tr>";
				
				$(".table").append( contenido );
			}
		


	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();