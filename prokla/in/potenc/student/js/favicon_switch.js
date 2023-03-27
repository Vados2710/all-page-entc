$(document).ready(() => {
    const icons = ["img/favicon.ico", "img/star.ico"]
    const icon = $('[type="image/x-icon"]');
    let currentIcon = 0;
    function Change() {
      (currentIcon === 0) ? currentIcon = 1 : currentIcon = 0;
      icon[0].href = icons[currentIcon];
      console.log(icon[0].href);
    }
    setInterval(Change, 500);
});