import setSheetParameters from '../shared/setSheetParameters.js';
import setStatsParameters from './setStatsParameters.js';
import createTabHTML from './createTabHTML.js';

// Google API configuration object
const apiParams = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const sheetParams = setSheetParameters();

function start() {
  // console.log(sheetParams);
  gapi.client.init(apiParams).then(() => {
    // First we get some info about the stats workbook
    return gapi.client.sheets.spreadsheets.get(sheetParams); // Notice the absence of `...values.get('sheetParams')`
  }).then(response => {
    let statsRange = [];
    let sheetsResults = response.result.sheets; // an Array of objects -- each representing a spreadsheet in the workbook

    sheetsResults.forEach(sheet => statsRange.push(sheet.properties.title));
    //console.log(statsRange);
    let statsParams = setStatsParameters(statsRange);

    return gapi.client.sheets.spreadsheets.values.batchGet(statsParams);
  }).then( async batchResponse => {
    createTabHTML(batchResponse);
    // Import BS5 Tab component so that the tabs built into the page above actually work
    const { default: _Tab } = await import('bootstrap/js/dist/tab.js'); // Automatically detects tab HTML in page
  }, err => console.error(`Execute error: ${err.message}`, err))
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
