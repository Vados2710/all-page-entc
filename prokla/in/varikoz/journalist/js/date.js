function dtime(daysBefore, format) {
    let d = new Date(new Date() - 24 * 3600 * 1000 * daysBefore);
    let monthC = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let monthN = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let day = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    if ( d.getDate() < 10){
        let date = ['01','02','03','04','05','06','07','08','09'];
        new_date = date[d.getDate()-1]
    }
    else{
        new_date = d.getDate()
    }
    switch (format) {
        case 'a':
            document.write(d.getDate() + " " + monthC[d.getMonth()] + " " + d.getFullYear()); // 01 Января 1970
            break;
        case 'b':
            document.write(day[d.getDay()-1] + ', ' + d.getDate() + " " + monthC[d.getMonth()] + " " + d.getFullYear()); // Пн, 01 Января 1970
            break;
        case 'c':
            document.write(new_date + "." + monthN[d.getMonth()] + "." + d.getFullYear()); // 01.01.2020
            break;
        case 'd':
            document.write(monthC[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()); // Января 01, 2020
            break;
    }
}
