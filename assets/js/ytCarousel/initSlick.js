function initSlick(slickElement, baseUrl) {
  /** @see https://kenwheeler.github.io/slick/#settings for available slick slider settings */
  const slickParameters = {
    dots: false, // No indicator dots along the bottom
    infinite: false, // Do not loop when end of slides is reached
    autoplay: false, // Do not autoplay the slides
    slidesToShow: 2, // Default number of slides to show
    slidesToScroll: 1, // Number of slides to advance per click/scroll
    adaptiveHeight: false,
    // Custom prev/next arrows
    prevArrow: `<img class="a-left control-c prev slick-prev yt-list__prev" src="${baseUrl}/assets/img/blue-prev.svg" alt="previous">`,
    nextArrow: `<img class="a-right control-c next slick-next yt-list__next" src="${baseUrl}/assets/img/blue-next.svg" alt="next">`,
    responsive: [ // Adjust slider based on screen width
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      { // Show 1 slide for screens under 992px wide
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  }
  $(slickElement).slick(slickParameters);
}

export default initSlick;
