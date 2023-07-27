(function () {


    //   const anchorst = document.querySelectorAll('a[href*="#"]');
    // 
    //   for (let anchort of anchorst) {
    //     anchort.addEventListener("click", function (e) {
    //       e.preventDefault();
    //       const blockID = anchort.getAttribute("href");
    // 
    //       document.querySelector("" + blockID).scrollIntoView({
    //         behavior: "smooth",
    //         block: "center",
    //       });
    //     });
    //   }



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
})();


