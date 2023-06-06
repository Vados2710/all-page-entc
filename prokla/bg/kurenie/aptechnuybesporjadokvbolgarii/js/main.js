$(document).ready(function() {
     let date = new Date(),
        currentDay = (date.getDate() < 10 ? '0' : '') + date.getDate(),
        currentMonth = (date.getMonth() < 9 ? '0' : '') + (date.getMonth()+1),
        currentYear = date.getFullYear() + '',
        previousDate = new Date(date.getTime() - 2*86400000);
        previousMonth = (previousDate.getMonth() < 9 ? '0' : '') +  (previousDate.getMonth()+1),
        previousDay = (previousDate.getDate() < 10 ? '0' : '') + previousDate.getDate(),
        previousYear = '' + previousDate.getFullYear();
        
        $('.from-date').text(previousDay + '.'+ previousMonth + '.' + previousYear.slice(2,4));
        $('.current-date').text(currentDay  + '.'+ currentMonth + '.' + currentYear.slice(2,4));
      
        let currentPrice,
            lowerPriceMin,
            lowerPriceMax;
        
         function qwe() {
            currentPrice = $('.old-amount>span').html();
            lowerPriceMin = (currentPrice * 2) + '',
            lowerPriceMax = (currentPrice * 5) + '';
            $('.lower-price_min').text(lowerPriceMin.slice(0,2));
            $('.lower-price_max').text(lowerPriceMax.slice(0,3));
         }
         
        let timerID = setTimeout(function(){
            if($('.old-amount>span').html() == ''){
                qwe();
            } else {
                qwe();
                clearTimeout(timerID);
            }
         },100)
    });