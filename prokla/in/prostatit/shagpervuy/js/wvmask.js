;(function () {
  'use strict'
  var mask = {
    getCountrySelects: function () {
      var selects = document.getElementsByName('country')
      return selects.length ? selects : 0
    },
    getPhones: function () {
      var phones = document.getElementsByName('phone')
      return phones.length ? phones : 0
    },
    init: function () {
      var selects = mask.getCountrySelects()
      var phones = mask.getPhones()
      if (selects && phones) {
        var countryCode = selects[0].value.toLowerCase()
        var countryCodes = {
          in: '+91',
        }
        selects.forEach(function (select) {
          select.addEventListener('change', function () {
            countryCode = this.value
            selects.forEach(function (sel) {
              sel.value = countryCode
            })
          })
        })
        phones.forEach(function (phone) {
          phone.pattern = '(\\+)[0-9]{11,16}'
          phone.addEventListener('focusin', function () {
            var code = countryCodes[countryCode.toLowerCase()]
            this.value = !(this.value.length > code.length) ? code : this.value
          })
          phone.addEventListener('input', function () {
            var code = countryCodes[countryCode.toLowerCase()]
            this.value.indexOf(code) && (this.value = code)
          })
        })
      }
    },
  }
  mask.init()
})()
