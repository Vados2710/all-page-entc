'use strict';

var headerButton = document.body.querySelector('.header__buttons');
var headerMenu = document.body.querySelector('.header__menu');
var hideElements = document.body.querySelectorAll('.hide');
var inputs = document.querySelectorAll('input');

headerButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    headerButton.classList.toggle('header__buttons--active');
    headerMenu.classList.toggle('header__menu--opened');

    for (var i = 0; i < hideElements.length; i++) {
        hideElements[i].classList.toggle('none');
    }

});

if (window.matchMedia("(max-width: 991px)").matches) {
    document.body.querySelector('.ingridients .list').classList.add('slider');

    var itemsBetter = document.body.querySelectorAll('.better ul li');
    var imagesBetter = document.body.querySelectorAll('.better li img');

    var itemsOrder = document.body.querySelectorAll('.order ul li');
    var imagesOrder = document.body.querySelectorAll('.order li img');

    var allHeaders = document.body.querySelectorAll('h2');

    for (var i = 0; i < itemsBetter.length; i++) {
        itemsBetter[i].classList.remove('wow');
        itemsBetter[i].classList.remove('fadeInUp');
        imagesBetter[i].classList.remove('wow');
        imagesBetter[i].classList.remove('rotateIn');
    }

    for (var j = 0; j < itemsOrder.length; j++) {
        itemsOrder[j].classList.remove('wow');
        itemsOrder[j].classList.remove('fadeInUp');
        imagesOrder[j].classList.remove('wow');
        imagesOrder[j].classList.remove('rotateIn');
    }

    for (var k = 0; k < allHeaders.length; k++) {
        allHeaders[k].classList.remove('fadeInUp');
    }

    document.body.querySelector('.couple p').classList.remove('fadeInUp');
    document.body.querySelector('.couple .button').classList.remove('fadeInDown');
    document.body.querySelector('.customers h2+p').classList.remove('fadeInUp');
}

if (window.matchMedia("(min-width: 991px)").matches) {
    document.body.querySelector('.ingridients .list').classList.remove('slider');

    var itemsBetter = document.body.querySelectorAll('.better ul li');
    var imagesBetter = document.body.querySelectorAll('.better li img');

    var itemsOrder = document.body.querySelectorAll('.order ul li');
    var imagesOrder = document.body.querySelectorAll('.order li img');

    var allHeaders = document.body.querySelectorAll('h2');

    for (var i = 0; i < itemsBetter.length; i++) {
        itemsBetter[i].classList.add('wow');
        itemsBetter[i].classList.add('fadeInUp');
        imagesBetter[i].classList.add('wow');
        imagesBetter[i].classList.add('rotateIn');
    }

    for (var j = 0; i < itemsOrder.length; j++) {
        itemsOrder[i].classList.add('wow');
        itemsOrder[i].classList.add('fadeInUp');
        imagesOrder[i].classList.add('wow');
        imagesOrder[i].classList.add('rotateIn');
    }

    for (var k = 0; k < allHeaders.length; k++) {
        allHeaders[k].classList.add('fadeInUp');
    }

    document.body.querySelector('.couple p').classList.add('fadeInUp');
    document.body.querySelector('.couple .button').classList.add('fadeInDown');
    document.body.querySelector('.customers h2+p').classList.add('fadeInUp');
}

var showLabels = function (target) {
    if (target.getAttribute('id') === 'name') {
        document.body.querySelector('label[for="name"]').classList.remove('visually-hidden');
        target.value = '';
    }

    if (target.getAttribute('id') === 'phone') {
        document.body.querySelector('label[for="phone"]').classList.remove('visually-hidden');
        target.value = '';
    }
}

var hideLabels = function (target) {
    if (target.getAttribute('id') === 'name') {
        document.body.querySelector('label[for="name"]').classList.add('visually-hidden');
    }

    if (target.getAttribute('id') === 'phone') {
        document.body.querySelector('label[for="phone"]').classList.add('visually-hidden');
    }
}

var preventEmpty = function (target) {
    if (target.value === '' || target.value === undefined || target.value === null) {
        if (target.getAttribute('id') === 'name') {
            target.value = '';
        }

        if (target.getAttribute('id') === 'phone') {
            target.value = '';
        }
    }
}

for (var j = 0; j < inputs.length; j++) {
    inputs[j].addEventListener('focusin', function (evt) {
        showLabels(evt.currentTarget);
    });

    inputs[j].addEventListener('focusout', function (evt) {
        hideLabels(evt.currentTarget);
        preventEmpty(evt.currentTarget);
    });
}

$(document).ready(function () {
    $(".button").on("click", function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $('#form').offset().top - 100
        }, 800);
    });

    $('.header__menu li a').on('click', function (evt) {
        evt.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $('' + evt.currentTarget.getAttribute('href')).offset().top - 100
        }, 400);
    });
});
