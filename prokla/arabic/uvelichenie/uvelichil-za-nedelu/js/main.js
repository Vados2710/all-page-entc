$(document).ready(function () {

	var arr = $('.vk-comment-load.hidden');

	
	var i = arr.length;
	var showComm = setInterval(setInt, 7000);

	function setInt() {
		if(i >= 0) {
			i--;
			$(arr[i]).fadeIn();
		} else {
			clearInterval(showCom);
		}
	}

});