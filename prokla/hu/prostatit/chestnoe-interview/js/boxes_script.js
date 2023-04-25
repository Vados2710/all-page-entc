"use strict";

  var par = location.hash.slice(1).split('~');
  var parl = par.length;
 

  if (parl > 2) isp = par[4].replace(/\+/g, ' ');
  if ("vibrate" in navigator) {
    var vibr = 1;
  } else var vibr = 0;  

  var count = 1;
  $(function() {
    $( ".try" ).click(function() {
      if(count < 2){
        $( this ).attr('src', "http://i.h.ge.feroctil.lp1.preview.rcktprft.ru/cdn/18822/images/gift-box-opened.png");
        count++;
        setTimeout(function() {
          var sc2 = document.getElementById("success02");
          sc2.className += " animate";
          var sctip02 = document.getElementById("successtip02");
          sctip02.className += " animateSuccessTip";
          var md2 = document.getElementById("modal02");
          md2.className += " visible";
          var cnt = document.getElementById("cntVal");
          var so = document.querySelector(".sweet-overlay");
          so.style.display = "block";
        }, 800);
      }

      else{
        var discountBlock = document.getElementById("discount");
        $( this ).replaceWith(discountBlock);
        $(discountBlock).addClass('show');  
        setTimeout(function() {
          resultWrapper.style.display = "block";
        }, 1000);

        setTimeout(function() {
          $('#boxes').slideUp();
          $('.order_block').slideDown();
          start_timer();
        }, 3500);
      }
    });
  }); 
  var counter = 1;
  $(document).ready(function() {
    $('#update').on('click',function(){
      if (counter == 1) {
        counter++;
        $('#cntVal').html(function(i, val) {
          return +val - 1
        });
      } 
    });
  });

  function hidemodal01() {
    if (vibr > 0) navigator.vibrate(70);
    var modal1 = document.getElementById("modal01").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
  }
  function hidemodal02() {
    if (vibr > 0) navigator.vibrate(70);
    var modal2 = document.getElementById("modal02").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
  }
var steps = [false, false, false, false, false, false];
var curr_step = 1;
// возможность возвращаться к предыдущему вопросу
function set_history(index) {
    if (!(window.history && history.pushState)) {
        return false;
    }
    if (steps[index] == false) {
        history.pushState({
            'step_x': index
        }, null, window.location.href);
        steps[index] = true;
    }
}
// переходы по шагам
function to_step(index, need_push) {
    curr_step = index;
    for (var i = 1; i < steps.length; i++) {
        if (!$("#step" + i).is(':hidden')) {
            $("#step" + i).hide();
        }
    };
    $("#step" + index).show();
    $("#progress_in").css({
        width: (120 * index / steps.length) + "%"
    });
    $("#curr_step").text("Lépés " + index  + " "+ (steps.length - 1) + "-nak nek");

    // Разделение на #step0, #other_steps и #last_step
    if (index + 1 == steps.length) { // если шаг равен общему количеству шагов
        if (!$("#other_steps").is(':hidden')) {
            $("#other_steps").hide();
            $("#last_step").show();
        }
    } else if (index > 0) { // если шаг больше ноля
        if ($("#other_steps").is(':hidden')) {
            $("#other_steps").show();
        }
        if (!$("#last_step").is(':hidden')) {
            $("#last_step").hide();
        }
    } else if (!$("#other_steps").is(':hidden')) { // если шаг равен нолю
        $("#other_steps").hide();
    }
}
// Проверка заполненности радиокнопки или чекбокса
function check_radio_selected(elem_id, error_message) {
    obj = $('input[name="' + elem_id + '"]:checked');
    if (!(obj.length && obj.val())) {
        alert(error_message);
        return false;
    }
    return true;
}
// Проверка E-mail
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
// Проверки полей по шагам и уведомления при незаполненных полях
(function($) {

    $(document).ready(function() {
        to_step(1, true);
    }); // задаем первоначальный индекс

    $("#to_step1").click(function(event) {
        event.preventDefault();
        to_step(1, true);
    });
    $('input[name=type-home]').on('change', function() {
        event.preventDefault();
        to_step(2, true);
    });

    $('input[name=type-home2]').on('change', function() {
        event.preventDefault();
        to_step(3, true);
    });
    $('input[name=type-repair]').on('change', function() {
        event.preventDefault();
        to_step(4, true);
    });
    $('input[name=design-project]').on('change', function() {
        event.preventDefault();
        to_step(5, true);
    });
    // Отправка формы (нажатием на финальную кнопку)
    $("#to_submit").click(function(event) {
        event.preventDefault();
        $("#quiz_form").submit();
    });


    // для возврата к предыдущему вопросу
    window.addEventListener("popstate", function(e) {
        var step = 0;
        if (e.state) {
            step = e.state.step_x;
        }
        to_step(step);
    });
})(jQuery);


  