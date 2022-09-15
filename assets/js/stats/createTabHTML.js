import createTabTable from './createTabTable.js';
import testForMarkdown from './markdownify.js';

const PARENT = document.getElementById('Stats');

function createTabsUl() {
  const ul = document.createElement('ul');
  
  ul.classList.add('nav', 'nav-tabs');
  ul.id = 'statisticTabs';
  ul.setAttribute('role', 'tablist');
  return ul;
}

function createTabContent() {
  const tabContent = document.createElement('div');

  tabContent.classList.add('tab-content');
  tabContent.id = 'statisticTabContent';
  return tabContent;
}

function createTabPane(tabName, isFirstTab) {
  const tabPane = document.createElement('div');
  const h2 = document.createElement('h2');
  const tabLabel = tabName.toLowerCase().replace(/\s|\//g, '-')
  const tabId = tabLabel + '-tab';

  h2.classList.add('main-heading', 'typography__main-heading--margin-top', 'text-center');
  h2.innerHTML = tabName;

  if (isFirstTab) tabPane.classList.add('show', 'active');

  tabPane.classList.add('tab-pane', 'fade');
  tabPane.id = tabLabel;
  tabPane.setAttribute('role', 'tabpanel');
  tabPane.setAttribute('aria-labelledby', tabId);
  tabPane.append(h2);
  return tabPane;
}

function createTabLinks(tabName, ul, isFirstTab) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const tabLabel = tabName.toLowerCase().replace(/\s|\//g, '-')
  const tabId = tabLabel + '-tab';
  const ariaSelected = isFirstTab ? 'true' : 'false';
  
  li.classList.add('nav-tabs');
  a.classList.add('nav-link');

  if (isFirstTab) a.classList.add('active');

  a.href = `#${tabLabel}`
  a.setAttribute('data-toggle', 'tab');
  a.setAttribute('aria-selected', ariaSelected);
  a.id = tabId;
  a.setAttribute('role', 'tab');
  a.setAttribute('aria-controls', tabLabel);
  a.innerHTML = tabName;
  li.append(a);
  ul.append(li);
  return ul;
}

function assembleTabbedNav(parent, ulWithTabs, tabContent, tabPaneWithTable) {
  parent.innerHTML = '';
  parent.append(ulWithTabs);
  tabContent.append(tabPaneWithTable);
  parent.append(tabContent);
}

function createTabHTML(response) {
  //console.log(response); // response the JS Object containing Sheet workbook's data that's returned from the Sheets API.
  const ul = createTabsUl();
  const tabContent = createTabContent();
  const sheetData = response.result.valueRanges; // Array of JS Objects. Each Object represents a Sheet tab.

  sheetData.forEach((sheet, i) => {
    const tabName = sheet.range.match(/^'.+'!/g).toString().replace(/'|!/g, ''); // Extract the Name from the A1 Range ('Sheet 1',!A1-H999) notation in the Object.
    const tabValues = sheet.values; // Is an array of arrays
    const firstCell = tabValues[0].toString();
    const noMarkdownInFirstCell = (firstCell.search(/^>>>/g) === -1);
    
    const tableData = noMarkdownInFirstCell ? tabValues : tabValues.splice(1, tabValues.length);
    const blurb = noMarkdownInFirstCell ? null : testForMarkdown(tabValues.splice(0,1));

    let ulWithTabs = createTabLinks(tabName, ul, (i == 0));
    let tabPane = createTabPane(tabName, (i == 0));
    let tabPaneWithTable = createTabTable(tabPane, tableData, tabName, blurb);

    assembleTabbedNav(PARENT, ulWithTabs, tabContent, tabPaneWithTable); // Wonder twins UNITE!
  });
}
export default createTabHTML;
