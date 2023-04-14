function main() {
    if (document.body.classList.contains('ev-date')) {
        // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
        // Працює як в порядку спадання, так і в порядку зростання.
        document.addEventListener("DOMContentLoaded", postDate);
    
        function postDate() {
            const msInDay = 86400000,
                counterLength = 366,
                countryName = 'ru', // Встановлюємо мову для місяців.
                isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
                localDate = new Date();
    
            let months;
    
            switch (countryName) {
                case 'ro': // Romania
                    months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
                    break;
 
            }
    
            function format(date, formatString) {
                let innerDate = "";
    
                const day = date.getDate(),
                    year = date.getFullYear(),
                    month = date.getMonth() + 1,
                    fo = formatString || true;
    
                switch (fo) {
                    case "yyyy":
                        innerDate += "" + year;
                        return innerDate;
    
                    case "yyyy-1":
                        innerDate += "" + year - 1;
                        return innerDate;
    
                    case "yyyy-2":
                        innerDate += "" + year - 2;
                        return innerDate;
    
                    case "mm.dd.yyyy":
                        innerDate += (month < 10) ? ("0" + month) : month;
                        innerDate += ".";
                        innerDate += (day < 10) ? ("0" + day) : day;
                        innerDate += "." + year;
                        return innerDate;    

            }
        }
    }    
    // $('a[href ^= "#"]').on('click',function(e) {
    //     var id = $(this).attr('href');
    //     var top = $(id).offset();
    //     if (!top) {
    //       console.log('якорь '+id+' не найден, необходимо проставить ID для якорей');
    //     }else{
    //       e.preventDefault();
    //       $('body,html').animate({scrollTop: top.top}, 1000);
    //     }
    //   });
}
if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll',
      function () {
        return setTimeout(main, 1000)
      }, {
        once: true,
        passive: true
      });
  } else {
    main();
  };
}