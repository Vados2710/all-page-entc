(function (post, comment, footer) {
	var now = new Date(),
		weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
		d = weekAgo.getDate(),
		m = weekAgo.getMonth() + 1,
		y = weekAgo.getFullYear()
	post[0].textContent = buildDate(d, m, y)
	footer[0].textContent = now.getFullYear()
	for (var i = 0; i < comment.length; i++) {
		var commentDate = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), Math.round(weekAgo.getDate() + (i * 1))),
			chooseDate = commentDate < now ? commentDate : now
		comment[i].textContent = buildDate(
			chooseDate.getDate(),
			chooseDate.getMonth() + 1,
			chooseDate.getFullYear())
	}

	function zero(val) {
		return val.toString().length === 1 ? '0' + val : val
	}

	function buildDate(d, m, y) {
		return [zero(d), zero(m), y,].join('.')
	}
})(
	document.getElementsByClassName('post-date'),
	document.getElementsByClassName('comment-date'),
	document.getElementsByClassName('footer-date')
);

var form = document.querySelector('.all-form')
var minutes = document.getElementsByClassName('all-form__min');
var seconds = document.getElementsByClassName('all-form__sec');
var isStart = false;

var startCount = function (min, sec) {
	var date = new Date();
	var count = 0;
	var setMinutes = 10;
	var setSeconds = 0;
	date.setMinutes(setMinutes);
	date.setSeconds(setSeconds);
	min.textContent = zero(date.getMinutes());
	sec.textContent = zero(date.getSeconds());

	var interval = setInterval(counter, 1000);

	function counter() {
		count++;
		var liveDate = new Date();
		liveDate.setMinutes(date.getMinutes());
		liveDate.setSeconds(date.getSeconds() - count);
		min[0].textContent = zero(liveDate.getMinutes());
		sec[0].textContent = zero(liveDate.getSeconds());
		if (min[0].textContent === '00' && sec[0].textContent === '00') {
			clearInterval(interval);
		}
	}

	function zero(num) {
		return num.toString().length === 1 ? '0' + num : num;
	}
};

var isOk = function() {
	if (window.pageYOffset >= form.offsetTop - window.innerHeight && !isStart) {
		startCount(minutes, seconds);
		isStart = true
	}
};

window.addEventListener('scroll', isOk)

