const openCertBtns = document.querySelectorAll(
  '[data-open-modal="cert-modal"]'
);
const certModal = document.querySelector('[data-modal="cert-modal"]');
const certCloseBtn = document.querySelector('[data-close-modal="cert-modal"]');

// Открытие модалки
openCertBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    certModal.classList.add('modal--active');
    modalOverlay.classList.add('active');
  });
});

// Закрытие по кнопке
certCloseBtn.addEventListener('click', () => {
  certModal.classList.remove('modal--active');
  modalOverlay.classList.remove('active');
});

// Закрытие по клику на оверлей
modalOverlay.addEventListener('click', () => {
  certModal.classList.remove('modal--active');
  modalOverlay.classList.remove('active');
});

// Закрытие по ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    certModal.classList.remove('modal--active');
    modalOverlay.classList.remove('active');
  }
});
