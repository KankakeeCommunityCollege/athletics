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
  
  th.innerHTML = val += ':';
  tr.append(th);
  return th;
}

function createHeadingRow(thead, data) {
  const tr = document.createElement('tr');

  thead.append(tr);
  data.forEach(cell => createHeadingCells(tr, cell));
  return tr;
}

function createCells(tr, val, isFirstCell, location) {
  const td = document.createElement('td');
  const className = location == 'Home' ? 'tables--red' : 'tables--blue';

  if (isFirstCell) td.classList.add(className);

  td.innerHTML = val;
  tr.append(td);
  return td;
}

let winCount = 0;
let lossCount = 0;
let tieCountValue = 0;

function addRecordCountToData(data) {
  let status = data[6].trim();

  if (status == 'W') winCount += 1;
  if (status == 'L') winCount += 1;
  if (status == 'T') winCount += 1;

  let tieCount = (tieCountValue === 0) ? '' : ` - ${tieCountValue}`;
  let record = (status == '') ? '' : `${winCount} - ${lossCount}${tieCount}`;

  data[9] = record
  return data;
}

function createBodyRow(tbody, data) {
  const tr = document.createElement('tr');
  const location = data[5];

  data = addRecordCountToData(data);
  tbody.append(tr);
  data.forEach((cell, i) => createCells(tr, cell, i === 0, location))
  return tr;
}

function formatDate(date) {
  let [month, day] = date.split(/\//);
  const formattedDate = `${monthNames[month - 1]}&nbsp;${day}`;

  return formattedDate;
}

function createTableBodyRows(tbody, data) {
  data.forEach(row => {
    let [start, end, , , , , , , ,] = row;
    const startDate = start !== '' ? formatDate(start) : ' ';
    const endDate = end !== '' ? formatDate(end) : '' ;

    row[0] = `${startDate}${endDate === '' ? '' : ' - ' + endDate}`;
    createBodyRow(tbody, row);
  });
}

function createTableElements(response) {
  const table = createTableElement(PARENT);
  const thead = createTableHeadingElement(table);
  const tbody = createTableBodyElement(table);

  const sheetData = response.result.values;
  const headingData = sheetData[0]; // This is the first row in the spreadsheet data
  const tableData = sheetData.slice(1, sheetData.length); // is an array of arrays

  headingData[9] = 'Record'; // Add the final "Record" column which is calculated from Wins/Losses/Ties
  createHeadingRow(thead, headingData);
  createTableBodyRows(tbody, tableData);
}

export default createTableElements;
