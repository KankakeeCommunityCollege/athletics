//import createTableParts from './createTableParts.js';
//import createScheduleElements from './createScheduleElements.js';
import setSheetParameters from '../shared/setSheetParameters.js';
import createTableElements from './createTableElements.js';

const PARAMS = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const sheetParams = setSheetParameters();

function start() {
  //console.log(sheetParams);
  gapi.client.init(PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(sheetParams);
  }).then(response => {
    createTableElements(response);
  }).then(() => {
    $('#responsiveTable').DataTable({
      responsive: true, // Activate responsive powers GO!
      paging: false, // Don't paginate. Schedule should all be on one page
      'order': [], // Do not order = 'order': []
      'columnDefs': [
        { 'visible': false, 'targets': [0, 2, 9] }, // Hide the 1st, 3rd, & 10th columns
        { 'orderData': 0, 'targets': 1 } // Make the 2nd column use the 1st columns data for sorting purposes
      ]
    });
  }).then(() => {
    document.querySelector('input[type="search"].form-control').setAttribute('placeholder', 'Search schedule...');
  }, err => console.error(`Execute error ${err.message}`, err));
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
