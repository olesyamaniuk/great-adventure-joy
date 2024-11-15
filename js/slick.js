$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: false,
    cssEase: 'linear',
    prevArrow: '.gallery__list-left',
    nextArrow: '.gallery__list-right',
    
  });
});











