$('.arrow-toggle').on('click', function () {
  $('.arrow-toggle').toggleClass('active');
  $('.stream__right').toggleClass('active');
  $('.arrow.arrow_left ').toggleClass('active');
});
$('.stream__left-footer-scrollable').slick({
  speed: 9000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  infinite: true
});
screen.orientation.lock('landscape');
