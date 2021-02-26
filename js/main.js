$(document).ready(function($){
    "use strict";

        //* Navbar Fixed
        var nav_offset_top = $('header').height() + 50;
        
        function navbarFixed() {
            if ($('.w3_navigation').length) {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    if (scroll >= nav_offset_top) {
                        $('.w3_navigation').addClass('navbar_fixed');
                    } else {
                        $('.w3_navigation').removeClass('navbar_fixed');
                    }
                });
            }
        }
        navbarFixed();

        // Responsiveslides
		$("#slider3").responsiveSlides({
            auto: false,
            pager:true,
            nav:false,
            speed: 500,
            namespace: "callbacks",
            before: function () {
                $('.events').append("<li>before event fired.</li>");
            },
            after: function () {
                $('.events').append("<li>after event fired.</li>");
            }
        });

        // Cm-overlay
        $('.cm-overlay').cmOverlay();

    // Skills piechart
    $('#demo-pie-1').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'round',
        lineWidth: 5,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-2').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'butt',
        lineWidth: 5,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-3').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'square',
        lineWidth: 5,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    
    $('#demo-pie-4').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'square',
        lineWidth: 5,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });


      // Portfolio masonary active
      var grid = $('.portfolio-masonary-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
      })

        // Portfolio filter menu active
        $('.portfolio-filter-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({ filter: filterValue });
        });

        //Filter menu active class
        $('.portfolio-filter-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // Testominial 
        $('.testimonial-item-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.testimonial-nav-active'
          });
          $('.testimonial-nav-active').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-item-active',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding:0,
            autoplay:false,
            prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            responsive: [
                {
                  breakpoint: 400,
                  settings: {
                    centerMode: false,
                    slidesToShow: 1
                  }
                },
                // {
                //   breakpoint: 370,
                //   settings: {
                //     centerMode: false,
                //     slidesToShow: 1
                //   }
                // }
              ]
          });

        // Counter up active
        $('.counter-animated').counterUp({
            delay: 10,
            time: 1300
        });

    // Smoth-scrolling
    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });

    // Scroll to top
    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear' 
    };			
    $().UItoTop({ easingType: 'easeOutQuart' });

    // Preloader 
    $(window).load(function() { // makes sure the whole site is loaded
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(400).fadeOut("medium"); // will fade out the white DIV that covers the website.
    })

    
}(jQuery));