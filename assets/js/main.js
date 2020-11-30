$(function () {
  var lista = $(".right ul li");
  console.log(lista);

  lista.click(function() {
    var menuTendina = $(".right ul li").children('.menu_tendina').get();
    console.log(menuTendina);
    var lista = $(".right ul li").siblings().get();
    console.log(lista);
    var listaIndex = $(this).index();
    console.log(listaIndex);
    if ($(this).children(".menu_tendina").hasClass('active')) {
      $(menuTendina).removeClass('active');
    } else {
      $(menuTendina).removeClass('active');
      $(menuTendina[listaIndex]).addClass('active');
    }
  });

  lista.mouseenter(function() {
    var menuTendina = $(".right ul li").children('.menu_tendina').get();
    console.log(menuTendina);
    var lista = $(".right ul li").siblings().get();
    console.log(lista);
    var listaIndex = $(this).index();
    console.log(listaIndex);
    $(menuTendina).removeClass('active');
    $(menuTendina[listaIndex]).addClass('active');
  });

  /*
  $(document).click(function() {
    var menuTendina = $(".right ul li").children('.menu_tendina');
    $(menuTendina).removeClass('active');
  });
  */

});
