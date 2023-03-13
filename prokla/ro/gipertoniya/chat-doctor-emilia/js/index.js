	function validateNum(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateText(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[A-Za-zА-Яа-я\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
setTimeout("$('.body').css('transform','translateY(0)');", 1000);
    setTimeout("$('.main-desc').addClass('b-show')", 1500);
    setTimeout("$('body').addClass('add-scroll')", 3000);
    setTimeout("$('html').addClass('add-scroll')", 3000);


    $(".glow-button").on("click", function () {
      $(".comment-item").addClass("comment-item-show");
      $(".glow-button").addClass("hide");
      $(".shine-button").addClass("show");

    });
    var url = window.cdn_path || "";
    const OFFER = '<span style="display:inline-block;">«Keto Eat&Fit»</span>'
    let now = new Date();
    let mm = now.getMonth() + 1;
    let day = now.getDate();
    let year = now.getFullYear();
    let date = '' + day + '.' + mm + '.' + year + '';
    const massange = [{
      m: 'Bună, mă numesc Emilia Dobre. Sunt un medic endocrinolog de top din Romania. '
    }, {
      m: 'Consultațiile mele gratuite au ajutat mii de pacienți diabetici să facă față bolii lor. '
    }, {
      m: 'Pentru ca recomandările mele să fie cât mai exacte și eficiente posibil, vă rugăm să răspundeți la câteva întrebări. '
    }, {
      m: '<p class="quest">Aveți alergii la alimente sau medicamente?</p>'
    }, {
      m: '<p class="quest">Ai probleme cu pielea?</p>'
    }, {
      m: '<p class="quest">Evaluează-ți stilul de viață?</p>'
    }, {
      m: '<p class="quest">Ați luat vreodată medicamente pentru tensiunea arterială?</p>'
    }, {
      m: '<p class="quest">Aveți rude sau membri ai familiei cu diabet?</p>'
    }, {
      m: '<p class="quest">Care este nivelul tău de zahăr din sânge?</p>'
    }, {
      m: '<p class="quest">Varsta ta?</p>'
    }, {
      m: 'Multumesc pentru raspunsuri.  '
    }, {
      m: `Pe baza informațiilor pe care le-ați furnizat, pot concluziona că, în această etapă, simptomele diabetului nu pun viața în pericol, dar în viitor pot progresa. Dacă procesului de tratament nu i se acordă atenția cuvenită, diabetul va ajunge într-o fază critică.`
    }, {
      m: 'Se dezvoltă insuficiență renală cronică, ducând la insuficiență renală completă. Există leziuni ale nervilor optici și orbire suplimentară. Inima și vasele de sânge suferă, ceea ce amenință un atac de cord și un accident vascular cerebral. Se dezvoltă tulburări ale pielii: apariția rănilor, sângerări, „picior diabetic”.'
    }, {
      m: `Cu o imagine clinică similară, majoritatea medicilor de școală veche prescriu metformină sau medicamente similare agresive. Specialiștii progresiști ​​au îndoieli cu privire la eficacitatea unor astfel de medicamente.`
    }, {
      m: '“'+offer_params.productName+'” este un agent hipoglicemiant modern care nu numai că stabilizează nivelul zahărului din sânge, dar și previne salturile ulterioare ale acestuia, minimizând consecințele negative pentru organism. '+offer_params.productName+' nu creează dependență și este sigur de luat singur. Eficacitatea sa a fost dovedită clinic prin numeroase teste, iar calitatea este confirmată de certificate internaționale. '
    }, {
      m: 'Așa arată „'+offer_params.productName+'”: <img src="prod.png" class="product-img"> '
    }, {
      m: 'Am vești grozave pentru tine! Aveți o oportunitate unică de a cumpăra „'+offer_params.productName+'” cu o reducere de 50% în Centrul nostru.'
    }, {
      m: 'Introduceți numele și numărul dvs. de telefon pe formularul de comandă. Numarul de pachete este limitat, asa ca recomand sa comandati fara intarziere.'
    }]

    var mass_id = 0;
    var length_mass = 0;
    var lengt_num_mas = 0;
    var text = '';
    var speedtext = 50 // скорость вывода сообщений
    var process = true;
    setTimeout(() => {


      var h = new Date();
      var minut = ('0' + h.getMinutes()).slice(-2);
      var hours = ('0' + h.getHours()).slice(-2);
      var time = hours + ":" + minut

      const body_mas =
        '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' +
        time + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
      $('.chat-content-list').append(body_mas);
      const mas_inf = setInterval(function () {
        if (process == true) {
          if (lengt_num_mas != massange.length) {
            text += massange[lengt_num_mas].m[length_mass];
            length_mass++
            $('#mass' + lengt_num_mas + '').html(text);
            if (lengt_num_mas === 3 && length_mass === massange[lengt_num_mas].m.length - 1) {
              question1();
              process = false;
              choise1();
              $("#scroll_id").addClass("hide-q");

              $("#scroll_id").removeClass("hide-q");
            }
            if (lengt_num_mas === 4 && length_mass === massange[lengt_num_mas].m.length - 1) {
              question2();
              process = false;
              choise2();
              $("#scroll_id").addClass("hide-q");

              $("#scroll_id").removeClass("hide-q");
            }
            if (lengt_num_mas === 5 && length_mass === massange[lengt_num_mas].m.length - 1) {
              question3();
              process = false;
              choise3();
              $("#scroll_id").addClass("hide-q");

              $("#scroll_id").removeClass("hide-q");
            }
            if (lengt_num_mas === 6 && length_mass === massange[lengt_num_mas].m.length - 1) {
              question4();
              process = false;
              choise4();
              $("#scroll_id").addClass("hide-q");

              $("#scroll_id").removeClass("hide-q");
            }
            if (lengt_num_mas === 7 && length_mass === massange[lengt_num_mas].m.length - 1) {
              question5();
              process = false;
              choise5();
              $("#scroll_id").addClass("hide-q");

              $("#scroll_id").removeClass("hide-q");
            }
            if (lengt_num_mas === 8 && length_mass === massange[lengt_num_mas].m.length - 1) {
              question6();
              process = false;
              choise6();
              $("#scroll_id").addClass("hide-q");

              $("#scroll_id").removeClass("hide-q");
            }
            if (lengt_num_mas === 9 && length_mass === massange[lengt_num_mas].m.length - 1) {
              question7();
              process = false;
              choise7();
              $("#scroll_id").addClass("hide-q");

              $("#scroll_id").removeClass("hide-q");
            }
            if (length_mass == massange[lengt_num_mas].m.length) {
              lengt_num_mas++
              mass_id++
              length_mass = 0;
              text = '';
              app();
              let proc_scroling = lengt_num_mas - 1;

            }
          } else {
            clearInterval(int), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), $(".reviews").removeClass("hide");
          }
        } else {}
      }, speedtext)
    }, 30)

    function app() {

      var h = new Date();
      var minut = ('0' + h.getMinutes()).slice(-2);
      var hours = ('0' + h.getHours()).slice(-2);
      var time = hours + ":" + minut;

      var div = $(".chat").height() + 100;
      var win = $('.content').height();

      if (div > win) {
        $("#scroll_id").removeClass("hide");
        var i = $(".inp").val();
        $(".inp").val(++i);

      }

      const body_mas =
        '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' +
        time + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';

      $('.chat-content-list').append(body_mas);





      if (document.getElementById('res').value == "0") {
        $("#scroll_id").addClass("aba");
      } else {
        $("#scroll_id").removeClass("aba");
      }

    }

    function myMassange(userGend) {


      var h = new Date();
      var minut = ('0' + h.getMinutes()).slice(-2);
      var hours = ('0' + h.getHours()).slice(-2);
      var time = hours + ":" + minut;

      let mass =
        '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' +
        time + '</p><p class="text" class="users_mass">' + userGend + '</p></div></div></div>';
      $('.chat-content-list').append(mass);



    }

    function question1() {
      $('.chat-content-list').append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">Da</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">Nu</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">Nu stiu</span></div></div>'
        );
    }

    function choise1() {
      $('.question1M').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Da');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question1W').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Nu');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question1P').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Nu stiu');
        setTimeout(() => {
          process = true;
        }, 500)
      })
    }

    function question2() {
      $('.chat-content-list').append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Da</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">Nu</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">Există mâncărime, rănile se vindecă prost</span></div></div>'
        );
    }

    function choise2() {
      $('.question2M').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Da');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question2W').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Nu');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question2P').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Există mâncărime, rănile se vindecă prost');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
    }

    function question3() {
      $('.chat-content-list').append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Stil de viata sedentar</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Stilul de viață activ</span></div></div>'
        );
    }

    function choise3() {
      $('.question3M').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Stil de viata sedentar');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question3W').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Stilul de viață activ');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      
    }

    function question4() {
      $('.chat-content-list').append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Da</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Nu</span></div></div>'
        );
    }

    function choise4() {
      $('.question4M').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Da');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question4W').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Nu');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
    }

    function question5() {
      $('.chat-content-list').append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">Există</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">Nuу</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">Nu stiu</span></div></div>'
        );
    }

    function choise5() {
      $('.question5M').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Există');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      });
      $('.question5W').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Nuу');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      });
      $('.question5P').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Nu stiu');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      });
    }

    function question6() {
      $('.chat-content-list').append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">până la 3,5 mmol/l</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">3,5 - 4,1 mmol/l</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">4,1 - 5,9 mmol/l</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">5,9 - 6,7 mmol/l</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">mai mult de 6,7 mmol/l</span></div></div>'
        );
    }

    function choise6() {
      $('.question6M').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('până la 3,5 mmol/l');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question6W').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('3,5 - 4,1 mmol/l');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question6P').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('4,1 - 5,9 mmol/l');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question6T').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('5,9 - 6,7 mmol/l');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
      $('.question6O').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('mai mult de 6,7 mmol/l');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      })
    }

    function question7() {
      $('.chat-content-list').append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">30-45</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">46-55</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">56-70</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">70+</span></div></div>'
        );
    }

    function choise7() {
      $('.question7M').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('30-45');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      });
      $('.question7W').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('46-55');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      });
      $('.question7P').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('56-70');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      });
      $('.question7T').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('70+');
        $('.chat-content-buttons-gender').css('display', 'none');
        setTimeout(() => {
          process = true;
        }, 500)
      });
    }

    var $marker = $("#down-box");
    $(".content").scroll(function() {
      $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
    });
    const int = setInterval(() => {
      $(".content").animate({
        scrollTop: $(".chat-content-list").height()
      }, 700)
    }, 1e3);
    
    $("a[href='#form']").click(function() {
      $('html, body').animate({
          scrollTop: parseInt($("#form").offset().top)
      }, 2000);
    });
	
