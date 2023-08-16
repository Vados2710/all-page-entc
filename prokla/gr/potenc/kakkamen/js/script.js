// let count = 0;
// document.querySelectorAll('.spoil').forEach(spoil => {
//     spoil.addEventListener('click', function () {
//         count++
//         if (count % 2 !== 0 && count % 2 !== 2){
//             spoil.nextElementSibling.style.display = 'block'
//         }else{
//             spoil.nextElementSibling.style.display = 'none'
//         }
//     })
// })

$('.spoil').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).next().css('display','none');
    }else{
        $(this).addClass('active');
        $(this).next().css('display','block')
    }
  });