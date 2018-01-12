$(document).ready(function(){
  $('.hero-slider').slick({
    dots: true,
    prevArrow: '<div class="custom-prev"><i class="fas fa-chevron-left fa-lg"></i></div>',
    nextArrow: '<div class="custom-next"><i class="fas fa-chevron-right fa-lg"></i></div>'
  });
  $('.destination').equalHeights();
});
