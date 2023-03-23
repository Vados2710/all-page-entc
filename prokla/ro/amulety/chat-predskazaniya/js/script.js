var url = window.cdn_path;
    if (url === undefined) {
      url = "";
    }
var time = document.querySelector('.message-time');
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
if (min < 10 && hour > 10) {
  var time = hour + ':' + '0' + min;
} else if (min > 10 && hour < 10) {
  var time = '0' + hour + ':' + min;
} else if (min < 10 && hour < 10) {
  var time = '0' + hour + ':' + '0' + min;
} else {
  var time = hour + ':' + min;
}

function firstMessages() {
  var chatMessages = [
    {
      name: 'ms1',
      msg:
        'Salutări! Mulți oameni nu cred în predicții.Prin urmare, vreau să dovedesc că prognozele mele pot schimba viața oricărei persoane, chiar și a dvs.!',
      delay: 5000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms2',
      msg:
        "Cel mai periculos lucru și de care mulți oameni se tem este legat de cauza și data morții lor. Dar, din păcate, mai devreme sau mai târziu vom muri toți. Vă pot spune, nu numai cu o probabilitate foarte mare, detaliile morții voastre, dar vă pot ajuta și să evitați această întâlnire teribilă și să vă prelungiți viața pentru mulți ani.",
      delay: 6000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms3',
      msg: 'Numai 3 minute și veţi afla o mulțime de lucruri interesante despre viitorul dvs.! Spuneţi-mi, ce vă interesează cel mai mult în acest moment?',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms4',
      msg: `<div data-v-13e73210="" class="container-button">
      <input type="button" value="Sănătatea" data-v-13e73210="" class="container__button btns1" id="btn1" />
      <input type="button" value="Bani" data-v-13e73210="" class="container__button btns1" />
      <input type="button" value="Familia și relațiile" data-v-13e73210="" class="container__button btns1" />
      <input type="button" value="Toate" data-v-13e73210="" class="container__button btns1" />
    </div>
    
    `,
      delay: 0,
      align: 'left',
      showTime: false,
      time: '19:58',
    },
  ];

  var chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight'),
    });
  }

  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = ' ';
    msgname = '.' + obj.name;
    msginner = '.messageinner-' + obj.name;
    spinner = '.sp-' + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + time + '</span>';
    }
    $('.chat-message-list').append(
      "<li class='message-" +
        obj.align +
        ' ' +
        obj.name +
        "' hidden><div class='sp-" +
        obj.name +
        "'><span class='spinme-" +
        obj.align +
        "'><div class='spinner-left'>Daniela Ionescu tastează </div><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
        obj.name +
        "' hidden><span class='message-text'>" +
        obj.msg +
        chatTimeString +
        '</span>' +
        '</div></li>'
    );

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });
}
firstMessages();

var btn = document.querySelectorAll('.btns1');

btn.forEach((item) => {
  item.addEventListener('click', function (e) {
    var msg4 = document.querySelector('.messageinner-ms4');
    msg4.innerHTML = `<div data-v-13e73210="" class="message message--user">
        <span data-v-13e73210="" class="message__text">${item.value}</span>
        <div data-v-13e73210="" class="container-button" style="display: none"></div>
        <!----><span data-v-13e73210="" class="message-time"
          ><div data-v-13e73210="" class="message-time__text">${time}</div>
          <span data-v-13e73210="" class="message-delivered"
            ><img data-v-13e73210="" src="img/delivered.f5f40880.svg" alt="" /></span
        ></span>
      </div>
      `;
    secondMessages();
  });
});

// Third Part

