// hover read-more start (opacity)
$( ".container-for-article" ).hover(
  function() {
    $( this ).find(".read-more-articles-img-overlay").css("opacity", 0.4);
  }, function() {
    $( this ).find(".read-more-articles-img-overlay").css("opacity", 0);
  }
);
// hover read-more end

//classes start
class Comment {
  constructor(fullname, text, date) {
    this.fullname = fullname;
    this.text= text;
	this.date= date;
  }
}
//classes end

// scrolling image start
$( document ).ready(function() {
	 if ($(window).width() > 1152) {//check if window has less px than 800, because share-button is being hidden by css
	 if($(this).scrollTop()>=$('.read-more').position().top+$('.read-more').height()) { //check if it should be visible
            $('#flyingImage').css('position','fixed');
			$('#flyingImage').css('top', "45px");
			$('#flyingImage').css('width',	$('.article-right-column').width());
        }
		else
		{
			$('#flyingImage').css('position','static');
			$('#flyingImage').css('top', "0");
			$('#flyingImage').css('width',	'100%');
		}
		var elementTop = $('.share-buttons').offset().top;					//check if share-button is on the screen
		var elementBottom = elementTop + $('.share-buttons').outerHeight();
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		if(elementBottom > viewportTop && elementTop < viewportBottom)
		{
			$('.share-button-floating').css('display','none');
		}
		else
		{
			$('.share-button-floating').css('display','block');
		}
		}
		else
		{
			$('.share-button-floating').css('display','none');
		}
    $(document).on('scroll', function() {
		if ($(window).width() > 1152 && $(window).width()) {//check if window has less px than 800, because share-button is being hidden by css
        if($(this).scrollTop()>=$('.read-more').position().top+$('.read-more').height()+400) {
            $('#flyingImage').css('position','fixed');
			$('#flyingImage').css('top', "10px");
			$('#flyingImage').css('width',	$('.article-right-column').width());
        }
		else
		{
			$('#flyingImage').css('position','static');
			$('#flyingImage').css('top', "0");
			$('#flyingImage').css('width',	'100%');
		}
		var elementTop = $('.share-buttons').offset().top;
		var elementBottom = elementTop + $('.share-buttons').outerHeight();
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		if(elementBottom > viewportTop && elementTop < viewportBottom)
		{
			$('.share-button-floating').css('display','none');
		}
		else
		{
			$('.share-button-floating').css('display','block');
		}
		}
		else
		{
			$('.share-button-floating').css('display','none');
		}
    });
});
// scrolling image end
//expand side share buttons start
$( ".expand-floating" ).on( "click", function() {
	$('.expand-floating').css('display','none');
	$('.wykop1').css('display','block');
	$('.linkedin1').css('display','block');
	$('.tumblr1').css('display','block');
});
//expand side share buttons end
//expand share buttons (in article) start
$( ".expand-button" ).on( "click", function() {
	console.log('dziala');
	$(".facebook2").attr("class", "facebook small-button2");
	$(".twitter2").attr("class", "twitter small-button2");
	$('.wykop2').css('display','block');
	$('.linkedin2').css('display','block');
	$('.tumblr2').css('display','block');
	$('.expand-button').css('display','none');
});
//expand share buttons (in article) end

//cookies dispaly function start
function cookiesDisplay()
{
	$(".additional-comments").empty();
	let commentstring = Cookies.get("commentArr");
	if(commentstring != undefined){
	let commentArr = commentstring.split(',/,');
	let tempComment = '';
	$.each(commentArr, function( index, value ) {
		if(value){
		let obj = JSON.parse(value);
		let dateNow = new Date();
		let dateBefore = new Date(obj.date);
		let finalDate;
		let finalDateStr = '';
		if((dateNow.getHours() - dateBefore.getHours())<=0){
			finalDate = dateNow.getMinutes() - dateBefore.getMinutes();
			finalDateStr = finalDate + ' minut';
		}
		else
		{
			finalDate = dateNow.getHours()-dateBefore.getHours();
			finalDateStr = finalDate + ' godzin';	
		}
		
			if(finalDate<10){
			if(finalDate == 1)
			{
				finalDateStr += "ę";
			}
			else if(finalDate >=2 && finalDate <= 4)
			{
				finalDateStr += "y";
			}
			}
			else
			{
				if(finalDateStr[0] != 1 && finalDateStr[1] >= 2 && finalDateStr[1]<= 4){
					finalDateStr += "y";
				}
			}
			
			
		tempComment = '<hr class="commentunderline"><div class="profile"><a class="profileimage" href="http://officialshopi.com/official/cerimol/index-tab.html" target="_blank"><img src="img/user.jpg" alt="profilowe"></a><div class="commentstextcontainer"><a class="commentname" href="http://officialshopi.com/official/cerimol/index-tab.html" target="_blank">'+obj.fullname+'</a><div class="commentcontent"><div class="commenttext">'+obj.text+'</div><div class="commentactions">Odpowiedz <span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">'+finalDateStr+' temu</span></div></div></div></div>';
		
		$(".additional-comments").append(tempComment);
		}
	});
	}
}
//cookies dispaly function end

//cookies start
function add()
{
		$('#add-warn, #add-success').hide();
	
		let commentArr = [];
		let commentText = $('#add-comment').val();
		let name = $('#name').val();
		let surname = $('#surname').val();
		if((commentText.length < 5) || (name.length < 3) || (name.length < 3))
		{
			$('#add-warn').show();
		}
		else
		{
			$('#add-success').show();
			$("#add-comment", '#name', '#surname').val('');
			let fullname = name+" "+surname;
			if(Cookies.get("commentArr") != undefined)
			{
				commentArr = Cookies.get("commentArr");
				Cookies.remove('commentArr');
				let comment = new Comment(fullname,commentText,new Date());
				commentArr += JSON.stringify(comment);
				Cookies.set('commentArr', commentArr+',/,', { expires: 1 });
			}
			else
			{
				let comment = new Comment(fullname,commentText,new Date());
				commentArr += JSON.stringify(comment);
				Cookies.set('commentArr', commentArr+',/,', { expires: 1 });
			}
			cookiesDisplay();
		}	
 
}
$("#add-comment, #name, #surname").keyup(function(event) {
	if (event.keyCode === 13) {
		add();
	}
});
$( "#add-button" ).on( "click", function() {
    add();
});

//cookies end