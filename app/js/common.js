$(document).ready(function () {

    $(".slider__up").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        videoWidth: 1920,
        videoHeight: 668,
        // video: true,
        autoplay: false,
        nav: true,
        navText: ["<img class=\"arrow__left\" src=\"img/arrows.svg\">","<img class=\"arrow__right\" src=\"img/arrows.svg\">"]
    });

    $(".slider__down").owlCarousel({
        loop: true,
        center: true,
        video: true,
        items: 1,
        videoWidth: 1920,
        videoHeight: 500,
        autoplay: false,
        nav: true,
        navText: ["<img class=\"arrow__left\" src=\"img/arrows.svg\">","<img class=\"arrow__right\" src=\"img/arrows.svg\">"]
    });

    $(".mfp-gallery").magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    $(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});