const videoModalTitle = document.getElementById('videoModalTitle'); // Heading element in modal to receive video title

function watchForVideoClicks(ytPlayer) {
  const buttonList = document.querySelectorAll('.jsYtBtn');

  [...buttonList].forEach((item) => {
    item.addEventListener('click', e => {
      videoModalTitle.innerHTML = item.dataset.videoTitle;
      ytPlayer.src = `https://youtube.com/embed/${item.dataset.videoid}?controls=1&showinfo=0&rel=0&autoplay=1`;
    });
  });
}
export default watchForVideoClicks;
