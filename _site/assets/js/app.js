// header


$(document).ready(function() {
  if ($("header").hasClass("homepageHeader")) {
    $(window).on("scroll", function() {
      if ($(window).width() < 900) {
        var fromTop = $(window).scrollTop();
        $("header").toggleClass("homepageHeader", (fromTop < 580));
        $("header").toggleClass("slideInDown", (fromTop > 580));
      }
    });
  }
});




// pomocnik

var zvire = null;
var misto = null;
var cas = null;
var pocitac = 0;
var url = "";

$(".radekPomocnik button").click(function() {
  $(this).parent().children().removeClass("active");
  $(this).addClass("active");
});

function setZvire(v) {
  zvire = v;
}

function setMisto(p) {
  misto = p;
}

function setCas(k) {
  cas = k;
}

$('.pojdmeZacitButton').click(function() {
  pocitac = 0;
  url = "";

  if (zvire != null) {
    pocitac++;
  }

  if (misto != null) {
    pocitac++;
  }

  if (cas != null) {
    pocitac++;
  }

  if (pocitac >= 3) {

    if (zvire == "pes") {
      if (misto == "vesnice") {
        if (cas == "dnes") {

          url = "p_v_pc";
        }

        if (cas == "dnu") {

          url = "p_v_pd";
        }

        if (cas == "tyden") {

          url = "p_v_ta";
        }
      }

      if (misto == "male") {
        if (cas == "dnes") {

          url = "p_mm_pc";
        }

        if (cas == "dnu") {

          url = "p_mm_pd";
        }

        if (cas == "tyden") {

          url = "p_mm_ta";
        }
      }

      if (misto == "velke") {
        if (cas == "dnes") {

          url = "p_vm_pc";
        }

        if (cas == "dnu") {

          url = "p_vm_pd";
        }

        if (cas == "tyden") {

          url = "p_vm_ta";
        }
      }
    }

    if (zvire == "kocka") {
      if (misto == "vesnice") {
        if (cas == "dnes") {

          url = "k_v_pc";
        }

        if (cas == "dnu") {

          url = "k_v_pd";
        }

        if (cas == "tyden") {

          url = "k_v_ta";
        }
      }

      if (misto == "male") {
        if (cas == "dnes") {

          url = "k_mm_pc";
        }

        if (cas == "dnu") {

          url = "k_mm_pd";
        }

        if (cas == "tyden") {

          url = "k_mm_ta";
        }
      }

      if (misto == "velke") {
        if (cas == "dnes") {

          url = "k_vm_pc";
        }

        if (cas == "dnu") {

          url = "k_vm_pd";
        }

        if (cas == "tyden") {

          url = "k_vm_ta";
        }
      }
    }


    var celyUrl = "/vysledky/"+url;

    window.location.href = celyUrl;
  }

  else {
    alert("Nejprve musíte zaškrtnout každou z možností");
  }
});


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

$('.carouselSliderCitaty').slick({
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
$('.carouselSliderCitaty').slick("slickPrev");
});

$('.fadePrava a').click(function() {
$('.carouselSlider').slick("slickNext");
$('.carouselSliderCitaty').slick("slickNext");
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



  // paragraf

  $(".zobrazitVse span").click(function() {
    if ($(this).parent().parent().hasClass("otevreno")) {
      $(this).parent().parent().removeClass("otevreno");
      $(this).text("Zobrazit vše");
    }

    else {
      $(this).parent().parent().addClass("otevreno");
      $(this).text("Zavřít");
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
