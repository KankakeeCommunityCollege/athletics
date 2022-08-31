import '../../scss/main.scss';

window.addEventListener('load', () => {

  if (!window.sessionStorage.getItem('Alert-Content')) {
    import('./campusAlertsSheetsAPI').then(({ default: start }) => gapi.load('client', start));
  } else {
    import('./getCachedResponse').then(({ default: getCachedResponse }) => getCachedResponse());
  }

  if (document.querySelector('.baseballSlider')) import('./sliders').then(({ default: initSlickSliders }) => initSlickSliders());
  if (document.querySelector('img[data-src')) import('./lazyload').then(({ default: lzFunction }) => lzFunction());
  if (document.querySelector('.js-more-btn')) import('./moreButton').then(({ default: moreClick }) => moreClick());
  if (document.getElementById('accordion')) import('./accordion').then(({ default: accordion }) => accordion());

  if (document.getElementById('Stats')) import('../stats/statsSheetsAPI').then(({ default: start }) => gapi.load('client', start));
  if (document.getElementById('Roster')) import('../roster/rosterSheetsAPI').then(({ default: start }) => gapi.load('client', start));

  import('./footerDate').then(({ default: setFooterDate }) => setFooterDate());
});
