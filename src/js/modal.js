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

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();
