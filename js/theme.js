const themeSwitch = document.getElementById('theme-switch');
const headerLogo = document.querySelector('.header__icon');
const footerLogo = document.querySelector('.footer__icon');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeSwitch.checked = true;
  headerLogo.src = './imgs/Frame 27.png';
  footerLogo.src = './imgs/Frame 28.png'; // оставь этот путь если он правильный
}

themeSwitch.addEventListener('change', () => {
  // плавное исчезновение
  headerLogo.classList.add('fade');
  footerLogo.classList.add('fade');

  setTimeout(() => {
    if (themeSwitch.checked) {
      document.body.classList.add('dark-theme');

      headerLogo.src = './imgs/Frame 27.png';
      footerLogo.src = './imgs/Frame 27.png'; // исправлено

      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');

      headerLogo.src = './imgs/header-logo.png';
      footerLogo.src = './imgs/header-logo.png';

      localStorage.setItem('theme', 'light');
    }
  }, 150);

  // после загрузки новых изображений убираем fade
  headerLogo.onload = () => headerLogo.classList.remove('fade');
  footerLogo.onload = () => footerLogo.classList.remove('fade');
});
