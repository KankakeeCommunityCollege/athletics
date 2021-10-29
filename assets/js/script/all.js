import '../../scss/main.scss';
// import initSlickSliders from './sliders.js';
// import moreClick from './moreButton.js';
// import accordion from './accordion.js';
// import setFooterDate from './footerDate.js';
import start from './campusAlertsSheetsAPI.js';
import getCachedResponse from './getCachedResponse.js';

function loadModule(...args) {
  const module = args[0];
  let defaultFn;

  args.length > 1 ? defaultFn = args[1] : args[0];
  import(`./${module}`).then(({ default: defaultFn }) => defaultFn());
}

document.addEventListener('DOMContentLoaded', function () {
  Promise.resolve()
    .then(() => document.querySelector('.baseballSlider') ? loadModule('sliders', 'initSlickSliders') : null )
    .then(() => document.querySelector('img[data-src]') ? loadModule('lazyload', 'lzFunction') : null )
    .then(() => document.querySelector('.js-more-btn') ? loadModule('moreButton', 'moreClick') : null )
    .then(() => document.getElementById('accordion') ? loadModule('accordion') : null )
    .then(() => loadModule('footerDate', 'setFooterDate'))

  ! window.sessionStorage.getItem('Alert-Content') ? // Checks if our cached alert is already in sessionStorage
    gapi.load('client', start) // If not, build the alert from a new Google API response
  : getCachedResponse(); // Otherwise, build the alert from our cached response
});
