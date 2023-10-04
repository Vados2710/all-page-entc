function update() {
  var Now = new Date(),
    Finish = new Date();
  Finish.setHours(23);
  Finish.setMinutes(59);
  Finish.setSeconds(59);
  if (
    Now.getHours() === 23 &&
    Now.getMinutes() === 59 &&
    Now.getSeconds === 59
  ) {
    Finish.setDate(Finish.getDate() + 1);
  }
  var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
  var hrs = Math.floor(sec / 3600);
  sec -= hrs * 3600;
  var min = Math.floor(sec / 60);
  sec -= min * 60;

  document.querySelector(".hours").innerHTML = pad(hrs);
  document.querySelector(".minutes").innerHTML = pad(min);
  document.querySelector(".seconds").innerHTML = pad(sec);
  
  setTimeout(update, 500);
}

function pad(s) {  
  s < 10 ? s = ("00" + s).substring(1) : s = ("00" + s).substring(2);
  return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
}

const lazyLoadInstance = new LazyLoad();

document.addEventListener('DOMContentLoaded', ()=> {
  //update();
  lazyLoadInstance.update();

  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {    
    window.scrollY >= 60 ? header.classList.add('stuck') : header.classList.remove('stuck');
  });
});

