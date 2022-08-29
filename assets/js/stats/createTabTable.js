function addColSpan(tr, td, val, reg, span) {
  val = val.replace(reg, '');
  td.setAttribute('colspan', span);
  td.classList.add('table__red-category');
  tr.appendChild(td);
  td.innerHTML = val;
  return td;
}

function appendRow(tr, td, val) {
  const highlightRegExp = /^__(.+)__$/g;
  const highlightTest = val.search(highlightRegExp);
  const valContainsHighlighting = highlightTest != -1;
  if (valContainsHighlighting) {
    td.classList.add('table__highlighted-cell');
    val = val.replace(/^__|__$/g, '');
  }
  tr.appendChild(td);
  td.innerHTML = val;
  return td;
}

function testColSpanAmount(tr, td, val) {
  const colSpanTest = {
    '^\\*\\*\\s': '2',
    '^\\*\\*\\*\\s': '3',
    '^\\*\\*\\*\\*\\s': '4',
    '^\\*\\*\\*\\*\\*\\s': '5'
  };
  for (var test in colSpanTest) {
    if (colSpanTest.hasOwnProperty(test)) {
      let reg = new RegExp(test, 'g');
      let matchIsTrue = reg.test(val);
      matchIsTrue ?
        addColSpan(tr, td, val, reg, colSpanTest[test])
      : null;
    }
  }
  return td;
}

function createCells(tr, val) {
  val = val.trim();
  const colSpanRegExp = /^\*\*[^\d\w]\*?\*?/g;
  const colTest = val.search(colSpanRegExp);
  const valContainsColSpan = colTest != -1;
  const td = document.createElement('td');
  valContainsColSpan ?
    testColSpanAmount(tr, td, val)
  : appendRow(tr, td, val);
  return td;
}

function createTableRow(data, table) {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for (var i = 0; i < data.length; i++) {
    createCells(tr, data[i]);
  }
  return table;
}

function createTableElement(parent) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const a = document.createElement('a');
  a.setAttribute('href', '#page-top');
  a.innerHTML = 'Back to top';
  table.classList.add('table', 'table-striped', 'table-hover');
  table.setAttribute('width', '100%');
  table.setAttribute('id', 'responsiveTable');
  table.appendChild(tbody);
  parent.appendChild(table);
  parent.appendChild(a);
  return tbody;
}

function createStatIntro(blurb) {
  let introWrapper = document.createElement('div');
  introWrapper.innerHTML = blurb;
  return introWrapper;
}

function createTabTable(parent, tableData, tabName, blurb) {
  //console.log(blurb);
  const blurbIsNotNull = blurb !== null;
  let copy;

  blurbIsNotNull ?
    copy = createStatIntro(blurb)
  : copy = null;

  blurbIsNotNull ?
    parent.appendChild(copy)
  : null;

  const table = createTableElement(parent);

  for (let i = 0, len = tableData.length; i < len; i++) {
    let rowData = tableData[i];
    const tr = createTableRow(rowData, table);
    //createBodyRow(tbody, tableData[i], id);
  }
  //console.log(table);

  //console.log(parent);
  return parent;
}
export default createTabTable;
