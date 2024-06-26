function createHash(str) {
  return (
    str
      .trim()
      .replace(/[^A-Za-z\s]/g, '')
      .replace(/\s/g, '-')
      .toLowerCase()
  );
}

function createModal(parent, id, name) {
  const modal = document.createElement('div');
  const modalId = id + 'Modal';

  modal.classList.add('modal', 'fade');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', id);
  modal.setAttribute('id', modalId);
  modal.setAttribute('data-roster-hash', `#${createHash(name)}`);
  parent.appendChild(modal);
  return modal;
}

function createDoc(modal) {
  const doc = document.createElement('div');

  doc.classList.add('modal-dialog', 'modal-dialog-centered');
  doc.setAttribute('role', 'document');
  modal.appendChild(doc);
  return doc;
}

function createContent(doc) {
  const content = document.createElement('div');

  content.classList.add('modal-content');
  doc.appendChild(content);
  return content;
}

function createHeader(content) {
  const header = document.createElement('div');

  header.classList.add('modal-header');
  content.appendChild(header);
  return header;
}

function createButton() {
  const button = document.createElement('button');

  button.classList.add('btn-close');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-dismiss', 'modal');
  button.setAttribute('aria-label', 'close');
  return button;
}

function createTitle(header, name, id) {
  const title = document.createElement('h5');
  const button = createButton();

  title.classList.add('modal-title');
  title.setAttribute('id', id);
  title.innerHTML = name + ' Bio';
  header.appendChild(title);
  header.appendChild(button);
  return title;
}

function createBody(content, name, modalContent) {
  const body = document.createElement('div');

  body.classList.add('modal-body');
  body.innerHTML = modalContent.join('');
  content.appendChild(body);
  return body;
}


function createPlayerImage(name, src, body) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const alt = 'Photo of player ' + name;
  const source = 'https://cdn.kcc.edu/athletics/roster-img/' + src + '.jpg';

  img.alt = alt;
  img.src = '/assets/img/placeholder_4by3.jpg';
  img.setAttribute('data-src', source);
  img.width = '290';
  img.height = '393';
  img.setAttribute('onerror', 'this.onerror=null;this.src=\'https://cdn.kcc.edu/athletics/roster-img/blank-avatar.jpg\'');
  img.classList.add('roster__img');
  div.classList.add('text-center', 'float-md-start');
  div.appendChild(img);
  body.appendChild(div);
  return body;
}

function createNameHeading(name, jersey, body) {
  const h6 = document.createElement('h6');
  const jerseyIsNotBlank = jersey !== '_na_';
  
  h6.classList.add('roster__player');
  jerseyIsNotBlank ?
    h6.innerHTML = '#' + jersey + ' ' + name
    : h6.innerHTML = name;
  body.appendChild(h6);
  return body;
}

function createPlayerStats(cellCol, cellData) {
  const p = document.createElement('p');
  const cellIsBlank = (cellData == '' || cellData == ' ' || cellData === '_na_');

  function createStat(cellCol, cellData) {
    const span = document.createElement('span');
    const strong = document.createElement('strong');

    p.classList.add('mb-0'); //Bootstrap Class (margin-bottom: 0)
    strong.innerHTML = cellCol + ':';
    p.appendChild(strong);
    span.innerHTML = '&nbsp' + cellData;
    p.appendChild(span);
    return p;
  }

  const stat = cellIsBlank ? false : createStat(cellCol, cellData);
  return stat;
}

function createModalFooter(content) {
  const div = document.createElement('div');
  const button = document.createElement('button');
  div.classList.add('modal-footer');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-dismiss', 'modal');
  button.classList.add('btn', 'btn-secondary');
  button.innerHTML = 'Close';
  div.appendChild(button);
  content.appendChild(div);
  return content;
}

function createModalElements(response) {
  const parent = document.getElementById('modalDiv');

  const data = response.result.values;
  const headingData = data[1];
  const dataLength = data.length;
  const validData = data.slice(2, dataLength);

  for (let i = 0, len = validData.length; i < len; i++) {
    let rowData = validData[i];
    let modalContent = [];
    let stat = headingData[i];
    let src = rowData[0].trim();
    let jersey = rowData[1].trim();
    let name = rowData[2].trim();

    src == '_na_' ? src = 'blank-avatar' : null;

    let id = name.replace(/[\W_]+/g, '');
    const modal = createModal(parent, id, name);
    const doc = createDoc(modal);
    const content = createContent(doc);
    const header = createHeader(content);
    const title = createTitle(header, name, id);
    const body = createBody(content, name, modalContent);
    const playerImg =  createPlayerImage(name, src, body)
    const nameHeading = createNameHeading(name, jersey, body);
    let playerStatsArray = [];

    for (let r = 2, len = rowData.length; r < len; r++) {
      let cellData = rowData[r];
      let cellCol = headingData[r];
      const playerStats = createPlayerStats(cellCol, cellData);
      
      if (playerStats !== false) {
        playerStatsArray.push(playerStats);
      }
    }
    playerStatsArray.forEach(stat => body.appendChild(stat));
    const footer = createModalFooter(content);
  }
}
export default createModalElements;
