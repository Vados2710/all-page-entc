document.querySelector('.year').innerHTML = new Date().getFullYear()

let date = new Date().getMonth()
if (date === 0) {
  document.querySelector('.month').innerHTML = 'Sausio mėn'
}
if (date === 1) {
  document.querySelector('.month').innerHTML = 'Vasario mėn'
}
if (date === 2) {
  document.querySelector('.month').innerHTML = 'Kovas'
}
if (date === 3) {
  document.querySelector('.month').innerHTML = 'Balandis'
}
if (date === 4) {
  document.querySelector('.month').innerHTML = 'Gegužė'
}
if (date === 5) {
  document.querySelector('.month').innerHTML = 'Birželio mėn'
}
if (date === 6) {
  document.querySelector('.month').innerHTML = 'Liepos mėn'
}
if (date === 7) {
  document.querySelector('.month').innerHTML = 'Rugpjūtis'
}
if (date === 8) {
  document.querySelector('.month').innerHTML = 'Rugsėjo mėn'
}
if (date === 9) {
  document.querySelector('.month').innerHTML = 'Spalio mėn'
}
if (date === 10) {
  document.querySelector('.month').innerHTML = 'Lapkričio mėn'
}
if (date === 11) {
  document.querySelector('.month').innerHTML = 'Gruodžio mėn'
}


let imtForm = document.querySelector('#calc_imt');
imtForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let age = imtForm.querySelector('input[name="age"]').value
  let growth = imtForm.querySelector('input[name="growth"]').value;
  let weight = imtForm.querySelector('input[name="weight"]').value;
  let imt = Math.round(weight / (growth * growth) * 10000);
  document.querySelector('.lds-ripple').style.display = 'block';
  setTimeout(function () {
    document.querySelector('.lds-ripple').style.display = 'none';
    if (age >= 100 || age <= 17) {
      document.querySelector('#result').innerHTML = '<h3 class="red">Ingrese la edad correcta</h3>'
    } else {
      if (imt <= 22) {
        document.querySelector('#result').innerHTML = '<h3>Jūsų KMI ' + imt + '. Šiuo metu svoris neviršija normos.</h3>'
      } else {
        document.querySelector('#result').innerHTML = '<h3 class="red">Jūsų KMI ' + imt + '. Jūs turite antsvorio. Norint atsikratyti anstvorio, rekomenduojame sulieknėti naudojant <a href="#boxesHref" style="display: block">'+offer_params.productName+'</a> </h3>'
      }
    }
  }, 1000);
  imtForm.reset();
}

$(document).ready(function () {
  $('.boxes > div').click(function () {
    if ($(this).parent().hasClass('boxesfirsttry')) {
      $('.boxes').removeClass('boxesfirsttry');
      $(this).addClass('openbox');
      $(this).find('.try').hide();
      $(this).find('.opentry').show();
      setTimeout(function () {
        $('.sweet-overlay').show();
        $('.sweet-alert').show();
      }, 500);
    } else if ($(this).parent().hasClass('boxeslasttry')) {
      if (!$(this).hasClass('openbox')) {
        $(this).find('.try').hide();
        $(this).find('.opentry').show();
        $(this).find('.boxtext').css('display', 'block');

        setTimeout(function () {
          $('.spin-result-wrapper').show();
          setTimeout(function () {
            $('#boxesContainer').slideUp(250);
            setTimeout(function () {
              $('.order_block').slideDown(250);
              for (var i = 0; i < document.querySelectorAll('a').length; i++) {
                document.querySelectorAll('a')[i].setAttribute('href', '#product')
              }
              $('html, body').animate({
                scrollTop: $('.order_block').offset().top
              }, 1000);
            }, 500);
          }, 500);
        }, 500);
      }
    }
  });
  $('#update').click(function () {
    $('.sweet-overlay').hide();
    $('.sweet-alert').hide();
    $('.boxes').addClass('boxeslasttry');
  });
  $('.pop-up-button').click(function (e) {
    close(e);
  });
  $('.close-popup').click(function (e) {
    close(e);
  });
  $('a').addClass('scrollto')
  $('a').attr('href', '#boxesHref')

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
  };

  for (let i = 0; i < document.querySelectorAll('.date').length; i++) {
    document.querySelectorAll('.date')[i].innerHTML = new Date().toLocaleDateString('ru');
  }

  for (let i = 0; i < document.querySelectorAll('.date-1').length; i++) {
    document.querySelectorAll('.date-1')[i].innerHTML = addDays(new Date(), 1).toLocaleString('ru', options);
  }
  document.querySelector('.date1').innerHTML = new Date().getFullYear()
});

function close(e) {
  e.preventDefault();
  $('.spin-result-wrapper').hide();
  $('#countdown').timeTo(600);
}

function scrollto() {
  $(".scrollto").click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1500);
    return false;
  });
}

