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

    $("#pills-offline-tab").click(function () {
        $("#pills-offline").css("visibility", "visible");
    });
    $("#pills-online-tab").click(function () {
        $("#pills-online").css("visibility", "visible");
    });
});

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

var swiper = new Swiper('.section-one .box-list-product .swiper-container', {
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

var swiper = new Swiper('.section-candy .box-list-candy .swiper-container', {
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

var swiper = new Swiper('.section-store .store-list .swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

var galleryTop = new Swiper('#pills-online .gallery-top', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 4,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    // thumbs: {
    //     swiper: galleryThumbs,
    // },
});
var galleryThumbs = new Swiper('#pills-online .gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    freeMode: true,
    loop: true,
    loopedSlides: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesVisibility: false,
    watchSlidesProgress: false
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

var galleryTop = new Swiper('#pills-offline .gallery-top', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 4,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    // thumbs: {
    //     swiper: galleryThumbs,
    // },
});
var galleryThumbs = new Swiper('#pills-offline .gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    freeMode: true,
    loop: true,
    loopedSlides: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesVisibility: false,
    watchSlidesProgress: false
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;


// var galleryThumbs = new Swiper('.gallery-thumbs', {
//     spaceBetween: 10,
//     slidesPerView: 3,
//     centeredSlides: true,
//     loop: true,
//     freeMode: true,
//     loopedSlides: 5,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
//     spaceBetween: 10,
//     slidesPerView: 1,
//     loop: true,
//     centeredSlides: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//         swiper: galleryThumbs,
//     },
// });