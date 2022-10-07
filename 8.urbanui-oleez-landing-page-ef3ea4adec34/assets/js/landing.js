$myCarousel = $('.carousel');

function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';
  
    elems.each(function () {
      var $this = $(this),
          $animationType = $this.data('animation');
  
      // Add animate.css classes to
      // the elements to be animated
      // Remove animate.css classes
      // once the animation event has ended
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  // Select the elements to be animated
  // in the first slide on page load
  var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
    .find('[data-animation ^= "animated"]');
  
  // Apply the animation using the doAnimations()function
  doAnimations($firstAnimatingElems);
  
  // Attach the doAnimations() function to the
  // carousel's slide.bs.carousel event
  $myCarousel.on('slide.bs.carousel', function (e) {
    // Select the elements to be animated inside the active slide
    var $animatingElems = $(e.relatedTarget)
      .find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });

  function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';
  
    elems.each(function () {
      var $this = $(this),
          $animationType = $this.data('animation');
  
      // Add animate.css classes to
      // the elements to be animated
      // Remove animate.css classes
      // once the animation event has ended
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  // Select the elements to be animated
  // in the first slide on page load
  var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
    .find('[data-animation ^= "animated"]');
  
  // Apply the animation using the doAnimations()function
  doAnimations($firstAnimatingElems);
  
  // Attach the doAnimations() function to the
  // carousel's slide.bs.carousel event
  $myCarousel.on('slide.bs.carousel', function (e) {
    // Select the elements to be animated inside the active slide
    var $animatingElems = $(e.relatedTarget)
      .find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });

  if ($('.landing-projects-carousel')) {
    $('.landing-projects-carousel').slick({
      slidesToShow: 1.5,
      infinite: false,
      prevArrow: '<button type="button" class="slick-nav-btn"><img src="assets/images/Arrow_L@2x.svg"></button>',
      nextArrow: '<button type="button" class="slick-nav-btn"><img src="assets/images/Arrow_R@2x.svg"></button>',
      appendArrows: $('.slick-navbtn-wrapper'),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }

  if ($('.landing-testimonial-carousel')) {
    $('.landing-testimonial-carousel').slick({
      slidesToShow: 2,
      infinite: false,
      prevArrow: '<button type="button" class="slick-nav-btn"><img src="assets/images/Arrow_L@2x.svg"></button>',
      nextArrow: '<button type="button" class="slick-nav-btn"><img src="assets/images/Arrow_R@2x.svg"></button>',
      appendArrows: $('.testimonial-carousel-navbtn-wrapper'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }