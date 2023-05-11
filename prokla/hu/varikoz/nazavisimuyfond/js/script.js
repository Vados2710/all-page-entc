$(document).ready(function () {
    $(".btn").on("click", function (e) {
        e.preventDefault(), $(this).parents(".base_bl").hide(), $(this).parents(".base_bl").next().fadeIn();
        window.scrollTo(0, 0);
    }), $("label:not(.accum-comment), .submit-answer").on("click", function () {
        var e = $(this);
        setTimeout(function () {
            e.parents(".base_bl").hide(), e.parents(".base_bl").next().fadeIn()
        }, 500)
    }), $(".btn2").on("click", function () {
        $("ul").fadeIn()
    });

    $(".block_answer select").on("change", function () {
        $(this).closest(".block_answer").find(".submit-answer").removeAttr('disabled')
    })

    $(".accum-comment").on("click", function () {
        const accums = $(this).closest(".block_answer").find(".accum-comment:checked")
        if (accums.length) {
            $(this).closest(".block_answer").find(".submit-answer").removeAttr('disabled')
        } else {
            $(this).closest(".block_answer").find(".submit-answer").attr('disabled', true)
        }
    })

    $(".submit-answer").on("click", function () {
        const accums = $(this).closest(".block_answer").find(".accum-comment:checked")
        if (accums.length) {
            const value = Array.from(accums).reduce((acc, el) => {
                return acc += `${el.value}, `
            }, '')
            $(this).closest(".block_answer").find(".add-to-comment").val(value)
        }
    })

    $(".last-question").on("click", function () {

        let message = "";

        $('.add-to-comment').each((i, el) => {
            const question = $(el).closest('.body_cont').find('h3 span').text()
            const addition = $(el).data('addition') || ''
            const value = $(el).val()

            message += `${question} : ${addition} ${value} \n`
        })

        $('form input[name="comment"]').val(message)
    })
});

var year = new Date().getFullYear();
var placeY = document.getElementsByClassName("year");
for (let i = 0; i < placeY.length; i++) {
  var elemY = placeY[i];
  elemY.innerHTML = year;
}