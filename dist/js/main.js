$(document).ready(function(){
  $('.hero-slider').slick({
    dots: true,
    prevArrow: '<div class="custom-prev"><i class="fas fa-chevron-left fa-lg"></i></div>',
    nextArrow: '<div class="custom-next"><i class="fas fa-chevron-right fa-lg"></i></div>'
  });
  $('.destination').equalHeights();
  // $('.overview-elem .btn').click(function() {
  //   var image = $(this).data("data-img");
  //   console.log(image);
  //   $('.change-overview').attr("src", image);
  // })
  $(".overview-elem .btn").on('click',function() {
    $(this).each(function() {
      var image = $(this).attr('data-img');
      $('.change-overview').attr("src", image);
    });
  });

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
