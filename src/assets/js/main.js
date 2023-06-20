$(function() {

    $('.navbar-toggler').click(function() {
        $('.navbar-collapse.mobile').addClass('active');
        $('.overlay-mobile').addClass('show');
    });

    $('.overlay-mobile').click(function() {
        $('.navbar-collapse.mobile').removeClass('active');
        $('.overlay-mobile').removeClass('show');
    });



    $('.main-menu li').click(function(e) {
        e.preventDefault();
        $('.main-menu li').removeClass('active');
        $(this).addClass('active');
    });

    $('.dropdown').click(function() {
        $('#mega-menu').fadeToggle(600);
        $('.overlay-mobile').toggleClass('active');
    });

    $('.overlay-mobile').click(function() {
        $('.overlay-mobile').removeClass('active');
        $('#mega-menu').fadeOut();
    });

    $('.navbar-toggler').click(function() {
        $('.navbar.mobile').addClass('active');
        $('.overlay-mobile').addClass('show');
    });

    $('.overlay-mobile').click(function() {
        $('.navbar.mobile').removeClass('active');
        $('.overlay-mobile').removeClass('show');
    });

    $('.paginations a.item').click(function() {

        $('.paginations a.item').removeClass('curent');
        $(this).addClass('curent');

    });

    $('.star.selected a').click(function(e) {
        e.preventDefault();

        $('.star.selected a').removeClass('active');
        $(this).addClass('active');

    });


    //menu mobile
    $('.btn-dropmenu').click(function(event) {
        event.preventDefault();
        $(this).parent().find('ul:first').slideToggle();
        $(this).find('i').toggleClass('rotate');
    });


    $('.menu-item-mega .btn-dropmenu').click(function(event) {
        event.preventDefault();

        var parent = $(this).parent();
        parent.parent().find('ul:first').slideToggle();

    });

    $('.view-more').click(function(event) {
        $('.project-content-info').addClass('show');
    });

    //why choose us
    var swiper = new Swiper(".icon", {

        slidesPerView: 5,
        spaceBetween: 5,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: false,

        navigation: {
            nextEl: ".swiper-button-next.icon",
            prevEl: ".swiper-button-prev.icon",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
    });


    // khách hàng
    var swiper = new Swiper(".swiper-container.partner", {

        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: false,
        // pagination: {
        //     el: ".swiper-pagination.product",
        //     clickable: true,
        // },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.partner-next",
            prevEl: ".swiper-button-prev.partner-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });


    //Partner
    var swiper = new Swiper(".partner-logo", {

        slidesPerView: 6,
        spaceBetween: 30,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.partner-logo",
            prevEl: ".swiper-button-prev.partner-logo",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });


    $('.cat-item').click(function() {
        $('.cat-item').removeClass('active');
        $(this).addClass('active');
        $(this).find('.cat-child').slideToggle();
        $('.cat-item').not('.active').find('.cat-child').slideUp();
    });
});