// Stops video playback when the modal is closed
function watchForModalClose(YT_PLAYER) {
  // BS4 method for detecting when modal events happen (other events: `hide.bs...`, `hidden...`, `show...`, & `shown...`)
  $('#exampleModalCenter').on('hide.bs.modal', function (e) {
    YT_PLAYER.src = '';
  });
}

export default watchForModalClose;
