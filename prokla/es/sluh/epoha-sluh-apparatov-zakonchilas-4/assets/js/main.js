(function () {



    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(_href).offset().top + "px"
            });
            return false;
        });
    });

   

    function printDate(e) {
        var t = new Date();
        t.setDate(t.getDate() + e + 1);
        var r = "";
        t.getDate() < 10 && (r = "0"), (r += t.getDate());
        var o = "";
        return (
            t.getMonth() + 1 < 10 && (o = "0"),
            r + "." + (o += t.getMonth() + 1) + "." + t.getFullYear()
        );
    }

    var dateEls = document.querySelectorAll(".date");
    for (const e of dateEls) {
        var dateAdjust = e.dataset.adjust;
        e.innerHTML = printDate(-1 * dateAdjust);
    }


  
        (function date(post, comment) {
            var now = new Date(),
                weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
                d = weekAgo.getDate(),
                m = weekAgo.getMonth() + 1,
                y = weekAgo.getFullYear();
            post[0].textContent = buildDate(d, m, y);
            for (var i = 0; i < comment.length; i++) {
                var commentDate = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), Math.round(weekAgo.getDate() +
                        (i * 0.8))),
                    chooseDate = commentDate < now ? commentDate : now;
                comment[i].textContent = buildDate(chooseDate.getDate(), chooseDate.getMonth() + 1, chooseDate
                    .getFullYear())
            }

            function zero(val) {
                return val.toString().length === 1 ? '0' + val : val;
            }

            function buildDate(d, m, y) {
                return [zero(d), zero(m), y, ].join('.');
            }
        })(document.getElementsByClassName('post-date'), document.getElementsByClassName('coment__date'));
   

})();


