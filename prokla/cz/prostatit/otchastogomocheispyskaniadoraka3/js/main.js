$(document).ready(function(){

	$('.censored span').on('click', function(){
		$(this).parent().next('img').toggleClass('censor-active');
	});

  d = new Date();
  p = new Date(d.getTime());
  var yr = d.getFullYear();
  montha = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
  //montha = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
  date_html = p.getDate() + ' ' + montha[p.getMonth()] + ' ' + yr;

  $('.js-date-1').html(date_html);


  p2 = new Date(d.getTime() - 86400000);
  date_html2 = p2.getDate() + '.' + montha[p2.getMonth()] + '.' + yr;
  $('.js-date-2').html(date_html2);


  p3 = new Date(d.getTime() - 2 * 86400000);
  date_html3 = p3.getDate() + '.' + montha[p3.getMonth()] + '.' + yr;
  $('.js-date-3').html(date_html3);


  p4 = new Date(d.getTime() - 3 * 86400000);
  date_html4 = p4.getDate() + '.' + montha[p4.getMonth()] + '.' + yr;
  $('.js-date-4').html(date_html4);


  p5 = new Date(d.getTime() - 4 * 86400000);
  date_html5 = p5.getDate() + '.' + montha[p5.getMonth()] + '.' + yr;
  $('.js-date-5').html(date_html5);


  p6 = new Date(d.getTime() - 5 * 86400000);
  date_html6 = p6.getDate() + '.' + montha[p6.getMonth()] + '.' + yr;
  $('.js-date-6').html(date_html6);


  p7 = new Date(d.getTime() - 6 * 86400000);
  date_html7 = p7.getDate() + '.' + montha[p7.getMonth()] + '.' + yr;
  $('.js-date-7').html(date_html7);

  p8 = new Date(d.getTime() - 7 * 86400000);
  date_html8 = p8.getDate() + '.' + montha[p8.getMonth()] + '.' + yr;
  $('.js-date-8').html(date_html8);

})