(function () {
  var $cajaRoja = $(".cajaRoja");

  $("#btnSize").on("click", function () {
    $cajaRoja
      .animate(
        {
          width: "+=100px",
          height: "+=100px",
        },
        function () {
          console.log("animaciión terminada");
        }
      )
      .animate({
        width: "-=100px",
        height: "-=100px",
      });
  });
})();
