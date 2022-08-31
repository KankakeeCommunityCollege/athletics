//custom JS to switch the text in the "More..." button when the Season Preview get expanded.
const moreButton = document.querySelector('.js-more-btn');

function moreClick() {
  moreButton.addEventListener('click', (e) => {
    console.log(e.target)
  });
  $(document).ready(function() {
    var trigger = $('.js-more-btn');

    trigger.click(function() {
      var that = $(this);

      if ( that.html() == 'More ...' ) {
        console.log("It's More");
        that.html('Close');
      } else {
        console.log("It's Less");
        that.html('More ...');
      }
    });
  });
}

export default moreClick;
