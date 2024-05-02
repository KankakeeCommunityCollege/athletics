//custom JS to switch the text in the "More..." button when the Season Preview get expanded.
const moreButton = document.querySelector('.js-more-btn');

function moreClick() {
  moreButton.addEventListener('click', (e) => {
    const target = e.target;

    if (target.innerHTML == 'More ...') {
      target.innerHTML = 'Close';
    } else {
      target.innerHTML = 'More ...';
    }
  });
}

export default moreClick;
