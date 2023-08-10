document.addEventListener('DOMContentLoaded', function () { (() => {
  if (document.querySelector('.erecsolNav')) {
    const mobileMenuBtn = document.querySelector('.erecsolNav__burger');
    const menu = document.querySelector('.erecsolNav__block ');
    mobileMenuBtn.addEventListener('click', () => {
      menu.classList.toggle('menu-active');
    });
  }
})();});