function secondMessages() {
  var chatMessages = [
    {
      name: 'ms5',
      msg: 'Bine, vă mulțumesc. Acum vă voi mai adresa încă 3 întrebări. În ce moment al zilei vă simți cel mai confortabil?',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },

    {
      name: 'ms6',
      msg: `<div data-v-13e73210="" class="container-button">
            <input type="button" value="Dimineața" data-v-13e73210="" class="container__button btns2"  />
            <input type="button" value="Noaptea" data-v-13e73210="" class="container__button btns2" />
            <input type="button" value="Seara" data-v-13e73210="" class="container__button btns2" />
            <input type="button" value="Ziua" data-v-13e73210="" class="container__button btns2" />
          </div>
          
          `,
      delay: 0,
      align: 'left',
      showTime: false,
      time: '19:58',
    },
  ];

  var chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight'),
    });
  }

  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = ' ';
    msgname = '.' + obj.name;
    msginner = '.messageinner-' + obj.name;
    spinner = '.sp-' + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + time + '</span>';
    }
    $('.chat-message-list').append(
      "<li class='message-" +
        obj.align +
        ' ' +
        obj.name +
        "' hidden><div class='sp-" +
        obj.name +
        "'><span class='spinme-" +
        obj.align +
        "'><div class='spinner-left'>Daniela Ionescu tastează </div><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
        obj.name +
        "' hidden><span class='message-text'>" +
        obj.msg +
        chatTimeString +
        '</span>' +
        '</div></li>'
    );

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });

  var btn2 = document.querySelectorAll('.btns2');

  btn2.forEach((item) => {
    item.addEventListener('click', function (e) {
      var msg6 = document.querySelector('.messageinner-ms6');
      msg6.innerHTML = `<div data-v-13e73210="" class="message message--user">
            <span data-v-13e73210="" class="message__text">${item.value}</span>
            <div data-v-13e73210="" class="container-button" style="display: none"></div>
            <!----><span data-v-13e73210="" class="message-time"
              ><div data-v-13e73210="" class="message-time__text">${time}</div>
              <span data-v-13e73210="" class="message-delivered"
                ><img data-v-13e73210="" src="img/delivered.f5f40880.svg" alt="" /></span
            ></span>
          </div>
          `;
      thirdMessages();
    });
  });
}

function thirdMessages() {
  var chatMessages = [
    {
      name: 'ms7',
      msg: "Am înțeles. Spuneţi-mi, suferiţi de insomnie în ultima vreme?",
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },

    {
      name: 'ms8',
      msg: `<div data-v-13e73210="" class="container-button">
              <input type="button" value="Da" data-v-13e73210="" class="container__button btns3"  />
              <input type="button" value="Nu" data-v-13e73210="" class="container__button btns3" />
              <input type="button" value="Uneori" data-v-13e73210="" class="container__button btns3" />
           
            </div>
            
            `,
      delay: 0,
      align: 'left',
      showTime: false,
      time: '19:58',
    },
  ];

  var chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight'),
    });
  }

  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = ' ';
    msgname = '.' + obj.name;
    msginner = '.messageinner-' + obj.name;
    spinner = '.sp-' + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + time + '</span>';
    }
    $('.chat-message-list').append(
      "<li class='message-" +
        obj.align +
        ' ' +
        obj.name +
        "' hidden><div class='sp-" +
        obj.name +
        "'><span class='spinme-" +
        obj.align +
        "'><div class='spinner-left'>Daniela Ionescu tastează </div><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
        obj.name +
        "' hidden><span class='message-text'>" +
        obj.msg +
        chatTimeString +
        '</span>' +
        '</div></li>'
    );

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });

  var btn3 = document.querySelectorAll('.btns3');

  btn3.forEach((item) => {
    item.addEventListener('click', function (e) {
      var msg8 = document.querySelector('.messageinner-ms8');
      msg8.innerHTML = `<div data-v-13e73210="" class="message message--user">
              <span data-v-13e73210="" class="message__text">${item.value}</span>
              <div data-v-13e73210="" class="container-button" style="display: none"></div>
              <!----><span data-v-13e73210="" class="message-time"
                ><div data-v-13e73210="" class="message-time__text">${time}</div>
                <span data-v-13e73210="" class="message-delivered"
                  ><img data-v-13e73210="" src="img/delivered.f5f40880.svg" alt="" /></span
              ></span>
            </div>
            `;
      fourMessages();
    });
  });
}

