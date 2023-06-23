(function () {
	var post = document.getElementsByClassName('post-date')
	var comment = document.getElementsByClassName('comment-data')
	var comments__count = document.getElementsByClassName('comment-count')
	//var footer = document.getElementsByClassName('footer-date')

	var now = new Date()
	var weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
	var hoursStep = 1.5

	post[0].textContent = buildDate(weekAgo.getDate(), weekAgo.getMonth() + 1, weekAgo.getFullYear());
	//footer[0].textContent = now.getFullYear();
	comments__count[0].textContent = comment.length;

	for (var i = 0; i < comment.length; i++) {
		comment[i].textContent = (Math.ceil(now.getHours() - i * hoursStep)) < 1 ? 1 : Math.ceil(now.getHours() - i * hoursStep)
	}

	function zero(val) {
		return val.toString().length === 1 ? '0' + val : val;
	}

	function buildDate(d, m, y) {
		return [zero(d), zero(m), y,].join('.');
	}
})()