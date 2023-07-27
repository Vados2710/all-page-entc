function thisElement() 
{
    var obj = document.documentElement;
    while (obj.lastChild) obj = obj.lastChild;
    return obj.parentNode;
}


function dtime_nums(d, like_eu) 
{
    var self    = thisElement();
    var now     = new Date;
    now.setDate(now.getDate() + d);


    var dayNum = '';
    if (now.getDate() < 10) {
        dayNum = '0';
    }


    dayNum += now.getDate();
    var monthNum = '';
    if (now.getMonth() + 1 < 10) {
        monthNum = '0';
    }


    monthNum += now.getMonth() + 1;
    var str_write = document.createElement('span');


    if (like_eu === true) {
        str_write.appendChild(document.createTextNode(dayNum + '.' + monthNum + '.' + now.getFullYear()));
    } else {
        str_write.appendChild(document.createTextNode(monthNum + '.' + dayNum + '.' + now.getFullYear()));
    }


    self.parentNode.appendChild(str_write);
}