$(document).ready(function () {

    var owlUp = $(".slider__up"); //блок с верхней каруселью
    var owlDown = $(".slider__down"); //блок с нижней каруселью

    //Инициализируем карусель в верхнем слайдере
    owlUp.owlCarousel({
        // loop: true,
        center: true,
        items: 1,
        videoWidth: 1920,
        videoHeight: 668,
        autoplay: false,
        navText: ["<img class=\"arrow__left\" src=\"img/arrows.svg\">","<img class=\"arrow__right\" src=\"img/arrows.svg\">"]
    });

    //Добавляем к кнопкам в блоке с верхней каруселью обработчики
    $(".up__right").click(function() {
        owlUp.trigger('next.owl.carousel');
    });
    $(".up__left").click(function() {
        owlUp.trigger('prev.owl.carousel', [300]);
    });

    //Инициализируем карусель в нижнем слайдере
    owlDown.owlCarousel({
        // loop: true,
        center: true,
        video: true,
        items: 1,
        videoWidth: 1920,
        videoHeight: 500,
        autoplay: false,
        navText: ["<img class=\"arrow__left\" src=\"img/arrows.svg\">","<img class=\"arrow__right\" src=\"img/arrows.svg\">"]
    });

    //добавляем к кнопкам в блоке с нижней каруселью обработчики
    $(".down__right").click(function() {
        owlDown.trigger('next.owl.carousel');
    });
    $(".down__left").click(function() {
        owlDown.trigger('prev.owl.carousel', [300]);
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