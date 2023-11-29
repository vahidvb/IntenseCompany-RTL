$(document).ready(function () {
    $('[data-bs-toggle=tooltip]').tooltip();
    wow = new WOW().init();
    $('.hamburger').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(0)');
        $('.hover-collapse').css('visibility', 'visible');
    })
    $('.hamburger').click(function () {
        $('.hamburger').addClass('h-active');
        $('.navbar-collapse').css('transform', 'translateX(0)');
        $('.hover-collapse').css('visibility', 'visible');
        $('.hamburger').css('z-index', '2');
    })
    $('.hover-collapse').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(100%)');
        $(this).css('visibility', 'hidden');
        $('.hamburger').removeClass('h-active');
        $('.hamburger').css('z-index', '3');
    })
    $('.page-preloader-cover').delay(100).fadeOut('slow');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
        if ($(window).scrollTop() > 250) {
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    $('.search').click(function () {
        $('.search-box').css('width', '100%');
        $('.search-box').css('opacity', '1');
        $('.search-box input').focus();
        $('.search').tooltip('hide');
        $('.search-box .close').click(function () {
            $('.search-box').css('width', '0');
            $('.search-box').css('opacity', '0');
        })
    })
    $('.box-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
    $('.img-slider').owlCarousel({
        margin: 80,
        rtl: true,
        loop: true,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 0,
        autoplaySpeed: 4500,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 7
            }
        }
    });
    $('.client-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.counter-one').waypoint(function () {
        $(".number-counter").each(function () {
            const options = {
                useEasing: true,
                useGrouping: false,
                separator: ',',
                decimal: '.',
            };
            const counter = new CountUp(this, 0, $(this).html(), 0, 9.5, options);
            if (!counter.error) {
                counter.start();
            } else {
                console.error(counter.error);
            }
        });
        this.destroy();
    }
        , {
            offset: '100%'
        });
    $('.counter-two').waypoint(function () {
        $(".number-counter").each(function () {
            const options = {
                useEasing: true,
                useGrouping: false,
                separator: ',',
                decimal: '.',
            };
            const counter = new CountUp(this, 0, $(this).html(), 0, 9.5, options);
            if (!counter.error) {
                counter.start();
            } else {
                console.error(counter.error);
            }
        });
        this.destroy();
    }
        , {
            offset: '100%'
        });
})