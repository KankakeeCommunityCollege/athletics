/**
 * Fetch a YouTube playlist and build it into the page as a slick slider
 * carousel that plays the videos in a modal when a slide is clicked.
 * (modal window is already built into page but modal buttons are
 * injected using the JS below.)
 */

// Bootstrap 5 modal component must be imported to enable modal
//  functionality since the modal buttons are not in the page
//  when it loads:
import _Modal from 'bootstrap/js/dist/modal';

const ytPlayer = document.getElementById('yt_player');
const ytList = document.getElementById('yt_list');
const baseUrl = 'https://athletics.kcc.edu';
/** @see https://developers.google.com/youtube/v3/docs/playlistItems for documentation on using "playlistItems" */
const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
/** @see https://developers.google.com/youtube/v3/docs/playlistItems/list#parameters for parameters */
const playlistItemsParams = {
  part: 'snippet',
  playlistId: 'UUsWah4rJ6mYqMYcIDw4l6Zg', // This playlistId corresponds to the KCC Athletics uploads
  key: 'AIzaSyCDtQhcIZrqG_uw3OAJvQ5zhtLYWvInZV4', // API Key
  maxResults: '20' // Integer from 0 - 50 (string)
}
// Add the parameters to the API URL
url.search = new URLSearchParams(playlistItemsParams);

async function fetchJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error fetching resource: ${response.status}`);
  }
  return await response.json();
}

function createSlideHTML(item) {
  let [, , title, desc, thumbs, , , , vid,] = Object.values(item.snippet);

  return `
<div class="yt-list__item">
  <button class="yt-list__a jsYtBtn btn btn-link d-flex mx-auto" data-videoid="${vid.videoId}" data-video-title="${title}" data-bs-toggle="modal" data-bs-target="#videoModal" tabindex="-1">
    <img class="img-fluid" src="${baseUrl}/assets/img/yt-loading.png" data-src="${thumbs.medium.url}" alt="${desc.replace('\n', '')}">
  </button>
  <h3 class="yt-list__title">${title}</h3>
</div>`;
}

function processResponse(resp) {
  return new Promise(resolve => {
    const html = [...resp.items]
      .map(createSlideHTML)
      .join('')

    ytList.innerHTML = html;
    resolve();
  });
}

function youTubeCarousel() {
  // YouTube Data API may be used (1) via gapi.js or (2) using a GET HTTP request
  fetchJSON(url) // Uses YouTube Data API to fetch the videos held in our playlist
    .then(result => processResponse(result)) // Build slider HTML & inject into page
    .then(() => {
      import('./initSlick').then(({ default: initSlick }) => initSlick(ytList, baseUrl)); // Initialize the slick carousel
      import('../src/lazyload').then(({ default: lzFunction }) => lzFunction()); // Lazy loads the video preview images/thumbs.
      import('./watchForVideoClicks').then(({ default: watchForVideoClicks }) => watchForVideoClicks(ytPlayer)); // Play the video in a modal when its clicked/
      import('./watchForModalClose').then(({ default: watchForModalClose }) => watchForModalClose(ytPlayer)); // Stop the video when the modal is closed.
    }).catch(err => console.error(err));
}

export default youTubeCarousel;
