$(function() {

    $.fn.isOnScreen = function(shift) {
        if (!shift) {
            shift = 0;
        }
        var viewport = {};
        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + $(window).height();
        var bounds = {};
        bounds.top = this.offset().top + shift;
        bounds.bottom = bounds.top + this.outerHeight() - shift;
        return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
    };

    var _bxInnit = function(elem, opt) {

        if (!$(elem).length) return false;

        var defaultOptions = {
            view: 'all'
        }
        var currentOpt = $.extend(defaultOptions, opt);
        var init = {
            breakPoint: 992,
            sliderActive: false,
            initBreakpoint: null,
            resizeBreakpointMore: null,
            resizeBreakpointLess: null,
            windowWidht: window.innerWidth
        }


        var flag = false;

        var slider;


        var sliderClone = $(elem).clone();


        // Объект с параметрами для слайдера
        var options = opt;

        // Создаем слайдер
        function createSlider() {
            slider = $(elem).bxSlider(options);
            return true;
        }

        if (flag) {
            createSlider();
            init.sliderActive = true;
        }


        function createBreakpoints() {
            switch (currentOpt.view) {
                case 'mobile':
                    init.initBreakpoint = init.windowWidht < init.breakPoint;
                    init.resizeBreakpointMore = init.windowWidht >= init.breakPoint;
                    init.resizeBreakpointLess = init.windowWidht < init.breakPoint;
                    break;

                case 'desktop':
                    init.initBreakpoint = init.windowWidht >= init.breakPoint;
                    init.resizeBreakpointMore = init.windowWidht < init.breakPoint;
                    init.resizeBreakpointLess = init.windowWidht >= init.breakPoint;
                    init.resizeBreakpointLess;
                    break;

                case 'all':
                    init.initBreakpoint = true;
                    init.resizeBreakpointMore = false;
                    init.resizeBreakpointLess = false;
                    break;
            }
        }

        createBreakpoints();


        // Загрузка страницы
        if (init.initBreakpoint) {
            createSlider();
            init.sliderActive = true;
        }
        // Отслеживаем события при ресайзе

        $(window).resize(function() {
            // Если окно больше или равено breakPoint
            // Вырубаем слайдер и ставим ФЛАГ в false
            // Вставляем начальный вариант html разметки (без лишнего кода от слайдера)
            init.windowWidht = window.innerWidth;

            createBreakpoints();

            if (init.resizeBreakpointMore) {
                if (init.sliderActive) {
                    slider.destroySlider();
                    init.sliderActive = false;
                    slider.replaceWith(sliderClone.clone());
                }
            }

            // Если окно меньше breakPoint
            // Вырубаем слайдер и ставим ФЛАГ в true
            if (init.resizeBreakpointLess) {
                if (!init.sliderActive) {
                    createSlider();
                    init.sliderActive = true;
                }
            }
        });

        var a, b;
        a = 1;
        b = 0;

        $(window).on('scroll', function() {
            if (init.sliderActive == true) {
                if (slider.isOnScreen()) {
                    b = 1;
                } else {
                    b = 0;
                }

                if (a == b) {
                    slider.startAuto();
                } else {
                    slider.stopAuto();
                }
            }

        });
    }


    $(function() {
        _bxInnit('.how_slider', {
            view: 'mobile',
            adaptiveHeight: true,
            swipeThreshold: 40,
            controls: true,
            pager: false,
            auto: true,
            pause: 10000,
            autoHover: true,
            infiniteLoop: true,
            slideMargin: 3,
            nextText: '',
            prevText: ''
        });

        _bxInnit('.reviews_slider', {
            view: 'mobile',
            adaptiveHeight: true,
            swipeThreshold: 40,
            controls: true,
            pager: false,
            auto: true,
            pause: 10000,
            autoHover: true,
            infiniteLoop: true,
            slideMargin: 3,
            nextText: '',
            prevText: ''
        });

        _bxInnit('.advantages_slider', {
            view: 'mobile',
            adaptiveHeight: true,
            swipeThreshold: 40,
            controls: true,
            pager: false,
            auto: true,
            pause: 10000,
            autoHover: true,
            infiniteLoop: true,
            slideMargin: 3,
            nextText: '',
            prevText: ''
        });

    })

    $(".results_slider").slick({
        slidesToScroll: 1,
        autoplay: 1,
        arrows: 0,
        dots: !0,
        adaptiveHeight: 0
    })


    var toForm = function() {
        $('.pre_toform').click(function(e) {
            e.preventDefault();
            var a = $('.js_submit');
            var b = a.closest('form');

            if ($('form#toform').length) {
                a = $('#toform .js_submit');
                b = a.closest('form#toform');
            }

            if (b.length && a.is(':visible')) {
                $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
            }
            return false;
        });
    }


    toForm();

    function timer(count) {
        var _currentDate = new Date();
        var count = count || 15;
        var _toDate = new Date(
            _currentDate.getFullYear(),
            _currentDate.getMonth(),
            _currentDate.getDate(),
            _currentDate.getHours(),
            _currentDate.getMinutes() + count, 1);
        $elem = $('.counter');

        $elem.each(function() {
            var
                $this = $(this),
                hours = $this.find('.counter-hours'),
                min = $this.find('.counter-min'),
                sec = $this.find('.counter-sec');
            $this.countdown(_toDate, function(e) {
                hours.text('' + e.strftime('%H'));
                min.text('' + e.strftime('%M'));
                sec.text('' + e.strftime('%S'));
            });
        })
    };
    timer();


    $('.gen_box').on('click touchstart', function() {
        $('.gen_box').removeClass('checked');
        $(this).addClass('checked');
    });

    $('.calc').on('click touchstart', function() {
        var that = $(this);
        var gender, age, weight, height, IMT, validate;

        if ($('.gen_box.checked').hasClass('man')) {
            gender = 1;
        } else {
            gender = 0;
        }

        validate = 0;
        age = weight = height = 0;

        $('.calculator_input input').each(function() {
            if (!$(this).val() || $(this).val() == '') {
                var that_input = $(this);
                $(this).addClass('red_border');
                setTimeout(function() {
                    that_input.removeClass('red_border');
                }, 2000);

            } else {
                validate++;
            }
        });

        age = $('.calculator_input input#age').val();
        weight = $('.calculator_input input#weight').val();
        height = $('.calculator_input input#height').val() / 100;

        IMT = weight / (height * height);


        if (validate == 3) {
            $('.calculator,.ring').hide();
            $('.calc_res,.doc_res').fadeIn();
            if (((age > 18) && (age < 25) && (IMT >= 19) && (IMT <= 24)) ||
                ((age > 24) && (age < 35) && (IMT >= 20) && (IMT <= 25)) ||
                ((age > 34) && (age < 45) && (IMT >= 21) && (IMT <= 26)) ||
                ((age > 44) && (age < 55) && (IMT >= 22) && (IMT <= 27)) ||
                ((age > 54) && (age < 65) && (IMT >= 23) && (IMT <= 28)) ||
                ((age > 65) && (IMT >= 24) && (IMT <= 29)) ||
                ((IMT >= 18.5) && (IMT < 25))) {
                $('.res_2').fadeIn();
                return false;
            } else if (IMT < 18.5) {
                $('.res_1').fadeIn();
            } else if ((IMT > 25) && (IMT <= 30)) {
                $('.res_3').fadeIn();
            } else if ((IMT > 30) && (IMT < 35)) {
                $('.res_4').fadeIn();
            } else if ((IMT >= 35) && (IMT < 40)) {
                $('.res_5').fadeIn();
            } else if ((IMT > 40)) {
                $('.res_6').fadeIn();
            }

            setTimeout(function() {
                $('.calc_res .btn').css({
                    'pointer-events': 'inherit'
                });
            }, 500);

        }


    });
    $('.only_number').on('keydown', function(event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 187 || event.keyCode == 65 && event.ctrlKey === true || event.keyCode >= 35 && event.keyCode <= 39) {
            return;
        } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });

});