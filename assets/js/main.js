;(function($){
    "use strict";

    $('header .mean-menu').meanmenu({
        meanMenuContainer: '.tab-nab',
		meanScreenWidth: 991
	}); 
	
	$(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".sticky-menu").addClass("sticky");
        }
        else {
            $(".sticky-menu").removeClass("sticky");
        }
    });


    $('.owl-active-mobile').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        dots: false,
        items:2,
    });


    $('#company-logo').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            768:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

	$('#growing-company').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            768:{
                items:6
            },
            1000:{
                items:9
            }
        }
    });

    $('#career-lesson').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: false,
        dots: false,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });
    
    $('#career-video').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: false,
        dots: false,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });

    $('#career-dashboard').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
    $(".scroll-down").on("click", function(){
        $('html, body').animate({
            scrollTop: 1000,
        }, 500)
    });


    $(".popup").magnificPopup({
        type: "iframe"
    });

    if ($('.product-service-wrap').length ) {
        $(document).scroll(function(){
            if( $(window).scrollTop() < $('.product-service-wrap').offset().top ) {
                $('.product-service-wrap').removeClass('fixed-bg');
            } else if( $(window).scrollTop() >= $('.product-service-wrap').offset().top + $('.product-service-wrap').height() - 350 ) {
                $('.product-service-wrap').removeClass('fixed-bg');
                $('.product-service-wrap').addClass('stopped-train');
            }else {
                $('.product-service-wrap').addClass('fixed-bg');
                $('.product-service-wrap').removeClass('stopped-train');
            }
                
        });
    }

    if ( $('.password-visible').length ) {
        $('.password-visible').on('click', function() {
            $(this).toggleClass( 'password-hide' );

            var input = $(this).parent().find( 'input' );

            if (input.attr("type") === "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    }


    $('.tags-scroller').owlCarousel({
        loop:false,
        margin:12,
        nav:true,
        autoplay: false,
        dots: false,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:3
            },
            768:{
                items:4
            },
            1250:{
                items:6
            }
        }
    });
    

    if ( $('.selectTwo').length ) {
        $('.selectTwo').select2();
    }

})(jQuery);