// Four Part

function thirdMessages() {
  var chatMessages = [
    {
      name: 'ms9',
      msg: "Iată și ultima întrebare: În ultima vreme simți că nu aţi reușit să vă aduceţi la bun sfârșit planurile?",
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },

    {
      name: 'ms10',
      msg: `<div data-v-13e73210="" class="container-button">
                <input type="button" value="Da" data-v-13e73210="" class="container__button btns4"  />
                <input type="button" value="Nu" data-v-13e73210="" class="container__button btns4" />
                <input type="button" value="Uneori" data-v-13e73210="" class="container__button btns4" />
             
              </div>
              
              `,
      delay: 0,
      align: 'left',
      showTime: false,
      time: '19:58',
    },
  ];

  var chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight'),
    });
  }

  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = ' ';
    msgname = '.' + obj.name;
    msginner = '.messageinner-' + obj.name;
    spinner = '.sp-' + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + time + '</span>';
    }
    $('.chat-message-list').append(
      "<li class='message-" +
        obj.align +
        ' ' +
        obj.name +
        "' hidden><div class='sp-" +
        obj.name +
        "'><span class='spinme-" +
        obj.align +
        "'><div class='spinner-left'>Daniela Ionescu tastează </div><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
        obj.name +
        "' hidden><span class='message-text'>" +
        obj.msg +
        chatTimeString +
        '</span>' +
        '</div></li>'
    );

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });

  var btn4 = document.querySelectorAll('.btns4');

  btn4.forEach((item) => {
    item.addEventListener('click', function (e) {
      var msg10 = document.querySelector('.messageinner-ms10');
      msg10.innerHTML = `<div data-v-13e73210="" class="message message--user">
                <span data-v-13e73210="" class="message__text">${item.value}</span>
                <div data-v-13e73210="" class="container-button" style="display: none"></div>
                <!----><span data-v-13e73210="" class="message-time"
                  ><div data-v-13e73210="" class="message-time__text">${time}</div>
                  <span data-v-13e73210="" class="message-delivered"
                    ><img data-v-13e73210="" src="img/delivered.f5f40880.svg" alt="" /></span
                ></span>
              </div>
              `;
      fourMessages();
    });
  });
}
function fourMessages() {
  var chatMessages = [
    {
      name: 'ms11',
      msg: 'Vă mulțumesc că aţi răspuns la toate întrebările.',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms12',
      msg: "Mai am nevoie de o informație foarte importantă, așa că vă rog să-mi scrieţi data dvs.  de naștere.",
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms13',
      msg: 'Puteți folosi numerele:',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },

    {
      name: 'ms14',
      msg: `
      <div data-v-13e73210="" class="date">
  <select id="day" data-v-13e73210="" class="date__item">
    <option data-v-13e73210="" value="">Zi</option>
    <option data-v-13e73210="" value="01">01</option>
    <option data-v-13e73210="" value="02">02</option>
    <option data-v-13e73210="" value="03">03</option>
    <option data-v-13e73210="" value="04">04</option>
    <option data-v-13e73210="" value="05">05</option>
    <option data-v-13e73210="" value="06">06</option>
    <option data-v-13e73210="" value="07">07</option>
    <option data-v-13e73210="" value="08">08</option>
    <option data-v-13e73210="" value="09">09</option>
    <option data-v-13e73210="" value="10">10</option>
    <option data-v-13e73210="" value="11">11</option>
    <option data-v-13e73210="" value="12">12</option>
    <option data-v-13e73210="" value="13">13</option>
    <option data-v-13e73210="" value="14">14</option>
    <option data-v-13e73210="" value="15">15</option>
    <option data-v-13e73210="" value="16">16</option>
    <option data-v-13e73210="" value="17">17</option>
    <option data-v-13e73210="" value="18">18</option>
    <option data-v-13e73210="" value="19">19</option>
    <option data-v-13e73210="" value="20">20</option>
    <option data-v-13e73210="" value="21">21</option>
    <option data-v-13e73210="" value="22">22</option>
    <option data-v-13e73210="" value="23">23</option>
    <option data-v-13e73210="" value="24">24</option>
    <option data-v-13e73210="" value="25">25</option>
    <option data-v-13e73210="" value="26">26</option>
    <option data-v-13e73210="" value="27">27</option>
    <option data-v-13e73210="" value="28">28</option>
    <option data-v-13e73210="" value="29">29</option>
    <option data-v-13e73210="" value="30">30</option>
    <option data-v-13e73210="" value="31">31</option></select
  ><select id="month" data-v-13e73210="" class="date__item">
    <option data-v-13e73210="" value="">Lună</option>
    <option data-v-13e73210="" value="01">01</option>
    <option data-v-13e73210="" value="02">02</option>
    <option data-v-13e73210="" value="03">03</option>
    <option data-v-13e73210="" value="04">04</option>
    <option data-v-13e73210="" value="05">05</option>
    <option data-v-13e73210="" value="06">06</option>
    <option data-v-13e73210="" value="07">07</option>
    <option data-v-13e73210="" value="08">08</option>
    <option data-v-13e73210="" value="09">09</option>
    <option data-v-13e73210="" value="10">10</option>
    <option data-v-13e73210="" value="11">11</option>
    <option data-v-13e73210="" value="12">12</option></select
  ><select id="year" data-v-13e73210="" class="date__item">
    <option data-v-13e73210="" value="">An</option>
    <option data-v-13e73210="" value="2002">2002</option>
    <option data-v-13e73210="" value="2001">2001</option>
    <option data-v-13e73210="" value="2000">2000</option>
    <option data-v-13e73210="" value="1999">1999</option>
    <option data-v-13e73210="" value="1998">1998</option>
    <option data-v-13e73210="" value="1997">1997</option>
    <option data-v-13e73210="" value="1996">1996</option>
    <option data-v-13e73210="" value="1995">1995</option>
    <option data-v-13e73210="" value="1994">1994</option>
    <option data-v-13e73210="" value="1993">1993</option>
    <option data-v-13e73210="" value="1992">1992</option>
    <option data-v-13e73210="" value="1991">1991</option>
    <option data-v-13e73210="" value="1990">1990</option>
    <option data-v-13e73210="" value="1989">1989</option>
    <option data-v-13e73210="" value="1988">1988</option>
    <option data-v-13e73210="" value="1987">1987</option>
    <option data-v-13e73210="" value="1986">1986</option>
    <option data-v-13e73210="" value="1985">1985</option>
    <option data-v-13e73210="" value="1984">1984</option>
    <option data-v-13e73210="" value="1983">1983</option>
    <option data-v-13e73210="" value="1982">1982</option>
    <option data-v-13e73210="" value="1981">1981</option>
    <option data-v-13e73210="" value="1980">1980</option>
    <option data-v-13e73210="" value="1979">1979</option>
    <option data-v-13e73210="" value="1978">1978</option>
    <option data-v-13e73210="" value="1977">1977</option>
    <option data-v-13e73210="" value="1976">1976</option>
    <option data-v-13e73210="" value="1975">1975</option>
    <option data-v-13e73210="" value="1974">1974</option>
    <option data-v-13e73210="" value="1973">1973</option>
    <option data-v-13e73210="" value="1972">1972</option>
    <option data-v-13e73210="" value="1971">1971</option>
    <option data-v-13e73210="" value="1970">1970</option>
    <option data-v-13e73210="" value="1969">1969</option>
    <option data-v-13e73210="" value="1968">1968</option>
    <option data-v-13e73210="" value="1967">1967</option>
    <option data-v-13e73210="" value="1966">1966</option>
    <option data-v-13e73210="" value="1965">1965</option>
    <option data-v-13e73210="" value="1964">1964</option>
    <option data-v-13e73210="" value="1963">1963</option>
    <option data-v-13e73210="" value="1962">1962</option>
    <option data-v-13e73210="" value="1961">1961</option>
    <option data-v-13e73210="" value="1960">1960</option>
    <option data-v-13e73210="" value="1959">1959</option>
    <option data-v-13e73210="" value="1958">1958</option>
    <option data-v-13e73210="" value="1957">1957</option>
    <option data-v-13e73210="" value="1956">1956</option>
    <option data-v-13e73210="" value="1955">1955</option>
    <option data-v-13e73210="" value="1954">1954</option>
    <option data-v-13e73210="" value="1953">1953</option>
    <option data-v-13e73210="" value="1952">1952</option>
    <option data-v-13e73210="" value="1951">1951</option>
    <option data-v-13e73210="" value="1950">1950</option>
    <option data-v-13e73210="" value="1949">1949</option>
    <option data-v-13e73210="" value="1948">1948</option>
    <option data-v-13e73210="" value="1947">1947</option>
    <option data-v-13e73210="" value="1946">1946</option>
    <option data-v-13e73210="" value="1945">1945</option>
    <option data-v-13e73210="" value="1944">1944</option>
    <option data-v-13e73210="" value="1943">1943</option>
    <option data-v-13e73210="" value="1942">1942</option>
    <option data-v-13e73210="" value="1941">1941</option>
    <option data-v-13e73210="" value="1940">1940</option>
  </select>
</div>

                
                `,
      delay: 0,
      align: 'left',
      showTime: false,
      time: '19:58',
    },
  ];

  var chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight'),
    });
  }

  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = ' ';
    msgname = '.' + obj.name;
    msginner = '.messageinner-' + obj.name;
    spinner = '.sp-' + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + time + '</span>';
    }
    $('.chat-message-list').append(
      "<li class='message-" +
        obj.align +
        ' ' +
        obj.name +
        "' hidden><div class='sp-" +
        obj.name +
        "'><span class='spinme-" +
        obj.align +
        "'><div class='spinner-left'>Daniela Ionescu tastează </div><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
        obj.name +
        "' hidden><span class='message-text'>" +
        obj.msg +
        chatTimeString +
        '</span>' +
        '</div></li>'
    );

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });

  var day = document.getElementById('day');
  var month = document.getElementById('month');
  var year = document.getElementById('year');
  var datt = document.querySelector('.messageinner-ms15');

  year.addEventListener('change', function () {
    if (day.value != '' && month.value != '' && year.value != '') {
      test();
    }
  });
  month.addEventListener('change', function () {
    if (day.value != '' && month.value != '' && year.value != '') {
      test();
    }
  });
  day.addEventListener('change', function () {
    if (day.value != '' && month.value != '' && year.value != '') {
      test();
    }
  });
  function test() {
    fiveMessages();
    datt.innerHTML = `${day.value}.${month.value}.${year.value}`;
  }
}

