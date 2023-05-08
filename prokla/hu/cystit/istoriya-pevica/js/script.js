spanDate = document.querySelector('.date-0'),
date = new Date(),
day = date.getDate(),
month = date.getMonth() + 1,
spanDate.textContent = date.getFullYear() + '.' + ((month < 10) ? ("0" + month) : month) + '.' + ((day < 10) ? ("0" + day) : day);

