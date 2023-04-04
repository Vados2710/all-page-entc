$(document).ready(function () {

    var app = {};
    app.winWidth = window.innerWidth;
    app.selector = '#slider-1 .after-before-wrap';
    app.adaptiv = 991;
    app.mobile = {
        minSlides: 1,
        maxSlides: 1,
        adaptiveHeight: true,
        infiniteLoop: true,
        controls:false
    }
    if (app.winWidth > app.adaptiv) {
        app.iden = 0;
    } else {
        app.iden = 1;
    }

    $(document).ready(function () {
        app.slideBuffer = $(app.selector).html();
    });


    $(window).load(function () {
        if (app.iden) app.slide = $('#slider-1 .after-before').bxSlider(app.mobile);
    });

    $(window).resize(function () {
        app.winWidth = window.innerWidth;

        if (app.winWidth > app.adaptiv && app.iden) {
            app.slide.destroySlider();
            app.iden = 0;


        } else if (app.winWidth <= app.adaptiv && !app.iden) {
            app.slide = $('#slider-1 .after-before').bxSlider(app.mobile);
            app.iden = 1;

        }
    });

    var app2 = {};
    app2.winWidth = window.innerWidth;
    app2.selector = '#slider-2 .after-before-wrap';
    app2.adaptiv = 991;
    app2.mobile = {
        minSlides: 1,
        maxSlides: 1,
        adaptiveHeight: true,
        infiniteLoop: true,
        pager:false
    }
    if (app2.winWidth > app2.adaptiv) {
        app2.iden = 0;
    } else {
        app2.iden = 1;
    }

    $(document).ready(function () {
        app2.slideBuffer = $(app2.selector).html();
    });


    $(window).load(function () {
        if (app2.iden) app2.slide = $('#slider-2 .after-before').bxSlider(app2.mobile);
    });

    $(window).resize(function () {
        app2.winWidth = window.innerWidth;

        if (app2.winWidth > app2.adaptiv && app2.iden) {
            app2.slide.destroySlider();
            app2.iden = 0;


        } else if (app2.winWidth <= app2.adaptiv && !app2.iden) {
            app2.slide = $('#slider-2 .after-before').bxSlider(app2.mobile);
            app2.iden = 1;

        }
    });

});
