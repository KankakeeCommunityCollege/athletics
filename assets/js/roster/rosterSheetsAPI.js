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
    /**
     * @todo Modify the below DataTables configuration:
     *   exportOptions.columns needs a way to provide different column numbers
     *   depending on which roster page the user is on — different rosters
     *   have different data/columns.
     */
    $('#responsiveTable').DataTable({
      responsive: true, // Activate responsive powers GO!
      paging: false, // Don't paginate. Schedule schould all be on one page
      'order': [], // Initial column ordering
      dom: 'Bfrti',
      buttons: [
        // 'print'
        {
          extend: 'print', // Adds a print button
          exportOptions: {
            columns: [1, 2, 3, 4, 5, 6, 7, 8] // Columns to display in the print view (0-based index)
          },
          customize: function (win) { // Function to customize the print view - win = Window
            const playerList = win.document.body.querySelectorAll('td:nth-child(2)'); // Get the column w/ player name
            // # suffix is added for hash-linking capabilities in createTabelELements()
            playerList.forEach(item => item.innerHTML = item.innerHTML.replace(/#$/, '')); // Remove the '#' suffix
            // $(win.document.body).find('td:nth-child(2)').each(function(index){
            //   const text = $(this).text();

            //   $(this).html(text.replace(/#$/, ''));
            // });
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
