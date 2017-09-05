$(document).ready(function() {

    var isAnimated = false;
    $(".hamburger a").on("click", function(e) {
      e.preventDefault();
      if(isAnimated === false) {
        isAnimated = true;
        if($(this).parents('.top-menu__wrap').children('.menu').hasClass("menu-active")) {
          $(this).parents('.top-menu__wrap').children('.menu').slideUp(300);
          $(this).parents('.top-menu__wrap').children('.menu').removeClass('menu-active');
          setTimeout(function(){
            isAnimated = false;
          }, 300);
        } else {
          isAnimated = true;
          $(this).parents('.top-menu__wrap').children('.menu').addClass('menu-active');
          $(this).parents('.top-menu__wrap').children('.menu').slideDown(300);
          setTimeout(function(){
            isAnimated = false;
          }, 300);

        }
        
      }

    });

});

$(window).resize(function(){

  if(window.innerWidth >= 980) {
    $('.top-menu .menu').removeAttr('style');
    $('.top-menu .menu').removeClass('menu-active');
  }

});