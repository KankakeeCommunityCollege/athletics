
window.addEventListener('load', () => {
  import('./statsSheetsAPI').then(({ default: start }) => {
    gapi.load('client', start);
  }).catch(err => console.error(`Error loading module: ${err}`, err))
});
