document.addEventListener('DOMContentLoaded', function(){
  //native js


  setTimeout(function() {
    var romFooter = document.querySelector('.create_rom_footer');

    romFooter.insertAdjacentHTML("afterbegin", '<div class="rom-footer"><div class="rom_left"> <a href="http://www.anpc.gov.ro/" class="rom_link">ANPC</a><p class="rom_p">Infocons: 0219551</p></div><div class="rom_center">  <a href="privacy.html" target="_blank" class="rom_link">Politica de confidențialitate</a></div><div class="rom_right"> <p class="rom_contact rom_p"><span><a href="tel:+40316301953" class="rom_link">Tel. +40 316 301 953</a></span></p><a href="mailto:makeprofitlpp@gmail.com" class="rom_link">makeprofitlpp@gmail.com</a></div></div>');

    var colorText = romFooter.getAttribute('data-color_text'),
        colorLink = romFooter.getAttribute('data-color_link'),
        // colorLogo = romFooter.getAttribute('data-color_logo'),
        head = document.querySelector('head'),
        romText = document.querySelectorAll('.rom_p'),
        romLink = document.querySelectorAll('.rom_link'),
        romIcon = document.querySelectorAll('.rom_svg_color');

    for (let i = 0; i < romText.length; i++) {
      romText[i].style.color = colorText;
    };
    for (let i = 0; i < romLink.length; i++) {
      romLink[i].style.color = colorLink;
    };
    // for (let i = 0; i < romText.length; i++) {
    //   romIcon[i].style.fill = colorLogo;
    // };

    head.insertAdjacentHTML("afterbegin", '<style>.rom-footer{font-size:0}.rom-footer *{margin:0;padding:0}.rom_left,.rom_right{display:inline-block;vertical-align:top;width:33.3%;font-size:16px; line-height: 26px}.logo-link{display: block;text-decoration: none!important;width: 30px;height: 30px;margin: auto;}.rom_left{text-align:left}.rom_right{text-align:right}.rom_center{text-align: center;font-size:16px;line-height: 26px;width:33.3%;display:inline-block}.rom_show_contact{display:inline-block;cursor:pointer}.rom_p{margin:0}.rom-footer .rom_link{display:inline-block;text-decoration:none}.rom-footer .rom_link:hover{text-decoration:underline}.rom_svg{width:30px;height:30px;display:block;margin:0 auto}@media screen and (max-width: 768px){.rom_left,.rom_right,.rom_center{width:100%;text-align:center;display:block}.rom_left{margin-bottom:20px}.rom_svg{margin-bottom: 5px}}</style>')
  });


});
