import createScheduleElements from './createScheduleElements.js';
import setSheetParameters from '../shared/setSheetParameters.js'; // In the `assets/js/shared/` folder -- module is used by other bundles
import slickParamsObject from './createSlickParamsObject.js';

const PARAMS = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const sheetParams = setSheetParameters();
let secondAttempt = false;

function start() {
  gapi.client.init(PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(sheetParams);
  }).then((response) => {
    // If `response.result.values[1] == '#N/A' is true, the response was returned before the current games were fully calculated
    let responseIsBad = (response.result.values[1] == '#N/A');
    // Sheets has to run IMPORTRANGE() and SORT() functions that take time to complete...
    if (responseIsBad) {  // Sometimes the response is sent back prior to completion of IMPORTRANGE() and SORT()
      console.error(`Bad response from Google API: \n${response}`, response);
      if (!secondAttempt) {
        secondAttempt = true;
        return gapi.load('client', start); // If the response is bad, try once more (the second attempt works)
      }
    }
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
