(function () {
  $.smallBox = function (opciones) {
    opciones = $.extend(
      {
        titulo: "Título",
        subtitulo: "Subtítulo",
        contenido: undefined,
        fa: "fa-enevelope-o",
        img: "img/medico.1.jpg",
      },
      opciones);

      html= "";

html += '      <div class="smallBox-contenedor">'
html += '          <div class="smallBox-foto">'
html += '              <img src="img/foto.jpg">'
html += '          </div>'
html += '          <div class="smallBox-contenido" align="center">'
html += '              <div class="smallBox-textoContenedor" align="left">'
html += '                  <span class="smallBox-titulo">Al aire</span>'
html += '                  <span class="smallBox-subTitulo">La voz de Costa Rica vivo</span>'
html += '              </div>'
html += '              <div class="smallBox-pico"></div>'
html += '              <div class="smallBox-cajaColor">'
html += '                  <div class="smallBox-colorTexto">'
html += '                      <i class="fa fa-bell-o"></i> Karen Melissa 107.1fm'
html += '                  </div>'
html += '                  <div class="smallBox-colorIcon">'
html += '                      <i class="fa fa-envelope-o fa-2x"></i>'
html += '                  </div>'
html += '              </div>'
html += '              <div class="smallBox-sombra"></div>'
html += '          </div>'
html += '      </div>'


$("body").append( html);
  };
});
