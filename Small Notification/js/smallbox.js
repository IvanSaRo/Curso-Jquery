(function () {
  $.smallBox = function (opciones) {
    opciones = $.extend(
      {
        titulo: "Título",
        subtitulo: "Subtítulo",
        contenido: undefined,
        fa: "fa-envelope-o",
        img: "img/medico.1.jpg",
        timeout: 3000,
      },
      opciones
    );

    html = "";

    html += '<div class="smallBox-contenedor">';
    html += '    <div class="smallBox-foto">';
    html += '        <img src="' + opciones.img + '">';
    html += "    </div>";
    html += '    <div class="smallBox-contenido" align="center">';
    html += '        <div class="smallBox-textoContenedor" align="left">';
    html +=
      '            <span class="smallBox-titulo">' +
      opciones.titulo +
      "</span>";
    html +=
      '            <span class="smallBox-subTitulo">' +
      opciones.subtitulo +
      "</span>";
    html += "        </div>";
    html += '        <div class="smallBox-pico"></div>';
    html += '        <div class="smallBox-cajaColor">';
    html += '            <div class="smallBox-colorTexto">';
    html += opciones.contenido;
    html += "            </div>";
    html += '            <div class="smallBox-colorIcon">';
    html += '                <i class="fa ' + opciones.fa + ' fa-2x"></i>';
    html += "            </div>";
    html += "        </div>";
    html += '        <div class="smallBox-sombra"></div>';
    html += "    </div>";
    html += "</div>";

    $("body").append(html);
    
    animate_entry();

    setTimeout(function(){
      animate_exit();
    }, opciones.timeout)
  };

  function animate_exit(){
    var $smallBox = $(".smallBox-contenedor");

    gsap.to($smallBox, {
      opacity: 0,
      x: "+=350",
      duration: 0.7,
      ease: "sine.out",
      opacity: 0,
      onComplete: delete_smallbox
    });
  }

  function delete_smallbox(){
    $(".smallBox-contenedor").remove();
  }

  function animate_entry() {
    var $smallBox = $(".smallBox-contenedor");

    gsap.from($smallBox, {
      opacity: 0,
      x: "+=350",
      duration: 1,
      ease: "sine.in",
      opacity: 0,
    });
    //  gsap.from($smallBox, {x: "-+=350", duration:0.8});
    //  gsap.to($smallBox, {x: "+=400", duration: 1});
    // gsap.to($smallBox, {x: 0, duration: 1});
  }
})();
