const SLICK_PARAMS = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:'<img alt="" class="a-left control-c prev slick-prev" src="../../assets/img/dbl-prev.svg">',
  nextArrow:'<img alt="" class="a-right control-c next slick-next" src="../../assets/img/dbl-next.svg">'
}

// DO NOT PLACE IN A DOCUMENT READY FUNTION - it will break
function initSlickSliders() {
  $('#heroSlider').slick(SLICK_PARAMS);
}

export default initSlickSliders;
