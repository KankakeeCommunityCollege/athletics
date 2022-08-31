//import createTableParts from './createTableParts.js';
//import createScheduleElements from './createScheduleElements.js';
import setSheetParameters from '../shared/setSheetParameters.js';
import createTableElements from './createTableElements.js';

function start() {
  const PARAMS = {
    'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
  };
  const sheetParams = setSheetParameters();
  //console.log(sheetParams);
  gapi.client.init(PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(sheetParams);
  }).then(response => {
    return createTableElements(response);
  }).then(() => {
    $('#responsiveTable').DataTable({
      responsive: true, // Activate responsive powers GO!
      paging: false, // Don't paginate. Schedule schould all be on one page
      'order': []//, // Initial column ordering
      //'columnDefs': [
      //  { 'visible': false, 'targets': [0,10] }
      //]
    });
  }).then(() => {
    document.querySelector('input[type="search"].form-control').setAttribute('placeholder', 'Search roster...');
  }, err => console.error(`Execute error: ${err.message}`, err))
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
