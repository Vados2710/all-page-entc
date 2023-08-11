$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$(document).on('keydown', '[data-only-numbers]', function (e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});




var calcLog = [];
$(function () {

    $('.pre_toform').click(function () {
         $("html, body").animate({
             scrollTop: $("#order_form").offset().top - 300
         }, 700);
         return false;
     });
	

    $(document).on('click touch', '#runCalc', function (e) {
        $('#calc').trigger('submit');
        return false;
    });

    $(document).on('submit', '#calc', function (e) {
        var data = $(this).serializeObject();
        var calcSummWeight = 0;
        var calcWeight = 0;
        calcLog = [];
        data.age = parseInt(data.age);
        data.weight = parseInt(data.weight);
        data.want = parseInt(data.want);

        ///////////
        // Возраст
        if (data.age <= 35) {
            calcWeight = 0;
        } else if (data.age <= 50) {
            calcWeight = -1;
        } else {
            calcWeight = -2;
        }
        calcLog.push('age: (' + data.age + ') = ' + calcWeight);
        calcSummWeight += calcWeight;

        ///////////
        // Вес
        if (data.weight <= 70 || data.weight >= 100) {
            calcWeight = -2;
        } else if (data.weight <= 85) {
            calcWeight = 0;
        } else if (data.weight <= 99) {
            calcWeight = -1;
        } else {
            calcWeight = 0;
        }
        calcLog.push('weight: (' + data.weight + ') = ' + calcWeight);
        calcSummWeight += calcWeight;

        ///////////
        // Кол-во раз
        if (data.want <= 1) {
            calcWeight = -2;
        } else if (data.want <= 3) {
            calcWeight = -1;
        } else {
            calcWeight = 0;
        }
        calcLog.push('want: (' + data.want + ') = ' + calcWeight);
        calcSummWeight += calcWeight;

        ///////////
        // Другие параметры
        $.each(data, function (k, v) {
            if ($.inArray(k, ['age', 'weight', 'want']) !== -1) {
                return;
            }
            calcLog.push(k + ': ' + v);
            calcSummWeight += parseInt(v);
        });

        ///////////
        // Вывод результата
		$(this).parent().addClass('hidd');
        if (calcSummWeight >= -1 && calcSummWeight <= 0) {
            $('#result-good').addClass('visible');
        } else if (calcSummWeight >= -3 && calcSummWeight <= 0) {
            $('#result-norm').addClass('visible');
        } else {
            $('#result-bad').addClass('visible');
        }

        e.preventDefault();
        return false;
    });
});