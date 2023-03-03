document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('preloader');

        if (!preloader.classList.contains('cansel')) {
            preloader.classList.add('cansel');
        }
    }, 500);
};

function desktopInit() {

    $('.messageBox-title.little').html('Folosiţi scroll-ul');
    $('.messageBox-block.mouse').html('');
    $('.startGameMob').html('Începeţi jocul');

    let notDone = 1;

    function finishFunction() {
        notDone = 0;

        $('.final-message').removeClass('hiddenopacity');
        $('.final-message').addClass('visibleopacity');

        $('video').remove();

        $('#scrollHelpBlock').removeClass('visible');
        $('#scrollHelpBlock').addClass('hidden');

        $('#MainContainerBg').css('display', 'block');
    };

    function initScroll() {
        let firstTime = 0;

        $(document).on('wheel', function () {
            if (firstTime == 0) {
                mainScroll();
                firstTime = 1;
            }
        });
    }


    function mainScroll() {

        let timer = 0;

        let timerId = setInterval(function () {
            timer++;
        }, 500);

        document.querySelector('video').currentTime = 0;

        $(document).on('wheel', function () {
            if (notDone == 1) {

                timer = 0;

                $('video').removeClass('visible');
                $('video').addClass('hidden');

                document.getElementById('e8os').pause();
                document.getElementById('3cue').pause();

                document.getElementById('e8os').currentTime = 0;
                document.getElementById('3cue').currentTime = 0;

                $('#mh87').removeClass('hidden');
                $('#mh87').addClass('visible');
                document.getElementById('mh87').play();

                $('#startGameMB').removeClass('visible');
                $('#startGameMB').addClass('hidden');

                $('#gameProgress').removeClass('hidden');
                $('#gameProgress').addClass('visible');

                $('#scrollHelpBlock').removeClass('visible');
                $('#scrollHelpBlock').addClass('hidden');

                let percents = document.getElementById('mh87').currentTime / 0.15;
                $('#progressBarBlock').css('left', percents + '%');

                if (percents > (($('.gameProgress-w').width()-20)*100)/$('.gameProgress-w').width()) {
                    clearInterval(main);
                    clearInterval(timerId);
                    $('#gameProgress').removeClass('visible');
                    $('#gameProgress').addClass('hidden');
                    $('#finBoxMB').removeClass('hidden');
                    $('#finBoxMB').addClass('visible');
                    finishFunction();
                }

            }
        });

        let main = setInterval(function () {
            if (timer > 2) {

                $('video').removeClass('visible');
                $('video').addClass('hidden');
                document.getElementById('e8os').pause();
                document.getElementById('mh87').pause();

                document.getElementById('e8os').currentTime = 0;
                document.getElementById('mh87').currentTime = 0;

                $('#3cue').removeClass('hidden');
                $('#3cue').addClass('visible');
                document.getElementById('3cue').play();

                $('#gameProgress').removeClass('visible');
                $('#gameProgress').addClass('hidden');

                $('#scrollHelpBlock').removeClass('hidden');
                $('#scrollHelpBlock').addClass('visible');

                $('#progressBarBlock').css('left', '0');
                progressN = 0;

            }
        }, 250);

        $('a.nav-link').on('click', function () {
            clearInterval(main);
            clearInterval(timerId);
        });
    };


    $('#startGame').on('click', function () {
        $('#ageSelectMB').removeClass('visible');
        $('#ageSelectMB').addClass('hidden');

        $('#startGameMB').removeClass('hidden');
        $('#startGameMB').addClass('visible');

        initScroll();
    });


    $('#preStartHasSound').on('click', function () {
        $('video').prop("muted", 0)
        $('#preStartNoSound').removeClass('yes');
        $('#preStartNoSound').addClass('no');
        $('#preStartHasSound').removeClass('no');
        $('#preStartHasSound').addClass('yes');
    });

    $('#preStartNoSound').on('click', function () {
        $('video').prop("muted", 1)
        $('#preStartHasSound').removeClass('yes');
        $('#preStartHasSound').addClass('no');
        $('#preStartNoSound').removeClass('no');
        $('#preStartNoSound').addClass('yes');
    });

    $('a.nav-link').on('click', function () {
        $('.navbar-collapse').removeClass('in');

        $('.article').removeClass('visible');
        $('.article').addClass('hidden');

        let link = $(this).attr('href');
        $(link).removeClass('hidden');
        $(link).addClass('visible');

        $('#GameContainer').removeClass('visible');
        $('#GameContainer').addClass('hidden');

        $('video').removeClass('visible');
        $('video').addClass('hidden');

        $('a.nav-link').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
};

function mobileInit() {

    $('.messageBox-title.little').html('Folosiţi clicuri');
    $('.messageBox-block.mouse').html('Folosiţi clicuri');
    $('.startGameMob').html('Începeţi jocul');

    let notDone = 1;

    function finishFunction() {
        notDone = 0;

        $('.final-message').removeClass('hiddenopacity');
        $('.final-message').addClass('visibleopacity');

        $('video').remove();

        $('#scrollHelpBlock').removeClass('visible');
        $('#scrollHelpBlock').addClass('hidden');

        $('#MainContainerBg').css('display', 'block');

    };

    function initScroll() {
        let firstTime = 0;

        $(document).on('click', function (e) {
            if (firstTime == 0 && e.target != document.querySelector('.navbar-toggle') && e.target != document.querySelector('.icon-bar')) {
                mainScroll();
                firstTime = 1;
            }
        });
    }


    function mainScroll() {

        let timer = 0;

        let timerId = setInterval(function () {
            timer++;
        }, 500);

        document.querySelector('video').currentTime = 0;

        $(document).on('click', function (e) {
            if (notDone == 1 && e.target != document.querySelector('.navbar-toggle') && e.target != document.querySelector('.icon-bar')) {

                timer = 0;

                $('video').removeClass('visible');
                $('video').addClass('hidden');

                document.getElementById('e8os').pause();
                document.getElementById('3cue').pause();

                document.getElementById('e8os').currentTime = 0;
                document.getElementById('3cue').currentTime = 0;

                $('#mh87').removeClass('hidden');
                $('#mh87').addClass('visible');
                document.getElementById('mh87').play();

                $('#startGameMB').removeClass('visible');
                $('#startGameMB').addClass('hidden');

                $('#gameProgress').removeClass('hidden');
                $('#gameProgress').addClass('visible');

                $('#scrollHelpBlock').removeClass('visible');
                $('#scrollHelpBlock').addClass('hidden');

                let percents = document.getElementById('mh87').currentTime / 0.15;
                $('#progressBarBlock').css('left', percents + '%');

                if (percents > (($('.gameProgress-w').width()-20)*100)/$('.gameProgress-w').width()) {
                    clearInterval(main);
                    clearInterval(timerId);
                    $('#gameProgress').removeClass('visible');
                    $('#gameProgress').addClass('hidden');
                    $('#finBoxMB').removeClass('hidden');
                    $('#finBoxMB').addClass('visible');
                    finishFunction();
                }

            }
        });

        let main = setInterval(function () {
            if (timer > 2) {

                $('video').removeClass('visible');
                $('video').addClass('hidden');
                document.getElementById('e8os').pause();
                document.getElementById('mh87').pause();

                document.getElementById('e8os').currentTime = 0;
                document.getElementById('mh87').currentTime = 0;

                $('#3cue').removeClass('hidden');
                $('#3cue').addClass('visible');
                document.getElementById('3cue').play();

                $('#gameProgress').removeClass('visible');
                $('#gameProgress').addClass('hidden');

                $('#scrollHelpBlock').removeClass('hidden');
                $('#scrollHelpBlock').addClass('visible');

                $('#progressBarBlock').css('left', '0');
                progressN = 0;

            }
        }, 250);


        $('a.nav-link').on('click', function () {
            clearInterval(main);
            clearInterval(timerId);
        });
    };


    $('#startGame').on('click', function () {
        $('#ageSelectMB').removeClass('visible');
        $('#ageSelectMB').addClass('hidden');

        $('#startGameMB').removeClass('hidden');
        $('#startGameMB').addClass('visible');

        initScroll();
    });


    $('#preStartHasSound').on('click', function () {
        $('video').prop("muted", 0);
        $('#preStartNoSound').removeClass('yes');
        $('#preStartNoSound').addClass('no');
        $('#preStartHasSound').removeClass('no');
        $('#preStartHasSound').addClass('yes');
    });

    $('#preStartNoSound').on('click', function () {
        $('video').prop("muted", 1);
        $('#preStartHasSound').removeClass('yes');
        $('#preStartHasSound').addClass('no');
        $('#preStartNoSound').removeClass('no');
        $('#preStartNoSound').addClass('yes');
    });


    $('a.nav-link').on('click', function () {
        $('.navbar-collapse').removeClass('in');

        $('.article').removeClass('visible');
        $('.article').addClass('hidden');

        let link = $(this).attr('href');
        $(link).removeClass('hidden');
        $(link).addClass('visible');

        $('#GameContainer').removeClass('visible');
        $('#GameContainer').addClass('hidden');

        $('video').removeClass('visible');
        $('video').addClass('hidden');

        $('a.nav-link').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
};

$('.navbar-toggle').on('click', function () {
    $('.navbar-collapse').toggleClass('in');
});

$('.navbar-collapse').on('click', function (e) {
    if (e.target != $('.nav.navbar-nav')[0] && e.target != $('.nav.navbar-nav li')[0] && e.target != $('.nav.navbar-nav li a')[0]) {
        $('.navbar-collapse').removeClass('in');
    } 
});

if (document.documentElement.clientWidth < 1024) {
    mobileInit();
} else {
    desktopInit();
};

$(window).resize(function () {
    if (document.documentElement.clientWidth < 1024) {
        mobileInit();
    } else {
        desktopInit();
    };
});

$('.article').on('scroll', function () {
    if (document.documentElement.clientWidth < 768) {
        let menuHeight = 90;
        if ($('#chtokak').scrollTop() > menuHeight || $('#sostav').scrollTop() > menuHeight || $('#pokaz').scrollTop() > menuHeight || $('#preim').scrollTop() > menuHeight || $('#contact').scrollTop() > menuHeight) {
            $('#HeaderBlock').fadeOut();
        } else {
            $('#HeaderBlock').fadeIn();
        }
    }
});
