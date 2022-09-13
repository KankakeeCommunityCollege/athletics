const YT_PLAYER = document.getElementById('yt_player');
const YT_LIST = document.getElementById('yt_list');
const BASE_URL = 'https://athletics.kcc.edu';

const PLAYLIST_ID = 'PLEnNvZd4X-lVSveRGpbsXLCmf7hYXX97q';
const YT_API_KEY = 'AIzaSyCDtQhcIZrqG_uw3OAJvQ5zhtLYWvInZV4';
const MAX_RESULTS = '10'; // Integer from 0 - 50 (string)
const URL = [ // See <https://developers.google.com/youtube/v3/docs/playlistItems/list#parameters> for available parameters
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`,
  `&playlistId=${PLAYLIST_ID}`,
  `&key=${YT_API_KEY}`,
  `&maxResults=${MAX_RESULTS}`
];

function createSlideHTML(item) {
  
  let [, , title, desc, thumbs, , , , vid,] = Object.values(item.snippet);

  return `
<div class="item">
  <a class="video-link" data-videoid="${vid.videoId}" data-toggle="modal" data-target="#exampleModalCenter" href="#" tabindex="-1">
    <img class="img-fluid" src="${BASE_URL}/assets/img/yt-loading.png" data-src="${thumbs.medium.url}" alt="${desc.replace('\n', '')}">
  </a>
  <h3 class="video-carousel__title">${title}</h3>
</div>`;
}

function processResponse(resp) {
  return new Promise(resolve => {
    resp.items.forEach((item, i, arr) => {
      const html = createSlideHTML(item);
  
      YT_LIST.insertAdjacentHTML('beforeend', html);
      if (i == (arr.length - 1)) return resolve();
    });
  });
}

function youTubeCarousel() {
  // YouTube Data API may be used (1) via gapi.js or (2) using a GET HTTP request
  fetch(URL.join('')) // Uses YouTube Data API to fetch the videos held in our playlist
    .then(response => response.json())
    .then(result => processResponse(result)) // Build slider HTML & inject into page
    .then(() => {
      import('./initSlick').then(({ default: initSlick }) => initSlick(YT_LIST, BASE_URL)); // Initialize the slick carousel
      import('../src/lazyload').then(({ default: lzFunction }) => lzFunction()); // Lazy loads the video preview images/thumbs.
      import('./watchForVideoClicks').then(({ default: watchForVideoClicks }) => watchForVideoClicks(YT_PLAYER)); // Play the video in a modal when its clicked/
      import('./watchForModalClose').then(({ default: watchForModalClose }) => watchForModalClose(YT_PLAYER)); // Stop the video when the modal is closed.
    })
}

export default youTubeCarousel;
