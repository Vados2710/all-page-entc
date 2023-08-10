document.addEventListener('DOMContentLoaded', function () { const months = {
	am: [
		'Հունվար',
		'Փետրվար',
		'Մարտ',
		'Ապրիլ',
		'Մայիս',
		'Հունիս',
		'Հուլիս',
		'Օգոստոս',
		'Սեպտեմբեր',
		'Հոկտեմբեր',
		'Նոյեմբեր',
		'Դեկտեմբեր',
	],
	it: [
		'Gennaio',
		'Febbraio',
		'Marzo',
		'Aprile',
		'Maggio',
		'Giugno',
		'Luglio',
		'Agosto',
		'Settembre',
		'Ottobre',
		'Novembre',
		'Dicembre',
	],
	es: [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	],
	fr: [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Août',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre',
	],
	pt: [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	],
	bg: [
		'Януари',
		'Февруари',
		'Март',
		'Април',
		'Май',
		'Юни',
		'Юли',
		'Август',
		'Септември',
		'Октомври',
		'Ноември',
		'Декември',
	],
	pl: [
		'Styczeń',
		'Luty',
		'Marzec',
		'Kwiecień',
		'Maj',
		'Czerwiec',
		'Lipiec',
		'Sierpień',
		'Wrzesień',
		'Październik',
		'Listopad',
		'Grudzień',
	],
	ro: [
		'Ianuarie',
		'Februarie',
		'Martie',
		'Aprilie',
		'Mai',
		'Iunie',
		'Iulie',
		'August',
		'Septembrie',
		'Octombrie',
		'Noiembrie',
		'Decembrie',
	],
	hu: [
		'Január',
		'Február',
		'Március',
		'Április',
		'Május',
		'Június',
		'Július',
		'Augusztus',
		'Szeptember',
		'Október',
		'November',
		'December',
	],
	cy: [
		'Ιανουάριος',
		'Φεβρουάριος',
		'Μάρτιος',
		'Απρίλιος',
		'Μάιος',
		'Ιούνιος',
		'Ιούλιος',
		'Αύγουστος',
		'Σεπτέμβριος',
		'Οκτώβριος',
		'Νοέμβριος',
		'Δεκέμβριος',
	],
	ru: [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	],
	th: [
		'มกราคม',
		'กุมภาพันธ์',
		'มีนาคม',
		'เมษายน',
		'พฤษภาคม',
		'มิถุนายน',
		'กรกฎาคม',
		'สิงหาคม',
		'กันยายน',
		'ตุลาคม',
		'พฤศจิกายน',
		'ธันวาคม',
	],
	cz: [
		'ledna',
		'února',
		'března',
		'dubna',
		'května',
		'června',
		'července',
		'srpna',
		'září',
		'října',
		'listopadu',
		'prosinec',
	],
	hr: [
		'siječnja',
		'veljače',
		'ožujka',
		'travnja',
		'svibnja',
		'lipnja',
		'srpnja',
		'kolovoza',
		'rujna',
		'listopada',
		'studenoga',
		'prosinca',
	],
	lt: [
		'Sausio',
		'vasario',
		'kovo',
		'balandžio',
		'gegužės',
		'birželio',
		'liepos',
		'rugpjūčio',
		'rugsėjo',
		'spalio',
		'lapkričio',
		'gruodžio',
	],
	lv: [
		'janvāris',
		'februāris',
		'marts',
		'aprīlis',
		'maijs',
		'jūnijs',
		'jūlijs',
		'augusts',
		'septembris',
		'oktobris',
		'novembris',
		'decembris',
	],
	rs: [
		'јануар',
		'фебруар',
		'март',
		'април',
		'мај',
		'јун',
		'јул',
		'август',
		'септембар',
		'октобар',
		'новембар',
		'децембар',
	],
	si: [
		'januar',
		'februar',
		'marec',
		'april',
		'maj',
		'junij',
		'julij',
		'avgust',
		'september',
		'oktober',
		'november',
		'december',
	],
	sk: [
		'januára',
		'februára',
		'marca',
		'apríla',
		'mája',
		'júna',
		'júla',
		'augusta',
		'septembra',
		'októbra',
		'novembra',
		'decembra',
	],
};
console.log(months);
(() => {
	// date.js
	const now = new Date();
	const fullDate = document.querySelectorAll('.fullDate');
	const fullDateMonth = document.querySelectorAll('.fullDateMonth');
	const fullYear = document.querySelectorAll('.fullYear');
	let mm;
	let day;
	let minDays;
	let xhr = new XMLHttpRequest();
	let response;
	const getFullDate = (d, geoCode = null) => {
		mm = now.getMonth() + 1;
		day = now.getDate() - d;
		if (geoCode) {
			mm = months[geoCode][mm - 1];
			return ' ' + day + ' ' + mm + ' ' + now.getFullYear();
		} else {
			if (now.getDate() < 10) day = '0' + now.getDate();
			if (mm < 10) mm = '0' + mm;
			return ' ' + day + '.' + mm + '.' + now.getFullYear();
		}
	};
	xhr.open('GET', 'https://api.sypexgeo.net/json/', false);
	xhr.send();
	if (xhr.status === 200) {
		response = JSON.parse(xhr.responseText).country.iso.toLowerCase();
	} else {
		response = 'ru';
	}
	const geoCode = response;
	fullDate.forEach((elem) => {
		if (elem.getAttribute('minDays')) {
			minDays = elem.getAttribute('minDays');
			elem.innerHTML = getFullDate(minDays);
		} else {
			elem.innerHTML = getFullDate(0);
		}
	});

	fullDateMonth.forEach((elem) => {
		if (elem.getAttribute('minDays')) {
			elem.innerHTML = getFullDate(minDays, geoCode);
		} else {
			elem.innerHTML = getFullDate(0, geoCode);
		}
	});

	fullYear.forEach((elem) => {
		elem.innerHTML = now.getFullYear();
	});
	// date.js
})();
(() => {
	document.querySelectorAll('a').forEach((elem) => {
		elem.setAttribute('href', 'javascript:void(0);');
		elem.addEventListener('click', () => {
			document.querySelector('#goToForm').scrollIntoView({
				block: 'start',
				behavior: 'smooth',
			});
		});
	});
})();(() => {
  if (document.querySelector('.kardineoNav__burger')) {
    const mobileMenuBtnNav = document.querySelector('.kardineoNav__burger');
    const menuNav = document.querySelector('.kardineoNav__menu ');
    mobileMenuBtnNav.addEventListener('click', () => {
      menuNav.classList.toggle('menu-active');
    });
  }
})();(() => {
	if (document.querySelector('.kardineoNavSection__burger')) {
		const mobileMenuBtnNavSection = document.querySelector(
			'.kardineoNavSection__burger'
		);
		const menuNavSection = document.querySelector('.kardineoNavSection__menu ');
		mobileMenuBtnNavSection.addEventListener('click', () => {
			menuNavSection.classList.toggle('menu-active');
		});
	}
})();});