$(document).ready(function () {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    var swiper = new Swiper('.banner-jumbo .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('.section-two .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('.section-three .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('.section-one .three-about .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('.section-one .box-list-office .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
    });

    var swiper = new Swiper('.section-office .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});