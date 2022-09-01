function addColSpan(tr, td, val, reg, span) {
  td.setAttribute('colspan', span);
  td.classList.add('table__red-category');
  td.innerHTML = val.replace(reg, '');;
  tr.append(td);
  return td;
}

function appendRow(tr, td, val) {
  const highlightRegExp = /^__(.+)__$/g;

  if (val.search(highlightRegExp) !== -1) {
    td.classList.add('table__highlighted-cell');
    val = val.replace(/^__|__$/g, '');
  }

  td.innerHTML = val;
  tr.append(td);
  return td;
}

function testColSpanAmount(tr, td, val) {
  const colSpanTest = {
    '^\\*\\*\\s': '2',
    '^\\*\\*\\*\\s': '3',
    '^\\*\\*\\*\\*\\s': '4',
    '^\\*\\*\\*\\*\\*\\s': '5'
  };
  for (const test in colSpanTest) {
    let reg = new RegExp(test, 'g');
    let match = reg.test(val);

    if (match) addColSpan(tr, td, val, reg, colSpanTest[test]);
  }
  return td;
}

function createCells(tr, val) {
  const td = document.createElement('td');
  const colSpanRegExp = /^\*\*[^\d\w]\*?\*?/g;

  if (val.search(colSpanRegExp) !== -1) {
    testColSpanAmount(tr, td, val);
  } else {
    appendRow(tr, td, val);
  }

  return td;
}

function createTableRow(data, table) {
  const tr = document.createElement('tr');

  data.forEach(cell => createCells(tr, cell));
  return table.append(tr);
  
}

function createTableElement(parent) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const a = document.createElement('a');

  a.href = '#page-top';
  a.innerHTML = 'Back to top';
  table.classList.add('table', 'table-striped', 'table-hover');
  table.setAttribute('width', '100%');
  table.id = 'responsiveTable';
  table.append(tbody);
  parent.append(table);
  parent.append(a);
  return tbody;
}

function createStatIntro(blurb) {
  let div = document.createElement('div');

  div.innerHTML = blurb;
  return div;
}

function createTabTable(parent, tableData, tabName, blurb) {
  const copy = (blurb === null) ? null : createStatIntro(blurb);

  if (blurb !== null) parent.append(copy);

  const table = createTableElement(parent);

  tableData.forEach(row => {
    createTableRow(row, table);
  })
  return parent;
}
export default createTabTable;
