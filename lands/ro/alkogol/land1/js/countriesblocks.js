(function (window) {
    'use strict';
    var countries = {
            es: ['AT', 'BG', 'GB', 'HU', 'DE', 'GR', 'ES', 'IT', 'CY', 'MK', 'NL', 'PL', 'PT', 'RO', 'RS', 'SK', 'SI', 'TR', 'FR', 'HR', 'CZ', 'CH'],
            sng: ['RU', 'UA', 'BY', 'KZ', 'MD', 'KG', 'UZ', 'AZ', 'AM', 'TJ', 'TM', 'GE']
        },
        currentCountry = '',
        cssClass = 'js__countryblock',
        checkCountry = function (country, arrCountry) {
            for (var i = 0; i < arrCountry.length; i++) {
                if (arrCountry[i].toLowerCase() == country.toLowerCase()) {
                    return true;
                    break;
                }
            };
            return false;
        },
        style = document.createElement('style');
    style.innerHTML = '.'+cssClass+' { display: none; }';

    window.document.getElementsByTagName('head')[0].appendChild(style);

    $(function () {
        currentCountry = lCountries.nginxCountryCode || null;
        $('.'+cssClass).each(function (index, elem) {
            var $el = $(elem),
                blockCountries = $el.attr('data-country').trim().split(',');

            for (var i = 0; i < blockCountries.length; i++) {
                if(blockCountries[i].toLowerCase() == currentCountry) {
                    elem.style.display = 'inline';
                }
                if(blockCountries[i].toLowerCase() === 'es') {
                    if(checkCountry(currentCountry, countries.es)) {
                        elem.style.display = 'inline';
                    }
                }
                if(blockCountries[i].toLowerCase() === 'sng') {
                    if(checkCountry(currentCountry, countries.sng)) {
                        elem.style.display = 'inline';
                    }
                }
            };
        });
    });
})(window);