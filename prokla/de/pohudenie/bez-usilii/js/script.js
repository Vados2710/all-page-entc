$(document).ready(function(){
 $('.spoiler-title').click(function(){
  $(this).toggleClass('opened').toggleClass('closed').parent().children('.spoiler-body').slideToggle();
  return false;
 });
});