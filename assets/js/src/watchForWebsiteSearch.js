const searchForm = document.getElementById('SearchTermForm');
const searchPageUrl = 'https://www.kcc.edu/search';

function submissionHandler(e) {
  const target = e.target;
  const searchString = encodeURIComponent(target.querySelector('#searchTermInput').value);
  const searchQuery = `?q=${searchString}`

  e.preventDefault();
  return window.location = new URL(searchPageUrl + searchQuery);
}

function watchForWebsiteSearch() {
  searchForm.addEventListener('submit', submissionHandler);
}

export default watchForWebsiteSearch;
