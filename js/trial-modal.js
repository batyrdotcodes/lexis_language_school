const openTrialBtn = document.querySelector('[data-open-modal="trial-modal"]');
const trialModal = document.querySelector('[data-modal="trial-modal"]');
const trialCloseBtn = document.querySelector('[data-close-modal]');
const modalOverlay = document.querySelector('.overlay');

// открыть модалку
if (openTrialBtn)
  openTrialBtn.addEventListener('click', () => {
    trialModal.classList.add('modal--active');
    modalOverlay.classList.add('active');
  });

// закрыть модалку
trialCloseBtn.addEventListener('click', () => {
  trialModal.classList.remove('modal--active');
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
  trialModal.classList.remove('modal--active');
  modalOverlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    trialModal.classList.remove('modal--active');
    modalOverlay.classList.remove('active');
  }
});
