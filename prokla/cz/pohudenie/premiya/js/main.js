//Weight Calc
$(function () {
  $('#calcweight').click(function (a) {
    a.preventDefault();
    a = Math.ceil(Number($('#minus_weight').val()) / 0.666666);
    Number($('#weight').val()) > Number($('#minus_weight').val()) + 40
      ? $('.formResult').html(
          '<p><b>Pokud budete postupovat podle níže uvedených pokynů, budete schopni shodit ' +
            $('#minus_weight').val() +
            ' za pouhých ' +
            a +
            ' dní bez stravy nebo cvičení!</b></p><p>Myslíš, že je to nemožné? Přečtěte si článek níže až do konce a změníte názor. Doufám, že to změní váš život!</p>'
        )
      : $('.formResult').html(
          '<p><b>Nesprávné údaje.</b></p>'
        );
    $('.formResult').css({ transition: 'background 1s', backgroundColor: '#ff7426c4', border: '2px solid #ff7426c4' });
    setTimeout(function () {
      $('.formResult').css({ backgroundColor: '#fff' });
    }, 2e3);
  });
});