//wow

new WOW().init();


// slider

$('.carouselSlider').slick({
  infinite: true,
  variableWidth: true,
  centerPadding: '70px',
  dots: true,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  arrows: false,
});

$('.fadeLeva a').click(function() {
$('.carouselSlider').slick("slickPrev");
});

$('.fadePrava a').click(function() {
$('.carouselSlider').slick("slickNext");
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


  // faq


  $(".otazka h3").click(function() {
    if ($(this).parent().hasClass("zavreno")) {
      $(this).parent().removeClass("zavreno");
    }

    else {
      $(this).parent().addClass("zavreno");
    }
  });


  // mobilnio Menu

  $(".mobilniMenu").click(function() {
    $(".mobilniMenuNabidka").removeClass("fadeInDown animated").removeClass("fadeOutUp animated").addClass("animated" + ' fadeInDown');
    $(".mobilniMenuNabidka").toggle();
  });

  $(".mobilniMenuZavrit").click(function() {
    $(".mobilniMenuNabidka").removeClass("fadeOutUp animated").removeClass("fadeInDown animated").addClass("animated" + ' fadeOutUp');

    setTimeout(function() {
      $(".mobilniMenuNabidka").toggle();
    }, 1000);
  });

  $(".mobilniMenuNabidka ul li a").click(function() {
    $(".mobilniMenuNabidka").removeClass("fadeOutUp animated").removeClass("fadeInDown animated").addClass("animated" + ' fadeOutUp');

    setTimeout(function() {
      $(".mobilniMenuNabidka").toggle();
    }, 1000);
  });
