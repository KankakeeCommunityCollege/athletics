// Stops video playback when the modal is closed

// Modal built into page which contains the iframe player
const videoModal = document.getElementById('videoModal');

function watchForModalClose(ytPlayer) {
  // BS5 method for detecting when modal events happen:
  videoModal.addEventListener('hide.bs.modal', _e => ytPlayer.src = '');
}

export default watchForModalClose;
