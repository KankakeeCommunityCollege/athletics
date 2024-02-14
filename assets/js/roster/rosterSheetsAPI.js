//import createTableParts from './createTableParts.js';
//import createScheduleElements from './createScheduleElements.js';
import setSheetParameters from '../shared/setSheetParameters.js';
import createTableElements from './createTableElements.js';

function createColumnArray() { // Returns an array representing which columns should be visible (0-based)
  const pathIsBaseball = (window.location.pathname.search(/\/baseball\//) !== -1);
  const columns = [1, 2, 3, 4, 5, 6, 7];

  return (pathIsBaseball) ? [...columns, 8] : columns;
}

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
    const printIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>';
    // See: <https://datatables.net/>
    $('#responsiveTable').DataTable({
      responsive: true, // Activate responsive powers GO!
      paging: false, // Don't paginate. Schedule schould all be on one page
      'order': [], // Initial column ordering
      dom: 'Bfrti', // dom Option is needed to show (print) buttons - see: <https://datatables.net/reference/button/> and <https://datatables.net/reference/option/dom>
      buttons: [ // Buttons extension to add print-button
        {
          extend: 'print', // Adds a print button
          text: `Print&nbsp;${printIcon}`, // Modify print buttons text
          // autoPrint: false, // Prevent print dialog from opening - useful for refining print layout in dev
          exportOptions: {
            // Columns to display in the print view (0-based index)
            columns: createColumnArray() // Array representing columns to display (e.g. [0, 1] would show first and second columns only)
          },
          customize: function (win) { // Function to customize the print view - win = Window JS global
            const playerList = win.document.body.querySelectorAll('td:nth-child(2)'); // Get the column w/ player name
            // '#' suffix is added for hash-linking capabilities in createTableELements() and needs to get stripped
            playerList.forEach(item => item.innerHTML = item.innerHTML.replace(/#$/, '')); // Remove the '#' suffix
          }
        }
      ]
    });
  }).then(() => {
    document.querySelector('input[type="search"].form-control').setAttribute('placeholder', 'Search roster...');
    import('../src/lazyload').then(({ default: lzFunction }) => lzFunction());
  }).then(() => {
    // ClipboardJS - See: <https://clipboardjs.com/>
    import('clipboard/dist/clipboard').then(({ default: ClipboardJS }) => {
      const buttons = document.querySelectorAll('button[data-clipboard-text]');
      const message = document.getElementById('clipText');
      const clipboard = new ClipboardJS(buttons);

      clipboard.on('success', (e) => {
        message.innerHTML = `<span class="text-white">Copied: ${e.text}</span>`;
        message.classList.add('roster__cliptext--show');
        window.setTimeout(() => {
          message.classList.remove('roster__cliptext--show');
        }, 2000);
      })
    })
  }).then(() => {
    import('./openModal').then(({ default: openModal }) => openModal());
  }, err => console.error(`Execute error: ${err.message}`, err))
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
