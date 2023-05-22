function hide() {
  var elem = document.getElementById('country');

  elem.style.display = 'none';
}

hide();

let prefix = () => {
  let dropdown = "country" + jQuery_3_5_1("#country :selected").val();
  let valueName = eval(dropdown);
  jQuery_3_5_1("#phone").val(valueName.prefix);
}

jQuery_3_5_1('#country').change(function () {
  prefix();
})



jQuery_3_5_1.get("https://pro.ip-api.com/json/?fields=61439&key=Y45adOtompd66eM", function (response) {
  var countryCode = "pl";
  jQuery_3_5_1(`#country option[value=${countryCode}]`).attr('selected', 'selected');
  prefix();
}, "jsonp");


function preventNumberInput(e) {
  let keyCode = (e.keyCode ? e.keyCode : e.which);
  if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
    e.preventDefault();
  }
}

jQuery_3_5_1(document).ready(function () {
  jQuery_3_5_1('#text_field').keypress(function (e) {
    preventNumberInput(e);
  });
})


var countrypl = {
  name: "Polska",
  prefix: "+48",
  pattern: "(((\+[0-9]{2})|0)?[0-9]{9})"
};