// Select Change

// Four PArt

function fiveMessages() {
  var chatMessages = [
    {
      name: 'ms15',
      msg: '',
      delay: 0,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms16',
      msg: "Excelent. Numărul destinului dvs. este 9 și vreau să vă avertizez, că acest număr indică la un avertisment.",
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg:
        'Știu că vă îndoiţi adesea de deciziile dvs. și vă faceţi griji dacă aţi făcut ceea ce trebuie într-o anumită situație.',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg:
        "În curând veţi primi știri pe care nu le aștepți. Este posibil ca în perioada azi maine lumea dvs.  să se răstoarne (probleme familiale).",
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg: 'Cum vă puteţi proteja? Cum să atrageţi noroc către sine? Amuleta antică '+offer_params.productName+' vă va ajuta.',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg: 'Este creat conform ritualurilor antice. Este posibil să se pregătească doar câteva amulete într-o lună; ea se preparează pentru o anumită persoană.',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg: 'Această amuletă aduce noroc și fericire, bani și protecția Universului. Vă așteaptă o dungă albă eternă și noroc în toate, implementarea a tot ce doriţi.',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
	{
      name: 'ms17',
      msg: 'Așa arată amuleta dvs.:',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
	{
      name: 'ms17',
      msg: ` <div class="prodwrap"><img src="prod.png" alt=""> </div>`,
      delay: 500,
      align: 'left',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg: 'De ce aveţi nevoie de amuletă?',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
	
    {
      name: 'ms17',
      msg: 'Această amuletă vă va schimba complet viața. Peste o lună, toate problemele voastre vor dispărea. Banii vă vor veni din diverse surse. Puteți uita de eșecurile financiare și puteți strânge bani pentru tot restul vieții.',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg:
        "Încerc mereu să ajut oamenii să-și rezolve problemele.",
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    {
      name: 'ms17',
      msg: 'Pentru a comanda Amuleta, trebuie să completaţi formularul de comandă.',
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    
   
   
    {
      name: 'ms17',
      msg: "Il numero di amuleti in magazzino è limitato, quindi ti consiglio di affrettarti con l'ordine.",
      delay: 3000,
      align: 'right',
      showTime: true,
      time: '19:58',
    },
    
    {
      name: 'ms18',
      msg: `<div>
      <form action="getform.php" id="cont_form" class="form-order x_order_form" style="display: block" method="post">
  <div class="form_block">
    <div class="prices_block">
     Formularul de comandă pentru Amuletă:
      <div class="price">
        <div class="old-price price-item">
          ` + offer_params.priceMain * 2 + `  ` + offer_params.currencyMain + `
        </div>
        <div class="new-price price-item">
          ` + offer_params.priceMain + `  ` + offer_params.currencyMain + `
        </div>
      </div>
    </div>
    <div class="form-group">
      <input
        type="text"
        name="name"
        placeholder="Numele dvs."
        class="form-control input-lg"
        autocomplete="name"
        required=""
      />
    </div>
    <div class="form-group">
      <input
        type="tel"
        name="phone"
        placeholder="Numărul de telefon"
        class="form-control input-lg"
        autocomplete="tel"
        required=""
      />
    </div>
    <input type="submit" value="Comandaţi acum" class="btn-primary" />
  </div>
  
</form>

    `,
      delay: 500,
      align: 'left',
      showTime: false,
      time: '19:58',
    },
  ];

  var chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight'),
    });
  }

  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = ' ';
    msgname = '.' + obj.name;
    msginner = '.messageinner-' + obj.name;
    spinner = '.sp-' + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + time + '</span>';
    }
    $('.chat-message-list').append(
      "<li class='message-" +
        obj.align +
        ' ' +
        obj.name +
        "' hidden><div class='sp-" +
        obj.name +
        "'><span class='spinme-" +
        obj.align +
        "'><div class='spinner-left'>Daniela Ionescu tastează </div><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
        obj.name +
        "' hidden><span class='message-text'>" +
        obj.msg +
        chatTimeString +
        '</span>' +
        '</div></li>'
    );

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });

  var msg15 = document.querySelector('.messageinner-ms15');
  msg15.innerHTML = `<div data-v-13e73210="" class="message message--user">
                <span data-v-13e73210="" class="message__text">${day.value}.${month.value}.${year.value}</span>
                <div data-v-13e73210="" class="container-button" style="display: none"></div>
                <!----><span data-v-13e73210="" class="message-time"
                  ><div data-v-13e73210="" class="message-time__text">${time}</div>
                  <span data-v-13e73210="" class="message-delivered"
                    ><img data-v-13e73210="" src="img/delivered.f5f40880.svg" alt="" /></span
                ></span>
              </div>
              `;
}

// Date
