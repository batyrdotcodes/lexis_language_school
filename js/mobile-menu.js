const mobileSideMenuBtn = document.querySelector('.header__menu-mobile-btn');
const mobileSideMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.overlay');

const closeMenu = () => {
  mobileSideMenu.classList.remove('open');
  mobileMenuOverlay.classList.remove('active');
};

mobileSideMenuBtn.addEventListener('click', () => {
  if (mobileSideMenu.classList.contains('open')) {
    closeMenu();
  } else {
    mobileSideMenu.classList.add('open');
    mobileMenuOverlay.classList.add('active');
  }
});

mobileMenuOverlay.addEventListener('click', () => {
  closeMenu();
});

mobileSideMenu.querySelectorAll('.submenu-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.closest('.has-submenu');
    const submenu = parent.querySelector('.submenu');
    submenu.classList.toggle('open');
  });
});
