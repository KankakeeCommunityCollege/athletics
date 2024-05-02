function openModalIfHashExists(hash, Modal) {
  if (!document.querySelector(`div[data-roster-hash="${hash}"]`))
    return;

  const modalEl = document.querySelector(`div[data-roster-hash="${hash}"]`);

  // Bootstrap 5 Modal method
  const bsModal = new Modal(modalEl, { toggle: false });

  bsModal.show();
}

function openModal(Modal) {
  if (window.location.hash) {
    openModalIfHashExists(window.location.hash, Modal);
  }
  window.addEventListener('hashchange', (e) => {
    openModalIfHashExists(window.location.hash, Modal);
  });
}

export default openModal;
