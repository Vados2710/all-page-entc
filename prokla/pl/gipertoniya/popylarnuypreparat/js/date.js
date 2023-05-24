//data start
function sprawdzmiesiac(liczbamiesiac) {
    switch (liczbamiesiac) {
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

    }
}

var date = new Date();

var waznoscdzien = date.getDate();
var waznoscmiesiac = sprawdzmiesiac(date.getMonth());
var waznoscrok = date.getFullYear();

date.setDate(date.getDate() - 1);

var dzien = date.getDate();
var miesiac = sprawdzmiesiac(date.getMonth());
var rok = date.getFullYear();
//dataend


// MIESIĄC W MIANOWNIKU


//data start
function sprawdzmiesiac1(liczbamiesiac) {
    switch (liczbamiesiac) {
        case 0:
            return "styczeń";
            break;
        case 1:
            return "luty";
            break;
        case 2:
            return "marzec";
            break;
        case 3:
            return "kwiecień";
            break;
        case 4:
            return "maj";
            break;
        case 5:
            return "czerwiec";
            break;
        case 6:
            return "lipiec";
            break;
        case 7:
            return "sierpień";
            break;
        case 8:
            return "wrzesień";
            break;
        case 9:
            return "październik";
            break;
        case 10:
            return "listopad";
            break;
        case 11:
            return "grudzień";
            break;
    }
}

var date = new Date();

var waznoscdzien1 = date.getDate();
var waznoscmiesiac1 = sprawdzmiesiac1(date.getMonth());
var waznoscrok1 = date.getFullYear();

date.setDate(date.getDate() - 1);

var dzien1 = date.getDate();
var miesiac1 = sprawdzmiesiac(date.getMonth());
var rok1 = date.getFullYear();
//dataend
