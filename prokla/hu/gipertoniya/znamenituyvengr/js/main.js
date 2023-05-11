const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","season","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), year: getYearWithCounter(_year, counter), season: getSeasonsName(seasonsName, _month, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getSeasonsName(array, month, bigFirstLetter) {const monthNumber = month === 12 ? 0 : month,seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);return changeFirstLetter(bigFirstLetter, array[seasonIndex]);} function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require,exports,module);
    } else {
        root.ouibounce = factory();
    }
}(this, function(require,exports,module) {

    return function ouibounce(el, config) {
        var config       = $.extend({},config),
            aggressive   = config.aggressive || false,
            sensitivity  = setDefault(config.sensitivity, 20),
            timer        = setDefault(config.timer, 1000),
            delay        = setDefault(config.delay, 0),
            oneEvent     = setDefault(config.oneEvent, true),
            callback     = config.callback || function() {},
            cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
            cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
            cookieName   = config.cookieName ? config.cookieName : 'viewedOuibounceModal',
            sitewide     = config.sitewide === true ? ';path=/' : '',
            _delayTimer  = null,
            _html        = document.documentElement;

        function setDefault(_property, _default) {
            return typeof _property === 'undefined' ? _default : _property;
        }

        function setDefaultCookieExpire(days) {
        
            var ms = days*24*60*60*1000;

            var date = new Date();
            date.setTime(date.getTime() + ms);

            return "; expires=" + date.toUTCString();
        }

        setTimeout(attachOuiBounce, timer);
        function attachOuiBounce() {
            _html.addEventListener('mouseleave', handleMouseleave);
            _html.addEventListener('mouseenter', handleMouseenter);
            _html.addEventListener('keydown', handleKeydown);
        }

        function handleMouseleave(e) {
            if (e.clientY > sensitivity || (checkCookieValue(cookieName, 'true') && !aggressive)) return;

            _delayTimer = setTimeout(_fireAndCallback, delay);
        }

        function handleMouseenter(e) {
            if (_delayTimer) {
                clearTimeout(_delayTimer);
                _delayTimer = null;
            }
        }

        var disableKeydown = false;
        function handleKeydown(e) {
            if (disableKeydown || checkCookieValue(cookieName, 'true') && !aggressive) return;
            else if(!e.metaKey || e.keyCode !== 76) return;

            disableKeydown = true;
            _delayTimer = setTimeout(_fireAndCallback, delay);
        }

        function checkCookieValue(cookieName, value) {
            return parseCookies()[cookieName] === value;
        }

        function parseCookies() {
        
            var cookies = document.cookie.split('; ');

            var ret = {};
            for (var i = cookies.length - 1; i >= 0; i--) {
                var el = cookies[i].split('=');
                ret[el[0]] = el[1];
            }
            return ret;
        }

        function _fireAndCallback() {
            fire();
            callback();
        }

        function fire() {
            
            if (el) el.style.display = 'block';
            disable();
        }

        function disable(options) {
            var options = options || {};

           
            if (typeof options.cookieExpire !== 'undefined') {
                cookieExpire = setDefaultCookieExpire(options.cookieExpire);
            }

           
            if (options.sitewide === true) {
                sitewide = ';path=/';
            }

          
            if (typeof options.cookieDomain !== 'undefined') {
                cookieDomain = ';domain=' + options.cookieDomain;
            }

            if (typeof options.cookieName !== 'undefined') {
                cookieName = options.cookieName;
            }

            document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;
            // remove listeners
            if( oneEvent ){
                _html.removeEventListener('mouseleave', handleMouseleave);
                _html.removeEventListener('mouseenter', handleMouseenter);
                _html.removeEventListener('keydown', handleKeydown);
            }
        }

        return {
            fire: fire,
            disable: disable
        };
    };
}));        
	            var modal = ouibounce(document.getElementById('ouibounce-modal'), {
	                aggressive: true,
	                timer: 0,
	                oneEvent: true,
	                sensitivity: 100
	            });

	            $('.underlay').on('click', function (e) {
                    e.preventDefault();
	                $('#ouibounce-modal').hide();
                    
	            });

	            $('.close-over').on('click', function (e) {
                    e.preventDefault();
	                $('#ouibounce-modal').hide();

                    
	            });
                
	            $('#ouibounce-modal .modal-footer a').on('click', function (e) {
                    e.preventDefault();
	                $('#ouibounce-modal').hide();
	            });

	            $('#ouibounce-modal .modal').on('click', function (e) {
	                e.stopPropagation();
	            });

