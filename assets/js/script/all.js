import '../../scss/main.scss';
import initSlickSliders from './sliders.js';
import moreClick from './moreButton.js';
import accordion from './accordion.js';
import setFooterDate from './footerDate.js';
import start from './campusAlertsSheetsAPI.js';
import getCachedResponse from './getCachedResponse.js';

document.addEventListener('DOMContentLoaded', function() {
  initSlickSliders();
  moreClick();
  accordion();
  setFooterDate();

  ! window.sessionStorage.getItem('Alert-Content') ? // Checks if our cached alert is already in sessionStorage
    gapi.load('client', start) // If not, build the alert from a new Google API response
  : getCachedResponse(); // Otherwise, build the alert from our cached response
});
