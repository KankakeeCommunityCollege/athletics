import createModalElements from './createModalElements.js';

function createHash(str) {
  return (
    str
      .trim()
      .replace(/[^A-Za-z\s]/g, '')
      .replace(/\s/g, '-')
      .toLowerCase()
  );
}

function createTableElement(parent) {
  const table = document.createElement('table');
  table.classList.add('display', 'table', 'table-striped', 'table-hover');
  table.setAttribute('width', '100%');
  table.setAttribute('id', 'responsiveTable');
  parent.innerHTML = '';
  parent.append(table);
  return table;
}

function createTableHeadingElement(table) {
  const thead = document.createElement('thead');
  table.appendChild(thead);
  return thead;
}

function createTableBodyElement(table) {
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  return tbody;
}

function createHeadingCells(tr, val) {
  const th = document.createElement('th');
  tr.appendChild(th);
  val === 'Image' || val === 'Bio' || val === 'Intended Major' || val === 'High School Coach' || val === 'Parents' || val === 'Siblings' ? th.classList.add('never') // Add DataTable's 'all' & 'none' classes.
  : val === 'Jersey' || val === 'player' ? th.classList.add('all') // Add DataTable's 'all' & 'none' classes.
  : null;
  val = val + ':';
  th.innerHTML = val;
  return th;
}

function createHeadingRow(thead, data) {
  const tr = document.createElement('tr');
  thead.appendChild(tr);
  for (var i = 0; i < data.length; i++) {
    createHeadingCells(tr, data[i]);
  }
  return tr;
}

function createBodyRow(tbody, data, id) {
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  for (var i = 0; i < data.length; i++) {
    createCells(tr, data[i], id);
  }
  return tr;
}

function createCells(tr, val, id) {
  const td = document.createElement('td');
  const cellIsBlank = val === '_na_';
  cellIsBlank ? val = ' ' : null;
  tr.appendChild(td);
  td.innerHTML = val;
  return td;
}

function checkData(data, headingRow) { // Makes sure each row of data has 11 items and adds the missing ones
  const tableColumns = headingRow.length; // Number of columns of data in the Google Sheet

  data.forEach(row => {
    let missing = tableColumns - row.length;

    Array.from({ length: missing }, (i, c) => row.push(''));
  });
  return data;
}

function createTableElements(response) {
  const parent = document.getElementById('Roster');
  const table = createTableElement(parent);
  const thead = createTableHeadingElement(table);
  const tbody = createTableBodyElement(table);
  // Handle the results here (response.result has the parsed body).
  //console.log("Response", response.result);
  let sheetData = response.result.values;
  let arrayLength = sheetData.length;
  let headingData = sheetData[1];
  let tableData = sheetData.slice(2, arrayLength); // is an array of arrays
  let data = checkData(tableData, headingData);

  createModalElements(response);
  createHeadingRow(thead, headingData);

  for (let i = 0, len = data.length; i < len; i++) {
    let rowData = data[i];
    let name = rowData[2];
    let id = name.replace(/[\W_]+/g, '');
    let targetModalId = id + 'Modal';

    rowData[2] = `<span class="roster--hover"><button type="button" class="btn btn-link buttons__roster--name" data-toggle="modal" data-target="#${targetModalId}">${name}</button>`;
    rowData[2] += `<button class="btn btn-link roster--hidden-till-hover" data-clipboard-text="https://athletics.kcc.edu${window.location.pathname}#${createHash(name)}">#</button></span>`;
    createBodyRow(tbody, data[i], id);
  }
}

export default createTableElements;
