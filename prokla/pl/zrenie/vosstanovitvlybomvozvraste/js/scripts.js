function getDates() {

    var date = new Date();
    // var weekday = new Array(7);
    // weekday[0] = "Poniedziałek";
    // weekday[1] = "Wtorek";
    // weekday[2] = "Środa";
    // weekday[3] = "Czwartek";
    // weekday[4] = "Piątek";
    // weekday[5] = "Sobota";
    // weekday[6] = "Niedziela";

    // var n = weekday[d.getDay()];
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    if (m < 10) {
        m = '0' + m;
    }
    document.getElementById("today1").innerHTML = d + '.' + m + '.' + y + 'r.';

    var twoMbefore = m - 2;
    if (twoMbefore < 10) {
        twoMbefore = '0' + twoMbefore;
    }
    var oneMbefore = m - 1;
    if (oneMbefore < 10) {
        oneMbefore = '0' + oneMbefore;
    }
    var twoDbefore = d - 2;
    if (twoDbefore < 0) {
        twoDbefore = '1';
    }
    var twentysevenDbefore = d - 27;
    if (twentysevenDbefore < 0) {
        twentysevenDbefore = '1';
    }
    if (twentysevenDbefore < 10) {
        twentysevenDbefore = '0' + twentysevenDbefore;
    }
    var twentyDbefore = d - 20;
    if (twentysevenDbefore < 0) {
        twentysevenDbefore = '1';
    }
    if (twentyDbefore < 10) {
        twentyDbefore = '0' + twentyDbefore;
    }
    var weekBefore = d - 7;
    if (weekBefore < 0) {
        weekBefore = '1';
    }
    if (weekBefore < 10) {
        weekBefore = '0' + weekBefore;
    }
    document.getElementById("firstPost").innerHTML = d + '.' + m + '.' + y + 'r.';
    document.getElementById("secondPost").innerHTML = twentyDbefore + '.' + m + '.' + y + 'r.';
    document.getElementById("thirdPost").innerHTML = twentysevenDbefore + '.' + oneMbefore + '.' + y + 'r.';
    document.getElementById("fourthPost").innerHTML = twoDbefore + '.' + twoMbefore + '.' + y + 'r.';
    document.getElementById("today3").innerHTML = weekBefore + '.' + m + '.' + y + 'r.';
}

//data start
function sprawdzmiesiac(liczbamiesiac){
                   switch(liczbamiesiac)
                   {
                       case 0:
                        return "stycznia";
                        break;
                       case 1:
                        return "lutego";
                        break;
                       case 2:
                        return "marca";
                        break;
                       case 3:
                        return "kwietnia";
                        break;
                        case 4:
                        return "maja";
                        break;
                       case 5:
                        return "czerwca";
                        break;
                       case 6:
                        return "lipca";
                        break;
                       case 7:
                        return "sierpnia";
                        break;
                       case 8:
                        return "września";
                        break;
                       case 9:
                        return "października";
                        break;
                        case 10:
                        return "listopada";
                        break;
                       case 11:
                        return "grudnia";
                        break;
                        
                   }}
				   
                   var date = new Date();
				   
				   var waznoscdzien = date.getDate();
				   var waznoscmiesiac = sprawdzmiesiac(date.getMonth());
				   var waznoscrok = date.getFullYear();

                   date.setDate(date.getDate() - 1);
				   
                   var dzien = date.getDate();
				   var miesiac = sprawdzmiesiac(date.getMonth());
                   var rok = date.getFullYear();
//dataend