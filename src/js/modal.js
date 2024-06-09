import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalWindow: document.querySelector('[data-modal-window]'),
  };

  const toggleModal = () => {
    refs.modal.classList.toggle('is-hidden');
    refs.modalWindow.classList.toggle('modal-animation');
    if (refs.modal.classList.contains('is-hidden')) {
      enableBodyScroll(refs.modal);
    } else {
      disableBodyScroll(refs.modal);
    }
  };

  const closeModal = () => {
    refs.modal.classList.add('is-hidden');
    refs.modalWindow.classList.remove('modal-animation');
    enableBodyScroll(refs.modal);
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', event => {
    if (event.target === refs.modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      closeModal();
    }
  });
})();
