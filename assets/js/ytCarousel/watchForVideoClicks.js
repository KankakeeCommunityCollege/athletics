function watchForVideoClicks(YT_PLAYER) {
  const LINKS = document.querySelectorAll('.yt-list__a');

  LINKS.forEach((item) => {
    item.addEventListener('click', (e) => {
        YT_PLAYER.src = `https://youtube.com/embed/${item.dataset.videoid}?controls=1&showinfo=0&rel=0&autoplay=1`;
      });
  });
}
export default watchForVideoClicks;
