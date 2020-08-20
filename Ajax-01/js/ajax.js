(function(){

    $.ajax({
        type: 'GET',
        url: 'http://www.json-generator.com/api/json/get/cfIjFAkDpK?indent=2',
        dataType: 'json'
    }).done( function( data ){

        var persona = data;
        console.log(persona)

        $("#picFoto").attr("src", data.picture);
        $("#txtNombre").val( data.name );
        $("#txtDireccion").val( data.address );
        $("#txtTelefono").val( data.phone );
        $("#txtGenero").val( data.gender );
    }).fail(function(){

        console.log("ko")
    }).always( function(){

        console.log("completado")
    });







})();