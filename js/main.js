$(document).ready(() => {
    $('.products__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
    $('.reviews-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
})