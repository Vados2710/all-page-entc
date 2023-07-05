$(function () {
    
	
	 function Random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   var count = $('.pack_count:eq(0)').text(),
 	time = setTimeout(function t() {
 		count--;
 		$('.pack_count').text(count);
 		var b = Random(1, 75);
 		if (count > 4) {
 			time = setTimeout(t, b * 1000);
 		}
 	}, Random(5, 10)* 1000);

})





$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
});











$(function () {
    var nowDate = new Date();
    var countDownDiff = Math.ceil((24 * 60 * 60) - (nowDate.getHours() * 60 * 60 + nowDate
        .getMinutes() * 60 + nowDate.getSeconds()));
    var endDate = new Date(nowDate.getTime() + countDownDiff * 1000);
    setInterval(function () {
        var diffDate = new Date(endDate.getTime() - Date.now()),
            h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0' + diffDate.getHours(),
            m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0' + diffDate
            .getMinutes(),
            s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0' + diffDate
            .getSeconds();
        $('.hoursSH').html(h);
        $('.minutesSH').html(m);
        $('.secondsSH').html(s);
    }, 1000);
});