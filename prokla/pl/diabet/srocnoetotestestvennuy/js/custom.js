//classes start
class Comment {
  constructor(fullname, text, date) {
    this.fullname = fullname;
    this.text= text;
	this.date= date;
  }
}
//classes end

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
			
			
		tempComment = '<div class="comment-box"><div class="left-side"><p><i class="blue">'+obj.fullname+' </i><i class="gray">'+finalDateStr+'</i></p></div><div class="right-side"></div><div class="comment-text"><p>'+obj.text+'</p><hr></div></div>';
		/*'<hr class="commentunderline"><div class="profile"><a class="profileimage" href="http://officialshopi.com/official/cerimol/index-tab.html" target="_blank"><img src="img/user.jpg" alt="profilowe"></a><div class="commentstextcontainer"><a class="commentname" href="http://officialshopi.com/official/cerimol/index-tab.html" target="_blank">'+obj.fullname+'</a><div class="commentcontent"><div class="commenttext">'+obj.text+'</div><div class="commentactions">Odpowiedz <span class="dotpos">.</span> Lubię to! <span class="dotpos">.</span> <span class="commenttime">'+finalDateStr+' temu</span></div></div></div></div>';*/
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