(function () {
  var $cajaRoja = $(".cajaRoja");

  function mover(dir) {
    $cajaRoja.clearQueue();

    switch (dir) {
      case "arriba":
        $cajaRoja.animate(
          {
            top: "-=50px",
          },
          200
        );
        break;
      case "abajo":
        $cajaRoja.animate(
          {
            top: "+=50px",
          },
          300
        );
        break;
      case "izquierda":
        $cajaRoja.animate(
          {
            right: "+=50px",
          },
          400
        );
        break;
      case "derecha":
        $cajaRoja.animate(
          {
            right: "-=50px",
          },
          500
        );
        break;
      case "reset":
        $cajaRoja.animate(
          {
            top: 0,
            left: 0,
          },
          1000
        );
        break;
    }
  }
  $("button").on("click", function () {
    var dir = $(this).data("dir");
    mover(dir);
  });

  $(document).on("keypress", function (e) {
    var keyCode = e.keyCode;

    switch (keyCode) {
      case 119:
        mover("arriba");
        break;
      case 115:
        mover("abajo");
        break;
      case 100:
        mover("derecha");
        break;
      case 97:
        mover("izquierda");
        break;
      case 32:
        mover("reset");
        break;
    }
  });
})();
