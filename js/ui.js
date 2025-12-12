// common
const overlay = document.querySelector('.overlay');

// trial modal
const openTrialBtn = document.querySelector('[data-open-modal="trial-modal"]');
const trialModal = document.querySelector('[data-modal="trial-modal"]');
const trialCloseBtn = document.querySelector('[data-close-modal]');

openTrialBtn.addEventListener('click', () => {
  if (openTrialBtn) console.log('tapped');
  trialModal.classList.add('modal--active');
  overlay.classList.add('active');
});

trialCloseBtn.addEventListener('click', () => {
  trialModal.classList.remove('modal--active');
  //   overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  trialModal.classList.remove('modal--active');
  overlay.classList.remove('active');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    trialModal.classList.remove('modal--active');
    overlay.classList.remove('active');
  }
});

// side menu
const sideMenuBtn = document.querySelector('.header__menu-btn');
const sideMenu = document.querySelector('.side-menu');
const sideMenuClose = document.querySelector('.side-menu .fa-xmark');

sideMenuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('active');
  if (!sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open');
  }
});

sideMenuClose.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
});

sideMenu.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const parent = toggle.closest('.has-submenu');
    const submenu = parent.querySelector('.submenu');
    submenu.classList.toggle('open');
  });
});

// mobile menu
const mobSideMenuBtn = document.querySelector('.header__menu-mobile-btn');
const mobSideMenu = document.querySelector('.mobile-menu');

const closeMenu = () => {
  mobSideMenu.classList.remove('open');
  overlay.classList.remove('active');
};

mobSideMenuBtn.addEventListener('click', () => {
  if (mobSideMenu.classList.contains('open')) {
    closeMenu();
  } else {
    mobSideMenu.classList.add('open');
    overlay.classList.add('active');
  }
});

overlay.addEventListener('click', () => {
  closeMenu();
});

mobSideMenu.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const parent = toggle.closest('.has-submenu');
    const submenu = parent.querySelector('.submenu');
    submenu.classList.toggle('open');
  });
});

// cert
const openCertBtns = document.querySelectorAll(
  '[data-open-modal="cert-modal"]'
);
const certModal = document.querySelector('[data-modal="cert-modal"]');
const certCloseBtn = document.querySelector('[data-close-modal="cert-modal"]');

openCertBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    certModal.classList.add('modal--active');
    overlay.classList.add('active');
  });
});

certCloseBtn.addEventListener('click', () => {
  certModal.classList.remove('modal--active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  certModal.classList.remove('modal--active');
  overlay.classList.remove('active');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    certModal.classList.remove('modal--active');
    overlay.classList.remove('active');
  }
});

// programs modal
const openProgramsBtns = document.querySelectorAll(
  '[data-open-modal="programs-modal"]'
);
const programsModal = document.querySelector('[data-modal="programs-modal"]');
const programsCloseBtn = document.querySelector(
  '[data-close-modal="programs-modal"]'
);
const openProTrialBtn = document.querySelector(
  '[data-open-modal="pro-trial-modal"]'
);

openProTrialBtn.addEventListener('click', () => {
  if (openProTrialBtn) {
    trialModal.classList.add('modal--active');
    programsModal.classList.remove('modal--active');
  }
});

openProgramsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    programsModal.classList.add('modal--active');
    overlay.classList.add('active');
  });
});

programsCloseBtn.addEventListener('click', () => {
  programsModal.classList.remove('modal--active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  programsModal.classList.remove('modal--active');
  overlay.classList.remove('active');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    programsModal.classList.remove('modal--active');
    overlay.classList.remove('active');
  }
});
