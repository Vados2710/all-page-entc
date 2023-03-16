
document.addEventListener("DOMContentLoaded", function() {
    
  // ���� ���� (+ ���).
  postDate();   

});

function postDate() {
  
  var body = document.body,
      postLang = body.getAttribute('data-post-lang');

  var sa = body.getAttribute('data-post-format') || 'dd.mm.yyyy',
      msInDay = 86400000,
      counterLength = 90,  // ����������� ������� �������� ����. ������� �� �����������.
      months, 
      countryName = 'ro',
         
             // ���� ��� ������. 
      isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // ���������� ������ ������ �� ����� ����
      localDate = new Date();

  var days = ["�����������", "�����������", "�������", "�����", "�������", "�������", "�������"];

  switch(countryName) {
     case 'ro':  // Romania
          days = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Simbata', 'Duminica'];
          break;
  }
                                 
    switch (countryName) {
      case 'ro': // Romania
        months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
        break;
    }
  if (isAbbreviated) {
      for (var i = 0; i < months.length; i++) {
          months[i] = months[i].slice(0, 3).toLowerCase();  // ��������� ".toLowerCase()", ���� ����� ����� ������� ���� �������.
      }
  }

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date-" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() - counter * msInDay),
          timeCounter = 0,
          timeArray = time(nodeList/*, true*/); // ��������������, ���� ��������� ���������� � ������� ��������.

      timeArray = timeFormat(timeArray);

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
              // format: ��������� ������� ��� ������ ����. �����o �� data-format="������". 
              /// ������� �������� � switch �����. dd - ������, day - ��������.

              // ���������, <span class="date-1" data-format="dd month yyyy"></span> 
              // ���� �� 1 ���� ����� � �������� ��� span � ������ "14 ������ 2018".
          } else {
              // ��������� ������ ������ ���� �������� ���!
              nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
          }
          if (/\btime\b/.test(nodeList[i].className)) {
              nodeList[i].innerHTML += " " + timeArray[timeCounter]; // ����� ��� ������� ������ ����.
              timeCounter++;
          } 
      }
  }

  // <span clas="date-N"></span> - ���� ��� ����� �� N ����. ���������, <span className="date-5"></span>
  // <span clas="dateN"></span> - ���� ��� ������ �� N ����. ���������, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() + counter * msInDay),
          timeCounter = 0;

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
          } else {
              nodeList[i].innerHTML = format(date, sa);
          }
      }
  }

  function time(nodeList, reverse) {
      var timeArray = [], timeStatement = false;

      for (var i = 0; i < nodeList.length; i++) {
          if (nodeList[i].className.match(/\btime\b/)) {
            if (nodeList[i].className.match(/\bdate-0\b/)) {
              timeStatement = true;
            }
              timeArray.push(timeRandom(timeStatement));
          }
      }

      if (reverse) timeArray.sort(function(a, b) { return b - a; });
      else timeArray.sort(function(a, b) { return a - b; });

      return timeArray;
  } 

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
      return Math.round(0 + Math.random() * 1440);
  }

  function timeFormat(timearray) {
      var array = [];

      for (var i = 0; i < timearray.length; i++) {
      var htemp = Math.floor(timearray[i] / 60), mtemp = timearray[i] % 60,
          hours = htemp < 10 ? "0" + htemp : htemp,
          minutes = mtemp < 10 ? "0" + mtemp : mtemp; 
      array.push(hours + ":" + minutes);  
      }
      
      return array;
  }

  function notLastIteration(index, array) {
      return index !== array.length - 1;
  }

  function format(date, format) {
      var testFormat = ['dd', 'day', 'mm', 'month', 'yyyy', 'year'];
      var innerDate = format;

      var dd = date.getDate(),
          mm = date.getMonth() + 1,
          year = date.getFullYear(),
          month = months[mm - 1],
          day = days[new Date(year, mm - 1, dd).getDay()];

      dd = (dd < 10) ? ("0" + dd) : dd;
      mm = (mm < 10) ? ('0' + mm) : mm;

      var dateFormat = {
          day: day,
          dd: dd,
          year: year,
          yyyy: year,
          mm: mm,
          month: month
      };

      for (var i = 0; i < testFormat.length; i++) {
          var string = testFormat[i];
          var regExp = new RegExp(string);
          innerDate = innerDate.replace(regExp, dateFormat[string]);
      }

      return innerDate;
  }
}


function toggleAdultImg () {
    let items = document.querySelectorAll(".adult")
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            e.currentTarget.classList.toggle("adult--open")
        })
    }
}
toggleAdultImg ()