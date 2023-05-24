let result = {}
let urlSaveLog = './script/review.php'
window.visionTest = {
    next_show: () => {
        $('.first-btn').click(() => {
            $(".limit").slideToggle("slow")
            $(".pewpewpew").slideToggle("slow")
        })
    },
    interview: () => {
        $('.less').click(function () {
            result['user_response'] = $(this).text();
            // result['user_response'] = `less 50`;
            window.visionTest.send()
            window.visionTest.hide()
            window.visionTest.show()
        })
        $('.more').click(function () {
            result['user_response'] = $(this).text();
            // result['user_response'] = `more 50`;
            window.visionTest.send()
            window.visionTest.hide()
            window.visionTest.show()
        })
    },
    hide: () => {
        $(".step_one").slideToggle("slow")
        // $('.step_one').css('display', 'none');
    },
    //test_two
    show: () => {
        $(".step_two").slideToggle("slow")
        window.visionTest.next_step()
    },
    next_step: () => {
        $('.complaint__button').click(function () {
            window.visionTest.show_step_three()
            $(".step_two").css('display', 'none');
        })
    },
    show_step_three: () => {
        $(".step_three").slideToggle("slow")
        window.visionTest.next_step_four()
    },

    next_step_four: () => {
        $('.test_button').click(function () {
            $(".step_three__test_two").slideToggle("slow")
            $(".test_button").css('display', 'none');
            $(".step_three__test_one").css('display', 'none');
            //задержка в несколько сек
            setTimeout(() => {
                $(".step_three").slideToggle("slow")
                $(".response").css('display', 'block');
                window.visionTest.set()
            }, 5100)
        })
    },
    set: () => {
        setTimeout(() => {
            $(".response").slideToggle("slow")
            $(".step_four").slideToggle("slow")
        }, 5000)
    },

    rand_int: (max = 35, min = 25) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    render_rand_int: () => {
        $('.randomPersent').text(window.visionTest.rand_int())
    },
    send: () => {
        let resul = {}
        resul['sobaka'] = result;
        console.log(resul)
        let request = $.ajax({
            type: "GET",
            url: urlSaveLog,
            enctype: 'multipart/form-data',
            data: resul,
        });
        request.done(function () {
            console.log('Ok')
        });
        request.fail(function (jqXHR, textStatus) {
            console.log("Request failed: " + textStatus)
        })
    },
}

$(document).ready(function () {
    window.visionTest.interview()
    window.visionTest.render_rand_int()
    window.visionTest.next_show()
})

$('#order_form').submit(function (ev) {
    debugger
    console.log(result)
    ev.preventDefault();
    let request = $.ajax({
        type: "GET",
        url: urlSaveLog,
        enctype: 'multipart/form-data',
        data: result,
    });
    request.done(function () {
        console.log('Ok')
    });
    request.fail(function (jqXHR, textStatus) {
        console.log("Request failed: " + textStatus)
    })
})