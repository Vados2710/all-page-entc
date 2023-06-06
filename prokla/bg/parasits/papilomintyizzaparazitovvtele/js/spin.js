$(document).ready(function() {
    // -------------spin-------------------
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    var wheel = document.querySelector('.wheel-img');

    $('.active').click(function() {
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function() {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function() {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
            }, 10000);
            wheel.classList.add('rotated');
        }
    })
    var closePopup = document.querySelector('.close-popup');
    $('.close-popup, .pop-up-button').click(function(e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
        var top = $('.spin-wrapper').offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });


    // -------------TIMER------------------------
    var fiveSeconds = new Date().getTime() + 600000;
    $('#clock').countdown(fiveSeconds, { elapse: true })
        .on('update.countdown', function(event) {
            var $this = $(this);
            if (event.elapsed) {
                $this.html("00 : 00");
            } else {
                $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
            }
        });


    // --------------SCROLL-------------------
    $("a").on("touchend, click", function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.spin-wrapper').offset().top }, 400);
    });

    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");


    // -----------CHAT---------------
    setTimeout(function() {
        $('.widget').fadeIn(500);
    }, 15000)
    var flag = false;
    $('.head').click(function() {
        $('.widget').fadeOut(500);

        setTimeout(function() {
            $('.write_text').removeAttr('disabled');
        }, 8500);

        $('#chat__wrapper').toggleClass('height_active');

        if (flag == false) {
            flag = true;

            var el = document.getElementsByClassName('chat__list')[0];
            var jqEl = $('.chat__list');
            var report;
            var iGuest = 0;

            $('.send').click(function() {
                submit();
            });

            $(".write_text").keypress(function(e) {
                if (e.which == 13) {
                    submit();
                }
            });

            var manager = $('.msg_manageer span');
            var guest = $('.msg_manageer_after span');
            var guestCount = $('.msg_manageer_after span').length - 1;
            var i = 0;
            var iGuest = 0;
            var itemCount = $('.msg_manageer span').length - 1;
            var toScroll;
            var isTyping = true;

            var e = setInterval(function() {
                if (i <= itemCount) {
                    if (i == itemCount) {
                        isTyping = false;
                    }
                    addMassenge(manager, i);
                    toScroll = el.scrollHeight;
                    if (el.scrollHeight >= $('.chat__list').height()) {
                        forScroll();
                    }
                    i++;
                } else {
                    clearInterval(e);
                }

            }, 4000);

            function addMassenge(container, counter) {
                $('.loader').fadeToggle('.is_typing');
                $(".add_messages").append('<div class="msg_wrap"><div class="massange">' + $(container[counter]).html() + '<div class="msg_wrap_corner"></div></div></div>');
                if (isTyping) {
                    $('.loader').toggle('.is_typing');
                }
                if (i == itemCount + 1 && counter == guestCount) {
                    setTimeout(function() {
                        if (i == itemCount + 1 && counter == guestCount) {
                            $('.form_js').show();
                            forScroll();
                        }
                    }, 3000);
                }


            }


            function sendMessage() {
                $('.add_messages').append('<div class="messanger_guest"><div class="massange_guest">' + report + '<div class="msg_wrap_corner"></div></div></div>');
                $('.write_text').val('');
                if (el.scrollHeight >= $('.chat__list').height()) {
                    forScroll();
                }
                isTyping = true;
                $('.loader').toggle('.is_typing');
                $('.is_typing').css({ 'bottom': '0' })
            }

            function forScroll() {
                jqEl.css({
                    'height': '100%',
                    'overflow-y': 'scroll'
                });
                jqEl.scrollTop(toScroll);
            }

            function submit() {
                report = $('.write_text').val();
                if ($('.write_text').val() !== "") {
                    sendMessage();
                    $('.write__massenge').fadeOut(200);

                    var timerGuest = setInterval(function() {
                        if (iGuest <= guest.length - 1) {
                            if (iGuest == guest.length - 1) {
                                isTyping = false;
                            }
                            addMassenge(guest, iGuest);
                            $('.chat__list').scrollTop(10000);
                            iGuest++;
                        } else {

                            clearInterval(timerGuest);
                        }
                    }, 4000);
                }
            }
        }
        if (window.screen.width <= 768) {
            if ($('#chat__wrapper').hasClass('height_active')) {
                $('.head .manager span').css({
                    'display': 'block'
                });
            } else {
                $('.head .manager span').css({
                    'display': 'none'
                });
            }
        }
    });
});