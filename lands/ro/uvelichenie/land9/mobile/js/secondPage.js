function changeSelectPack(TT){
    TT.closest('.item').addClass('active').siblings().removeClass('active');
    $('body').find('.js_changer').removeClass('active');
    TT.addClass('active');
    $('.change-package-selector [value="' + TT.attr('data-package-id') + '"]').prop("selected", true);
    if(typeof set_package_prices == 'function'){
        set_package_prices(TT.attr('data-package-id'));
    }
}
function reslide(slider){
    if($(window).width() < 992){
        slider.reloadSlider({
            mode: 'horizontal',
            minSlides: 1,
            maxSlides: 1,
            adaptiveHeight: true,
            touchEnabled: true,
            infiniteLoop: true,
            controls: true,
            pager: true,
            onSlideBefore: function($slideElement, oldIndex, newIndex){
                var ValOptionChg = $slideElement.attr('data-value');
                if(typeof set_package_prices == 'function'){
                    set_package_prices(ValOptionChg);
                }
                $("select[name='count_select'] option[value='" + ValOptionChg + "']").prop("selected", true);
            }
        });
    }else{
        slider.reloadSlider({
            mode: 'vertical',
            minSlides: 3,
            maxSlides: 3,
            infiniteLoop: false,
            adaptiveHeight: false,
            touchEnabled: false,
            controls: false,
            pager: false
        });
        changeSelectPack($('.js_changer[data-package-id=' + $('.change-package-selector').find('option:selected').val() + ']'));
    }
    slider.goToSlide($('.change-package-selector').find('option:selected').attr('data-slide-index'));
}
var slider,wdt;
$(document).ready(function(){
    wdt = $(window).width();
    $('.js_changer').on('touchend, click', function(e){
        e.preventDefault();
        var TT = $(this);
        changeSelectPack(TT);
        if(TT.attr('data-package-id') != 3){
            $('html, body').animate({scrollTop: $('.js_scrollForm').offset().top }, 300);
        }
        $('.js_scrollForm').addClass('active');
        setTimeout(function(){ $('.js_scrollForm').removeClass('active');},1000);
    });
    $('.change-package-selector').on('change', function() {
        changeSelectPack($('.js_changer[data-package-id=' + this.value + ']'));
        slider.goToSlide($(this).find('option:selected').attr('data-slide-index'));
    });
    $('.toform').on('touchend, click', function(e){
        e.preventDefault();
        var a = $('.js_submit'),b = a.closest('form');
        if($('#toform').length) a = $('#toform .js_submit'),b = a.closest('form#toform');
        if(b.length && a.is(':visible')){
            $("html,body").animate({scrollTop: b.offset().top}, 1000);
        }else{
            $('.s__main').hide();
            $('.hidden-window').fadeIn();
            $('html, body').animate({scrollTop: 0 }, 300);
            if($(window).width() < 992){
                slider = $('.bx-bx').bxSlider({
                    pagerCustom: '#bx-pager',
                    mode: 'horizontal',
                    minSlides: 1,
                    maxSlides: 1,
                    adaptiveHeight: true,
                    touchEnabled: true,
                    infiniteLoop: true,
                    controls: true,
                    pager: true,
                    onSlideBefore: function($slideElement, oldIndex, newIndex){
                        var ValOptionChg = $slideElement.attr('data-value');
                        if(typeof set_package_prices == 'function'){
                            set_package_prices(ValOptionChg);
                        }
                        $("select[name='count_select'] option[value='" + ValOptionChg + "']").prop("selected", true);
                    }
                });
            }else{
                slider = $('.bx-bx').bxSlider({
                    mode: 'vertical',
                    minSlides: 3,
                    maxSlides: 3,
                    infiniteLoop: false,
                    adaptiveHeight: false,
                    touchEnabled: false,
                    controls: false,
                    pager: false
                });
                if(typeof set_package_prices == 'function'){
                    set_package_prices(3);
                }
            }
            slider.goToSlide(1);
        }
        return false;
    });
});
$(window).resize(function(){
    if($(window).width() < 992){
        if(wdt > 991){
            reslide(slider);
            wdt = $(window).width();
        }
    }else{
        if(wdt < 992){
            reslide(slider);
            wdt = $(window).width();
        }
    }
});