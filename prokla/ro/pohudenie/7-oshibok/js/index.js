const yesterdayElements = document.querySelectorAll('.s-date-yesterday');
const { date: yesterdayDate, month: currentMonth, year: currentYear } = getDateYesterday();
yesterdayElements.forEach((element) => {
  const format = element.getAttribute('format');
  setDate({
    element: element,
    format: format,
    date: getDateYesterday(),
  });
});

const yearElements = document.querySelectorAll('.s-year');
yearElements.forEach((element) => {
  element.textContent = currentYear;
});

function setDate(props) {
  const { element, format, date } = props;
  const { day, month, year } = date
  element.textContent = `${day.toString().padStart(2,'0')}${format}${month.toString().padStart(2, '0')}${format}${year}`
}

function getDateYesterday() {
  const dateYesterday = new Date();
  dateYesterday.setDate(dateYesterday.getDate() - 1);
  return {
    day: dateYesterday.getDate(),
    month: dateYesterday.getMonth()+1,
    year: dateYesterday.getFullYear(),
  };
}