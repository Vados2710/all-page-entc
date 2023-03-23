

document.addEventListener('DOMContentLoaded', function () {
    function resetCheckedInput () {
        let inputs = document.querySelectorAll('input[type="radio"]:checked')
        for(let i = 0; i < inputs.length; i++) {
            console.log(inputs[i])
            inputs[i].checked = false
        }
    }
    resetCheckedInput()

    function changeCard() {
        let countStep = 0;
        let countCard = 0;
        let userData = {
            day: "",
            month: "",
            year: "",
        };
        let canToggle = true;

        let wrap = document.querySelector("#desk");
        let btnsNext = document.querySelectorAll(".next-step");

        wrap.addEventListener("click", function (e) {
            if (e.target.classList.contains("toggle-card") && !!canToggle) {
                canToggle = false;
                let cardItem = e.target.parentElement.parentElement.parentElement;

                cardItem.classList.add("chose");

                let boxClassName = ".card-box-step-" + countCard;
                let boxClassName2 = ".result-box-step-" + countCard;
                let box = document.querySelector(boxClassName);
                let box2 = document.querySelector(boxClassName2);
                let newImg = document.createElement("img");
                let newImg2 = document.createElement("img");
                //   newImg.setAttribute("src", e.target.parentElement.dataset.psrc);
                //   newImg2.setAttribute("src", e.target.parentElement.dataset.psrc);
                newImg.setAttribute(
                    "src",
                    e.target.parentElement.nextElementSibling.children[0].src
                );
                newImg2.setAttribute(
                    "src",
                    e.target.parentElement.nextElementSibling.children[0].src
                );
                newImg.setAttribute("class", e.target.getAttribute("class"));
                newImg2.setAttribute("class", e.target.getAttribute("class"));
                newImg.setAttribute("alt", "card");
                newImg2.setAttribute("alt", "card");

                setTimeout(function () {
                    box.appendChild(newImg);
                    box2.appendChild(newImg2);
                    cardItem.classList.add("ng-hide");
                }, 1500);
                setTimeout(function () {
                    countStep++;
                    countCard++;
                    toggleText(countStep);
                    toggleContent(countStep);
                }, 2000);
                $("html, body").delay(1500).animate({ scrollTop: 0 }, "slow");
                return false;
            }

        });
        choseDate(userData);

        for (let i = 0; i < btnsNext.length; i++) {
            btnsNext[i].addEventListener("click", function () {
                if (
                    countStep === 1 &&
                    (!userData.day || !userData.month || !userData.year)
                ) {
                    alert("Заполните, пожалуйста, все поля!");
                } else if (
                    countStep === 3 &&
                    (!userData.firstName || !userData.secondName || !userData.genere)
                ) {
                    alert("Заполните, пожалуйста, все поля!");
                } else {
                    countStep++;
                    toggleText(countStep);
                    toggleContent(countStep);
                    canToggle = true;
                }
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        }
    }
    
    
    function toggleContent(step) {
        let cardContent = document.querySelector('.step-card')
        let nextContent = document.querySelectorAll('.step-content')
    
        for(let i = 0; i < nextContent.length; i++) {
            if (+nextContent[i].dataset.step === step) {
                nextContent[i].classList.remove('ng-hide')
            } else {
                nextContent[i].classList.add('ng-hide')
            }
        }
    
    
        if (step % 2 !== 0) {
            cardContent.classList.add('ng-hide')
        } else {
            cardContent.classList.remove('ng-hide')
        }
    
    }
    
    function toggleText(step) {
        let allText = document.querySelectorAll('.header-text')
    
        for(let i = 0; i < allText.length; i++) {
            if (+allText[i].dataset.text === step) {
                allText[i].classList.remove('ng-hide')
            } else {
                allText[i].classList.add('ng-hide')
            }
        }
    
    }
    
    function choseDate (user) {
        let wrap = document.querySelectorAll('.data-content')
        let textInputs = document.querySelectorAll('.input-text')
    
    
        for(let t = 0; t < wrap.length; t++) {
            textInputs[t].addEventListener('change', function(e){
                user[e.target.name] = e.target.value
            })
        }
    
        for(let i = 0; i < wrap.length; i++) {
            wrap[i].addEventListener('click', function(e){
                let parent = e.target.parentElement.parentElement
                if (e.target.tagName === "INPUT" && parent.classList.contains('input-radio')) {
                    let selectedValue = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.date-select')
                    if (selectedValue) {
                        selectedValue.innerText = e.target.value
                    }
                    
                    user[e.target.name] = e.target.value
                } 
    
    
            })
        }
    
    
    }
    
    changeCard ()

    $(document).ready(function () {
        $(".btn-scroll").attr('data-scroll', '#order');
        $(function () {
            $('.btn-scroll').click(function (evt) {
                evt.preventDefault();
                var target = $(this).attr('data-scroll');
                $("html, body").animate({scrollTop: $(target).offset().top - 0}, "slow");
            });
        });
    });
    if (navigator.vendor.startsWith('Apple'))
    document.body.classList.add('on-apple');
} )



const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}