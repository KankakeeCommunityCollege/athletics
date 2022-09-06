import lzFunction from './lazyload'; // IMPORT THE LAZYLOAD MODULE!!!
import initSlick from './initSlick';  // Initializes slick-slider methods on the slider built bellow.
import watchForVideoClicks from './watchForVideoClicks';
import watchForModalClose from './watchForModalClose';

const YT_PLAYER = document.getElementById('yt_player');
const YT_LIST = document.getElementById('yt_list');
const BASE_URL = 'https://athletics.kcc.edu';

const PLAYLIST_ID = 'PLEnNvZd4X-lVSveRGpbsXLCmf7hYXX97q';
const YT_API_KEY = 'AIzaSyCDtQhcIZrqG_uw3OAJvQ5zhtLYWvInZV4';
const MAX_RESULTS = '10'; // Integer from 0 - 50 (as a string)
const URL = [
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`,
  `&playlistId=${PLAYLIST_ID}`,
  `&key=${YT_API_KEY}`,
  `&maxResults=${MAX_RESULTS}`
];

function processResponse(resp) {
  resp.items.forEach(item => {
    let [, , title, , thumbs, , , , vid] = Object.values(item.snippet);
    const html = `
      <div class="item">
        <a class="video-link" data-videoid="${vid.videoId}" data-toggle="modal" data-target="#exampleModalCenter" href="#" tabindex="-1">
          <img class="img-fluid" src="${BASE_URL}/assets/img/yt-loading.png" data-src="${thumbs.medium.url}">
        </a>
        <h3 class="video-carousel__title">${title}</h3>
      </div>`;
    //console.log(html);
    YT_LIST.insertAdjacentHTML('beforeend', html);
  });
  initSlick(YT_LIST, BASE_URL);
  lzFunction();
  watchForVideoClicks(YT_PLAYER);
  watchForModalClose(YT_PLAYER);
}

function youTubeCarousel() {
  fetch(URL.join(''))
    .then(response => response.json())
    .then(result => processResponse(result))
}

export default youTubeCarousel;
