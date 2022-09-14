import '../../scss/main.scss';

window.addEventListener('load', () => {
  // 1. Alerts go first
  if (!window.sessionStorage.getItem('Alert-Content')) {
    import('./campusAlertsSheetsAPI').then(({ default: start }) => gapi.load('client', start));
  } else {
    import('./getCachedResponse').then(({ default: getCachedResponse }) => getCachedResponse());
  }

  // 2. These modules are used in most pages:
  if (document.getElementById('heroSlider')) import('./sliders').then(({ default: initSlickSliders }) => initSlickSliders());
  if (document.querySelector('img[data-src')) import('./lazyload').then(({ default: lzFunction }) => lzFunction());
  if (document.querySelector('.js-more-btn')) import('./moreButton').then(({ default: moreClick }) => moreClick());
  // if (document.getElementById('accordion')) import('./accordion').then(({ default: accordion }) => accordion());
  import('./footerDate').then(({ default: footerDate }) => footerDate());

  // 3. These modules are page-specific:
  if (document.getElementById('Stats')) import('../stats/statsSheetsAPI').then(({ default: start }) => gapi.load('client', start));
  if (document.getElementById('Roster')) import('../roster/rosterSheetsAPI').then(({ default: start }) => gapi.load('client', start));
  if (document.getElementById('Schedule')) import('../schedule/scheduleSheetsAPI').then(({ default: start }) => gapi.load('client', start));

  // 4. These modules only happen on the homepage
  if (document.getElementById('scheduleDiv')) import('../games/games').then(({ default: games }) => games());
  if (document.getElementById('yt_list')) import('../ytCarousel/youTubeCarousel').then(({ default: youTubeCarousel }) => youTubeCarousel());
});
