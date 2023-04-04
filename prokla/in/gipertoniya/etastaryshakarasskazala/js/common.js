$(document).ready(function () {
   
   
	function Random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var count = $('.countBox:eq(0)').text(),
		time = setTimeout(function t() {
			count--;
			$('.countBox').text(count);
			var b = Random(1, 75);
			if (count > 4) {
				time = setTimeout(t, b * 1000);
			}
		}, Random(5, 10) * 2000);
  
});