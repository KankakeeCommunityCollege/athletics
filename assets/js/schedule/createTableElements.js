const PARENT = document.getElementById('Schedule');
const monthNames = [ // Define an array of the months to convert JS # value of month into short text version
  'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
];

function createTableElement(parent) {
  const table = document.createElement('table');

  table.classList.add('display', 'table', 'table-striped', 'table-hover');
  table.setAttribute('width', '100%');
  table.id = 'responsiveTable';
  parent.innerHTML = '';
  parent.append(table);
  return table;
}

function createTableHeadingElement(table) {
  const thead = document.createElement('thead');

  table.append(thead);
  return thead;
}

function createTableBodyElement(table) {
  const tbody = document.createElement('tbody');

  table.append(tbody);
  return tbody;
}

function createHeadingCells(tr, val) {
  const th = document.createElement('th');
  const value = (val !== 'Start') ? val : 'Date'; // Start and End columns get combined so "Date" is a more accurate heading.
  
  th.innerHTML = value + ':';
  tr.append(th);
  return th;
}

function createHeadingRow(thead, data) {
  const tr = document.createElement('tr');

  thead.append(tr);
  data.forEach(cell => createHeadingCells(tr, cell));
  return tr;
}

function createCells(tr, val, isThirdCell, location) {
  const td = document.createElement('td');
  const className = (location.search('Home') !== -1) ? 'tables--red' : 'tables--blue';

  if (isThirdCell) td.classList.add(className);

  td.innerHTML = val;
  tr.append(td);
  return td;
}

let [win, loss, tie] = [0, 0, 0];

function addRecordCountToData(data) {
  let status = data[8].trim(); // trim() to ensure consistent data
  const statusIsPending = (status === '' || status.search(/^([Cc]ancelled|[Pp]ostponed|C)$/) !== -1);
  // Double-header games have the status of both games in a single cell - separated by a coma or semi-colon
  const statusArray = status.split(/,(?:\s+)?|;(?:\s+)?/);

  if (statusArray.length > 1) {
    // Tally double-header records here
    statusArray.forEach(score => {
      if (score === 'W') win += 1;
      if (score === 'L') loss += 1;
      if (score === 'T') tie += 1;
    });
  } else {
    // Tally normal game records here
    if (status === 'W') win += 1;
    if (status === 'L') loss += 1;
    if (status === 'T') tie += 1;
  }

  let tieCount = (tie === 0) ? '' : ` - ${tie}`;
  let record = (statusIsPending) ? '' : `${win} - ${loss}${tieCount}`;

  data[11] = record; // Add the calculated record to the end of each row
  return data;
}

function createBodyRow(tbody, data) {
  const tr = document.createElement('tr');
  const location = data[7];

  data = addRecordCountToData(data);
  tbody.append(tr);
  data.forEach((cell, i) => createCells(tr, cell, i === 2, location))
  return tr;
}

function formatPrintDate(start, end) {
  return (end === '' || end === ' ') ? start : `${start} - ${end}`;
}

function formatISODate(dateStr) {
  const dateArr = dateStr
    .split('/')
    .map(num => num < 10 ? `0${num}` : num);
  const [mm, dd, yyyy] = dateArr;

  return `${yyyy}-${mm}-${dd}`;
}

function formatDate(date) {
  let [month, day] = date.split(/\//);
  const formattedDate = `${monthNames[month - 1]}&nbsp;${day}`;

  return formattedDate;
}

function createTableBodyRows(tbody, data) {
  data.forEach(row => {
    let [start, end, ...theRest] = row;
    const startDate = start !== '' ? formatDate(start) : ' ';
    const endDate = end !== '' ? formatDate(end) : '';
    const formattedRow = [
      formatISODate(start),
      formatPrintDate(start, end),
      `${startDate}${endDate === '' ? '' : ' - ' + endDate}`,
      end,
      ...theRest
    ];

    createBodyRow(tbody, formattedRow);
  });
}

function createTableElements(response) {
  const table = createTableElement(PARENT);
  const thead = createTableHeadingElement(table);
  const tbody = createTableBodyElement(table);

  const sheetData = response.result.values;
  const headerData = sheetData[0]; // This is the first row in the spreadsheet data
  const tableData = sheetData.slice(1, sheetData.length); // is an array of arrays

  const recordHeader = 'Record <span class="typography__muted-small-caps">(W - L - T)</span>'; // Add the final "Record" column which is calculated from Wins/Losses/Ties
  const headerRow = ['iso_date', 'Date', ...headerData, recordHeader];

  createHeadingRow(thead, headerRow);
  createTableBodyRows(tbody, tableData);
}

export default createTableElements;
