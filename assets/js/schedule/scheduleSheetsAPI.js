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
    const printIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>';

    $('#responsiveTable').DataTable({
      responsive: true, // Activate responsive powers GO!
      paging: false, // Don't paginate. Schedule should all be on one page
      'order': [], // Do not order = 'order': []
      'columnDefs': [
        { 'visible': false, 'targets': [0, 1, 3, 10] }, // Hide the 1st, 2nd, 4th, & 11th columns
        { 'orderData': 0, 'targets': 2 } // Make the 3rd column use the 1st column's data for sorting purposes
      ],
      dom: 'Bfrti', // dom Option is needed to show (print) buttons - see: <https://datatables.net/reference/button/> and <https://datatables.net/reference/option/dom>
      buttons: [ // Buttons extension to add print-button
        {
          extend: 'print', // Adds a print button
          text: `Print&nbsp;${printIcon}`, // Modify print buttons text
          // autoPrint: false, // Prevent print dialog from opening - useful for refining print layout in dev
          exportOptions: {
            // Columns to display in the print view (0-based index)
            columns: [1, 4, 5, 6, 7]
          },
          customize: function (win) { // Function to customize the print view - win = Window JS global
            const table = win.document.body.querySelector('table');
            const p = `<p style="text-align: center;">
  <em>Game schedules are subject to change, check https://athletics.kcc.edu for postponements and cancellations.</em>
</p>`;

            table.insertAdjacentHTML('afterend', p);
          }
        }
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
