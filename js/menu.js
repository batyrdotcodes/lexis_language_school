const sideMenuBtn = document.querySelector('.header__menu-btn');
const sideMenu = document.querySelector('.side-menu');
const sideMenuClose = document.querySelector('.side-menu .fa-xmark');
const menuOverlay = document.querySelector('.overlay');

sideMenuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
  menuOverlay.classList.add('active');
  if (!mobileMenu.classList.contains('open')) {
    submenu.classList.remove('open');
  }
});

sideMenuClose.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  menuOverlay.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  menuOverlay.classList.remove('active');
});

sideMenu.querySelectorAll('.submenu-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.closest('.has-submenu');
    const submenu = parent.querySelector('.submenu');
    submenu.classList.toggle('open');
  });
});
