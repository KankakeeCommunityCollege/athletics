import createScheduleElements from './createScheduleElements.js';
import setSheetParameters from '../shared/setSheetParameters.js'; // In the `assets/js/shared/` folder -- module is used by other bundles
import slickParamsObject from './createSlickParamsObject.js';


const PARAMS = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const sheetParams = setSheetParameters();

function start() {
  // Initializes the client with the API key
  gapi.client.init(PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(sheetParams);
  }).then((response) => {
    createScheduleElements(response);
  }).then(() => {
    $('.schedule-slider').slick(slickParamsObject());
  },
  function(err) {
    console.error("Execute error", err);
  });
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
