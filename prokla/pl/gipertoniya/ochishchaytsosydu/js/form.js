var countryPL = {
  name: "Polska",
  prefix: "+48",
  pattern: "([0-9]{9})"
};
var countryAL = {
  name: "Albania",
  prefix: "+355",
  pattern: "([0-9]{9})"
};
var countryAD = {
  name: "Andora",
  prefix: "+376",
  pattern: "([0-9]{9})"
};
var countryAT = {
  name: "Austria",
  prefix: "+43",
  pattern: "([0-9]{13})"
};
var countryBE = {
  name: "Belgia",
  prefix: "+32",
  pattern: "([0-9]{9})"
};
var countryBY = {
  name: "Białoruś",
  prefix: "+375",
  pattern: "([0-9]{9})"
};
var countryBA = {
  name: "Bośnia i Hercegowina",
  prefix: "+387",
  pattern: "([0-9]{9})"
};
var countryBG = {
  name: "Bułgaria",
  prefix: "+359",
  pattern: "([0-9]{9})"
};
var countryHR = {
  name: "Chorwacja",
  prefix: "+385",
  pattern: "([0-9]{9})"
};
var countryME = {
  name: "Czarnogóra",
  prefix: "+382",
  pattern: "([0-9]{12})"
};
var countryCZ = {
  name: "Republika Czeska",
  prefix: "+420",
  pattern: "([0-9]{9})"
};
var countryDK = {
  name: "Dania",
  prefix: "+45",
  pattern: "([0-9]{9})"
};
var countryEE = {
  name: "Estonia",
  prefix: "+372",
  pattern: "([0-9]{9})"
};
var countryFI = {
  name: "Finlandia",
  prefix: "+358",
  pattern: "([0-9]{10})"
};
var countryFR = {
  name: "Francja",
  prefix: "+33",
  pattern: "([0-9]{9})"
};
var countryGR = {
  name: "Grecja",
  prefix: "+30",
  pattern: "([0-9]{10})"
};
var countryES = {
  name: "Hiszpania",
  prefix: "+34",
  pattern: "([0-9]{9})"
};
var countryNL = {
  name: "Holandia",
  prefix: "+31",
  pattern: "([0-9]{10})"
};
var countryIE = {
  name: "Irlandia",
  prefix: "+353",
  pattern: "([0-9]{10})"
};
var countryIS = {
  name: "Islandia",
  prefix: "+354",
  pattern: "([0-9]{9})"
};
var countryCA = {
  name: "Kanada",
  prefix: "+1",
  pattern: "([0-9]{9})"
};
var countryKZ = {
  name: "Kazachstan",
  prefix: "+7",
  pattern: "([0-9]{9})"
};
var countryLI = {
  name: "Liechtenstein",
  prefix: "+423",
  pattern: "([0-9]{7,9})"
};
var countryLT = {
  name: "Litwa",
  prefix: "+370",
  pattern: "([0-9]{9})"
};
var countryLU = {
  name: "Luksemburg",
  prefix: "+352",
  pattern: "([0-9]{9})"
};
var countryLV = {
  name: "Łotwa",
  prefix: "+371",
  pattern: "([0-9]{9})"
};
var countryMK = {
  name: "Macedonia",
  prefix: "+389",
  pattern: "([0-9]{9})"
};
var countryMT = {
  name: "Malta",
  prefix: "+356",
  pattern: "([0-9]{9})"
};
var countryMD = {
  name: "Mołdawia",
  prefix: "+373",
  pattern: "([0-9]{9})"
};
var countryMC = {
  name: "Monako",
  prefix: "+377",
  pattern: "([0-9]{9})"
};
var countryDE = {
  name: "Niemcy",
  prefix: "+49",
  pattern: "([0-9]{10,11})"
};
var countryPT = {
  name: "Portugalia",
  prefix: "+351",
  pattern: "([0-9]{9})"
};
var countryRU = {
  name: "Rosja",
  prefix: "+7",
  pattern: "([0-9]{9})"
};
var countryRO = {
  name: "Rumunia",
  prefix: "+40",
  pattern: "([0-9]{9,12})"
};
var countrySM = {
  name: "San Marino",
  prefix: "+378",
  pattern: "([0-9]{6,10})"
};
var countryXS = {
  name: "Serbia",
  prefix: "+381",
  pattern: "([0-9]{7})"
};
var countrySK = {
  name: "Słowacja",
  prefix: "+421",
  pattern: "([0-9]{9})"
};
var countrySI = {
  name: "Słowenia",
  prefix: "+386",
  pattern: "([0-9]{8})"
};
var countryUS = {
  name: "Stany Zjedn. Ameryki",
  prefix: "+1",
  pattern: "([0-9]{9,10})"
};
var countryBI = {
  name: "Białoruś",
  prefix: "+48",
  pattern: "([0-9]{9})"
};
var countryCH = {
  name: "Szwajcaria",
  prefix: "+41",
  pattern: "([0-9]{9})"
};
var countrySE = {
  name: "Szwecja",
  prefix: "+46",
  pattern: "([0-9]{9})"
};
var countryTR = {
  name: "Turcja",
  prefix: "+90",
  pattern: "([0-9]{9})"
};
var countryUA = {
  name: "Ukraina",
  prefix: "+380",
  pattern: "([0-9]{9})"
};
var countryVA = {
  name: "Watykan",
  prefix: "+39",
  pattern: "([0-9]{10})"
};
var countryHU = {
  name: "Węgry",
  prefix: "+36",
  pattern: "([0-9]{9})"
};
var countryGB = {
  name: "Wielka Brytania",
  prefix: "+44",
  pattern: "([0-9]{10})"
};
var countryIT = {
  name: "Włochy",
  prefix: "+39",
  pattern: "([0-9]{9,10})"
};
var countryNO = {
  name: "Norwegia",
  prefix: "+47",
  pattern: "([0-9]{9})"
};
var countryCY = {
  name: "Cypr",
  prefix: "+357",
  pattern: "([0-9]{9})"
};

var countryII = {
  name: "inne",
  prefix: "",
  pattern: "((\\+[0-9]{1,3})|0)?[0-9]{3,15}"
};


function preventNumberInput(e) {
  let keyCode = (e.keyCode ? e.keyCode : e.which);
  if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
    e.preventDefault();
  }
}

$(document).ready(function () {
  $('#text_field').keypress(function (e) {
    preventNumberInput(e);
  });

  $('.cta, .monogo-form__button, .popup-text-order, button, #btn-order, .wow, .tada, .wow.tada').click(function (e) {
    window.onbeforeunload = null;
  });

})