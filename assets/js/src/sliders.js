/** 
 * @see https://kenwheeler.github.io/slick/#settings for available slick slider settings
 * */
const slickParams = {
  dots: true, // Show indicator dots along bottom
  slidesToShow: 1, // Show 1 slide at a time
  slidesToScroll: 1, // Scroll 1 slide at a time
  autoplay: true, // Autoplay the slider once it loads
  autoplaySpeed: 3000, // Allow 3,000 ms slide times for autoplay
  // Custom nex/prev buttons
  prevArrow:'<img alt="" class="a-left control-c prev slick-prev" src="../../assets/img/dbl-prev.svg">',
  nextArrow:'<img alt="" class="a-right control-c next slick-next" src="../../assets/img/dbl-next.svg">'
}

function initSlickSliders() {
  $('#heroSlider').slick(slickParams);
}

export default initSlickSliders;
