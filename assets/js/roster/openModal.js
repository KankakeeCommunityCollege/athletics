function openModalIfHashExists(hash) {
  if (!document.querySelector(`div[data-roster-hash="${hash}"]`))
    return;

  const modalEl = document.querySelector(`div[data-roster-hash="${hash}"]`);

  // Focus the modal-dialog after it has finished opening.
  // This is necessary for accessibility
  $(modalEl).on('shown.bs.modal', (e) => modalEl.querySelector('.modal-dialog').focus()); // See modal events in BS4 docs for more info: <https://getbootstrap.com/docs/4.6/components/modal/#events>
  $(modalEl).modal('show'); // Opens the modal. See modal methods <https://getbootstrap.com/docs/4.6/components/modal/#methods>
}

function openModal() {
  if (window.location.hash) {
    openModalIfHashExists(window.location.hash);
  }
  window.addEventListener('hashchange', (e) => {
    openModalIfHashExists(window.location.hash);
  });
}

export default openModal;
