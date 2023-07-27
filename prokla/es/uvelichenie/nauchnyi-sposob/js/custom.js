
 (function($) {
    $.fn.emc = function(options) {
      
      var defaults = {
        key: [],
        scoring: "normal",
        progress: true
      },
      settings = $.extend(defaults,options),
      $quizItems = $('[data-quiz-item]'),
      $choices = $('[data-choices]'),
      itemCount = $quizItems.length,
      chosen = [],
      $option = null,
      $label = null;
      
     emcInit();
      
     if (settings.progress) {
        var $bar = $('#emc-progress'),
            $inner = $('<div id="emc-progress_inner"></div>'),
            $perc = $('<span id="emc-progress_ind">0/'+itemCount+'</span>');
        $bar.append($inner).prepend($perc);
      }
      
      function emcInit() {
        $quizItems.each( function(index,value) {
        var $this = $(this),
            $choiceEl = $this.find('.choices'),
            choices = $choiceEl.data('choices');
          for (var i = 0; i < choices.length; i++) {
            $option = $('<input name="'+index+'" id="'+index+'_'+i+'" type="radio">');
            $label = $('<label for="'+index+'_'+i+'">'+choices[i]+'</label>');
            $choiceEl.append($option).append($label);
              
            $option.on( 'change', function() {
              $this.addClass('item-correct');
              if ($('.dontUsed').length == 1) {
                $this.attr('id', 'focus-quest');
              } else {
                $this.removeAttr('id');
              };
              if (!($('section').hasClass('start-quizz'))) {
                // $('a').css('pointer-events', 'none');
                // $('img:not(.cross)').unwrap('a');
                // $('img:not(.cross)').attr('data-scroll', '#next-quest');
                $('.btn').css('pointer-events', 'auto');
                $('footer').css('display', 'block');
                setTimeout(function () {
                  $('footer').css('opacity', '1');
                }, 100);
                $('footer').fadeIn('slow', 'linear');
                $('#ssbutton').html('Responde todas las preguntas y obtén un descuento');
                $('#ssbutton').attr('id', 'ssbutton-fix');
              };
              $('section').addClass('start-quizz');
              $this.removeClass('dontUsed');
              return getChosen();
            }); 
          }
        });
      }
      
      function getChosen() {
        chosen = [];
        $choices.each( function() {
          var $inputs = $(this).find('input[type="radio"]');
          $inputs.each( function(index,value) {
            if($(this).is(':checked')) {
              chosen.push(index + 1);
            }
          });
        });
        getProgress();
      }
      
      function getProgress() {
        var prog = (chosen.length / itemCount) * 50 + "%",
            $submit = $('#emc-submit');
        if (settings.progress) {
          $perc.text('Tienes un ' + chosen.length * 10 + '% de descuento');
          $inner.css({width: prog});
        }
        if (chosen.length === itemCount) {
          $submit.addClass('ready-show');
          $('.question').css('display', 'none');
          $('.question-num').css('display', 'none');
          $('.choices').css('display', 'none');
  
          setTimeout(function () {
            $('#emc-progress').css('opacity', '0');
            $('#next-min').css('opacity', '0');
            setTimeout(function () {
              $('#emc-progress').css('display', 'none');
              $('#next-min').css('display', 'none');
              $('#progress-button').css('display', 'block');
              setTimeout(function () {
                $('#progress-button').css('opacity', '1');
              }, 100);
            }, 150);
          }, 1000);
  $('.start-quizz').not('#focus-quest').hide();
          $('#focus-quest .stock').css('display', 'block');
          $('a').css('pointer-events', 'auto');
      $('#quest-box section:not(#focus-quest)').css('display', 'none');
          $('img:not(.cross)').wrap('<a href=""></a>');
       
          $('section').removeClass('item-correct');
          if (!($('#quest-box').is(':empty'))) {
            $('#ssbutton-fix').css('display', 'none');
          } else {
            $('#ssbutton-fix').attr('id', 'ssbutton');
            $('#ssbutton').html('Obtén tu descuento');
          };
          $('html, body').animate({
            scrollTop: $('#focus-quest').offset().top
          }, 500);
        }
      }
    }
  }(jQuery));
  
  
  $(document).emc({
  });
  
  setTimeout(function () {
   // var target = $('#quest-box');
   // var targetPos = target.offset().top;
    var winHeight = $(window).height();
   // var scrollToElem = targetPos - winHeight;
    // var oneTimeScroll = false;
    // $(window).scroll(function () {
    //   var winScrollTop = $(this).scrollTop();

        // if ($('.dontUsed').length != 0) {
        //   $('.next-min').css('display', 'flex');
        // };
        $('#emc-progress_ind').css('width', 'calc(100% - 55px)');
        $('#emc-progress').css('width', 'calc(100% - 55px)');
        if ($('section').hasClass('start-quizz')) {
          $('#description-quest').css('display', 'none');
         // $('#quest-box').append($('#wrapper>.dontUsed'));
        };
  
        // if (!oneTimeScroll && $('section').hasClass('start-quizz') && $('.dontUsed').length != 0) {
        //   $('html, body').animate({
        //     scrollTop: $('#ssbutton-fix').offset().top
        //   }, 500);
        //   oneTimeScroll = true;
        // };
      
    });
  // }, 2000);
  
  // $('.next-min').click(function () {
  //   var scrollName = $(this).attr('data-scroll'),
  //     scrollElem = $(scrollName),
  //     scrollTop = scrollElem.offset().top;
  
  //   $('html, body').animate({
  //     scrollTop: scrollTop
  //   }, 500);
  // });
