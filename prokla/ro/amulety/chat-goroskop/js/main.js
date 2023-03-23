// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // input strings of text
        this.strings = this.options.strings;

        // array
        this.array_id = this.options.array_id;
        this.array_count = this.options.array_count;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        //template
        this.template = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.string)
            // current string will be passed as an argument each time after this
            var self = this;

            self.timeout = setTimeout(function() {
                for (var i=0;i<self.strings.length;++i) self.sequence[i]=i;

                // shuffle the array if true
                if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                // Start typing
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        }

        ,
        build: function() {
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return false;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function() {


                    if (curStrPos === curString.length) {

                        // fires callback function
                        self.options.onStringTyped(self.options.array_id);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;
                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {
                        /* call before functions if applicable */
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);

                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        }

        ,
        backspace: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return false;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                    // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;

                        // Shuffle sequence again
                        if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }
        /**
         * Shuffles the numbers in the given array.
         * @param {Array} array
         * @returns {Array}
         */
        ,shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if(top) while(--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
            return array;
        }

        /*, stop: function() {
            var self = this;

            self.stop = true;
            clearInterval(self.timeout);
        }

        , start: function() {
            var self = this;
            if(self.stop === false)
               return;

            this.stop = false;
            this.init();
       }*/

        ,
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        // typing speed
        typeSpeed: -10,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // array
        array_id: false,
        array_count: false,
        //loop
        loop: false,
        template: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);


var h_old = document.querySelector(".helper_old");
var h_new = document.querySelector(".helper_new").textContent;
var curr = offer_params.currencyMain;
document.querySelector(".x_price_current").textContent = h_new+curr;
document.querySelector(".x_price_previous").textContent = h_old+curr;

$(function () {
    var e = new XMLHttpRequest;
    if (e.open("GET", "https://click.lucky.online/click/ip-location.html", !1), e.send(), 200 === e.status) {
        var t = JSON.parse(e.responseText);
        ! function (t, r) {
            $(".country").text(t), document.getElementsByTagName("body")[0], n(r)
        }(t.country, t.code)
    }

    function n(e) {
        var t, n = 0;
        $("select").change(function () {
            0 == n && (n = 1, $(this.children).each(function () {
                    this.selected && (sel = $(this).val())
                }), "undefined" == typeof sel && (sel = "RU"),
                "RU" == sel && ($(".country_name").text("Российские"), $(".country_name1").text("Российскому"), $(".country_name2").text("России"), $(".country_name3").text("Россию"), $(".country_name4").text("Российских"), $(".country_name5").text("Российской"), $(".country_name6").text("Российским"), $(".country_name7").text("Российскому"), $(".country_name8").text("Российскую"), $(".country_name9").text("Российские"), $(".country_name10").text("Российский"), $(".country_name11").text("России"), $(".country_name12").text("России"), $(".country_name13").text("Российская"), $(".country_name14").text("Российской"), $(".country_name18").text("всю Россию"),
                    document.getElementsByTagName("body")[0]),
                "KZ" == sel && ($(".country_name").text("Казахстанские"), $(".country_name1").text("Казахстанскому"), $(".country_name2").text("Казахстане"), $(".country_name3").text("Казахстан"), $(".country_name4").text("Казахстанских"), $(".country_name5").text("Казахстанской"), $(".country_name6").text("Казахстанским"), $(".country_name7").text("Казахстанскому"), $(".country_name8").text("Казахстанскую"), $(".country_name9").text("Казахстанские"), $(".country_name10").text("Казахстанский"), $(".country_name11").text("Казахстану"), $(".country_name12").text("Казахстана"), $(".country_name13").text("Казахстанская"), $(".country_name14").text("Казахстанской"), $(".country_name18").text("весь Казахстан"),
                    document.getElementsByTagName("body")[0]),
                "BY" == sel && ($(".country_name").text("Беларусские"), $(".country_name1").text("Беларусскому"), $(".country_name2").text("Беларуси"), $(".country_name3").text("Беларусь"), $(".country_name4").text("Беларусских"), $(".country_name5").text("Беларусской"), $(".country_name6").text("Беларусским"), $(".country_name7").text("Беларусскому"), $(".country_name8").text("Беларусскую"), $(".country_name9").text("Беларусские"), $(".country_name10").text("Беларусский"), $(".country_name11").text("Беларуси"), $(".country_name12").text("Беларуси"), $(".country_name13").text("Беларусская"), $(".country_name14").text("Беларусской"), $(".country_name18").text("всю Беларусь"),
                    document.getElementsByTagName("body")[0]),
                "UA" == sel && ($(".country_name").text("Украинские"), $(".country_name1").text("Украинскому"), $(".country_name2").text("Украине"), $(".country_name3").text("Украину"), $(".country_name4").text("Украинских"), $(".country_name5").text("Украинской"), $(".country_name6").text("Украинским"), $(".country_name7").text("Украинскому"), $(".country_name8").text("Украинскую"), $(".country_name9").text("Украинские"), $(".country_name10").text("Украинский"), $(".country_name11").text("Украине"), $(".country_name12").text("Украины"), $(".country_name13").text("Украинская"), $(".country_name14").text("Украинской"), $(".country_name18").text("всю Украину"),
                    document.getElementsByTagName("body")[0]),
                "KG" == sel && ($(".country_name").text("Киргизские"), $(".country_name1").text("Киргизскому"), $(".country_name2").text("Киргизии"), $(".country_name3").text("Киргизию"), $(".country_name4").text("Киргизских"), $(".country_name5").text("Киргизской"), $(".country_name6").text("Киргизским"), $(".country_name7").text("Киргизскому"), $(".country_name8").text("Киргизскую"), $(".country_name9").text("Киргизские"), $(".country_name10").text("Киргизский"), $(".country_name11").text("Киргизии"), $(".country_name12").text("Киргизии"), $(".country_name13").text("Киргизская"), $(".country_name14").text("Киргизской"), $(".country_name18").text("всю Киргизию"),
                    document.getElementsByTagName("body")[0]),
                "AM" == sel && ($(".country_name").text("Армянские"), $(".country_name1").text("Армянскому"), $(".country_name2").text("Армении"), $(".country_name3").text("Армению"), $(".country_name4").text("Армянских"), $(".country_name5").text("Армянской"), $(".country_name6").text("Армянским"), $(".country_name7").text("Армянскому"), $(".country_name8").text("Армянскую"), $(".country_name9").text("Армянские"), $(".country_name10").text("Армянский"), $(".country_name11").text("Армении"), $(".country_name12").text("Армении"), $(".country_name13").text("Армянская"), $(".country_name14").text("Армянской"), $(".country_name18").text("всю Армению"),
                    document.getElementsByTagName("body")[0]),
                "MD" == sel && ($(".country_name").text("Молдавские"), $(".country_name1").text("Молдавскому"), $(".country_name2").text("Молдавии"), $(".country_name3").text("Молдавию"), $(".country_name4").text("Молдавских"), $(".country_name5").text("Молдавской"), $(".country_name6").text("Молдавским"), $(".country_name7").text("Молдавскому"), $(".country_name8").text("Молдавскую"), $(".country_name9").text("Молдавские"), $(".country_name10").text("Молдавский"), $(".country_name11").text("Молдавии"), $(".country_name12").text("Молдавии"), $(".country_name13").text("Молдавская"), $(".country_name14").text("Молдавской"), $(".country_name18").text("всю Молдавию"),
                    document.getElementsByTagName("body")[0]),
                "GE" == sel && ($(".country_name").text("Грузинские"), $(".country_name1").text("Грузинскому"), $(".country_name2").text("Грузии"), $(".country_name3").text("Грузию"), $(".country_name4").text("Грузинских"), $(".country_name5").text("Грузинской"), $(".country_name6").text("Грузинским"), $(".country_name7").text("Грузинскому"), $(".country_name8").text("Грузинскую"), $(".country_name9").text("Грузинские"), $(".country_name10").text("Грузинский"), $(".country_name11").text("Грузии"), $(".country_name12").text("Грузии"), $(".country_name13").text("Грузинская"), $(".country_name14").text("Грузинской"), $(".country_name18").text("всю Грузию"),
                    document.getElementsByTagName("body")[0]),
                "AZ" == sel && ($(".country_name").text("Азербайджанские"), $(".country_name1").text("Азербайджанскому"), $(".country_name2").text("Азербайджане"), $(".country_name3").text("Азербайджан"), $(".country_name4").text("Азербайджанских"), $(".country_name5").text("Азербайджанской"), $(".country_name6").text("Азербайджанским"), $(".country_name7").text("Азербайджанскому"), $(".country_name8").text("Азербайджанскую"), $(".country_name9").text("Азербайджанские"), $(".country_name10").text("Азербайджанский"), $(".country_name11").text("Азербайджану"), $(".country_name12").text("Азербайджана"), $(".country_name13").text("Азербайджанская"), $(".country_name14").text("Азербайджанской"), $(".country_name18").text("весь Азербайджан"),
                    document.getElementsByTagName("body")[0]),
                "UZ" == sel && ($(".country_name18").text("весь Узбекистан"),
                    document.getElementsByTagName("body")[0]),
                n = 0)
        }).change();
    }
});

setTimeout("$('.body').css('transform','translateY(0)');", 1000);
setTimeout("$('.main-desc').addClass('b-show')", 1500);
setTimeout("$('body').addClass('add-scroll')", 3000);
setTimeout("$('html').addClass('add-scroll')", 3000);

setTimeout(function () {
    var $_GET = {},
        args = location.search.substr(1).split(/&/);
    for (var i = 0; i < args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }

    var a = document.querySelector(".country_name18").innerHTML,
        r = document.querySelector(".new_price_val").innerHTML,
        o = document.querySelector(".new_price_sig").innerHTML;

    var questionAnswer = [];

    $(document).ready(function (t) {

        function date_locale() {
            var d = new Date();

            var month = new Array("ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie");

            var monthNumb = d.getMonth() + 1;

            var year = d.getFullYear();
            if (monthNumb === 12) {
                monthNumb = 0;
                var year = d.getFullYear() + 1;
            }

            return (month[monthNumb] + ' ' + year);
        };

        var url;
        var img = $('img')[0];

        if ($(img).attr('src').indexOf('cdn') !== -1) {
            url = $(img).attr('src').split('/').slice(0, 3).join('/') + '/';
        } else {
            url = '';
        }

        var fotoProduct = ("<br><br><img src='" + url + "prod.png'>");


        function date_month() {
            var d = new Date();

            var month = new Array("ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie");

            var monthNumb = d.getMonth() + 1;

            var year = d.getFullYear();
            if (monthNumb === 12) {
                monthNumb = 0;
                var year = d.getFullYear() + 1;
            }

            return (month[monthNumb]);
        };

        t.randomIntFromInterval = function (t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
        }

        t.managerDialog = [{
                text: "Bună ziua. Numele meu este <b>Ana</b>. Bine ați venit pe site-ul oficial a babei Dochia" +
                    `<br><br>Horoscopul babei Dochia pentru ${date_locale()} a uluit <b class="country_name18">${a}</b>. 3 semne ale zodiacului vor începe să înoate în bani, iar 2 semne vor deveni cerșetori.
                <br><br>Acest horoscop este încă un secret bine păzit! El oferă instrucțiuni cu precizie de 100% cu privire la ceea ce trebuie să faceți pentru a obține venituri mari!
                <br><br>Horoscopul este emis STRICT personal și gratuit. Horoscopul nu poate fi discutat cu nimeni, probabilitatea diocherii acțiunilor voastre este mare!
                <br><br>Pentru a obține un horoscop gratuit de la baba Dochia, răspundeți la 2 întrebări`
            },
            {
                text: "Sunteți femeie sau bărbat?",
                m: {
                    text: 'Bărbat',
                },
                w: {
                    text: 'Femeie'
                }
            }, {
                text: "Când v-ați născut?"
            }
        ];

        t.userZodiak = [{
            text: "Mulțumesc! După horoscop sunteți - {zodie}. <b style='display:none' class='zod'>{zodie}</b>",
        }];

        t.managerVariants = {
            w: [
                [
                    [{
                        text: "Baba Dochia spune că sunteți o persoană destul de calmă, dar uneori sunteți predispusă la crize de dispoziție rea. ",
                    }, {
                        text: "Aveți mulți cunoscuți, cu toate acestea prietenii apropiați îi alegeți cu atenție. Vă place să petreți timp cu prietenii, deși uneori doriți să fiți singuri.",
                    }, {
                        text: "Se întâmplă că sunteți foarte enervat pe cei dragi, dar apoi vă calmați și vă simțiți vinovat.",
                    }, {
                        text: "Semnul - {zodie} în viitorul apropiat îl așteaptă o revoltă financiară. Norocul financiar este la fund acum. Singuri respingeți banii și norocul din viață voastră.",
                    }, {
                        text: "Baba Dochia spune că nu veți putea ieși din această gaură încă mulți ani dacă lăsați totul așa cum este. Vă așteaptă sărăcia.",
                    }, {
                        text: "Acum sunteți pe calea greșită. Nu vă place de ea și încercați să o schimbați sau să găsiți ajutor de la cineva care o poate face.",
                    }, {
                        text: "Baba Dochia vede clar că în " + date_month() + " va exista posibilitatea să vă schimbați întreaga viață, de la o dungă neagră la una albă, până la sfârșitul vieții voastre.",
                    }, {
                        text: "Totul în viața dvs. nu se petrece întâmplător. Semnul - {zodie} este foarte susceptibil la energie proastă. Trebuie să vă protejați și să atrageți norocul de bani.",
                    }],
                    [{
                        text: "Baba Dochia vrea să vă avertizeze - în situația dvs., conspirațiile simple nu vor ajuta. Aici trebuie să acționați cu încredere și să priviți rădăcina problemei. O conspirație obișnuită nu vă va putea rezolva problema, ci doar va înrăutăți situația.",
                    }, {
                        text: "Ajutorul babei Dochia va consta în faptul de a vă scăpa de semnul negru și să vă curățe de influența jurământului de nefericire. Acest lucru vă va elibera norocul din captivitate.",
                    }, {
                        text: "Baba Dochia va face o amuletă specială cu o conspirație specială care vă va elimina jurământul de nenorocire.",
                    }, {
                        text: "Așa va arăta amuleta dvs. " + fotoProduct + " "
                    }, {
                        text: "Această amuletă deja într-o lună vă va schimba radical viața. Banii vă vor reveni din diferite surse, veți putea uita de eșecurile financiare și de a economisi banii pentru tot restul vieții.",
                    }, {
                        text: "Baba Dochia întotdeauna se străduie să ajute oamenii în rezolvarea problemelor lor și nu încearcă niciodată să beneficieze. De aceea, primiți o reducere de 90% la amuletă. Prețul cu reducere doar <b class='new_price_val'>" + r + "</b> <b class='new_price_sig'>" + o + "</b>. <br><br>Reducerea este valabilă numai astăzi și a rămas doar  {number} de amulete cu reducere",
                    }, {
                        text: "Pentru a obține o amuletă, trebuie doar să vă scrieți numele și numărul de telefon în formularul de comandă",
                    }]
                ],
            ],
            m: [
                [
                    [{
                        text: "Baba Dochia spune că sunteți o persoană destul de calmă, dar uneori sunteți predispusă la crize de dispoziție rea.",
                    }, {
                        text: "Aveți mulți cunoscuți, cu toate acestea prietenii apropiați îi alegeți cu atenție. Vă place să petreți timp cu prietenii, deși uneori doriți să fiți singuri.",
                    }, {
                        text: "Se întâmplă că sunteți foarte enervat pe cei dragi, dar apoi vă calmați și vă simțiți vinovat.",
                    }, {
                        text: "Semnul  - {zodie} în viitorul apropiat îl așteaptă o revoltă financiară. Norocul financiar este la fund acum. Singuri respingeți banii și norocul din viață voastră.",
                    }, {
                        text: "Baba Dochia spune că nu veți putea ieși din această gaură încă mulți ani dacă lăsați totul așa cum este. Vă așteaptă sărăcia.",
                    }, {
                        text: "Acum sunteți pe calea greșită. Nu vă place de ea și încercați să o schimbați sau să găsiți ajutor de la cineva care o poate face.",
                    }, {
                        text: "Baba Dochia vede clar că în " + date_month() + " va exista posibilitatea să vă schimbați întreaga viață, de la o dungă neagră la una albă, până la sfârșitul vieții voastre.",
                    }, {
                        text: "Totul în viața dvs. nu se petrece întâmplător. Semnul - {zodie} este foarte susceptibil la energie proastă. Trebuie să vă protejați și să atrageți norocul de bani.",
                    }],
                    [{
                        text: "Baba Dochia vrea să vă avertizeze - în situația dvs., conspirațiile simple nu vor ajuta. Aici trebuie să acționați cu încredere și să priviți rădăcina problemei. O conspirație obișnuită nu vă va putea rezolva problema, ci doar va înrăutăți situația.",
                    }, {
                        text: "Ajutorul babei Dochia va consta în faptul de a vă scăpa de semnul negru și să vă curățe de influența jurământului de nefericire. Acest lucru vă va elibera norocul din captivitate.",
                    }, {
                        text: "Baba Dochia va face o amuletă specială cu o conspirație specială care vă va elimina jurământul de nenoricire.",
                    }, {
                        text: "Așa va arăta amuleta dvs. " + fotoProduct + " ",
                    }, {
                        text: "Această amuletă deja într-o lună vă va schimba radical viața. Banii vă vor reveni din diferite surse, veți putea uita de eșecurile financiare și de a economisi banii pentru tot restul vieții.",
                    }, {
                        text: "Baba Dochia întotdeauna se străduie să ajute oamenii în rezolvarea problemelor lor și nu încearcă niciodată să beneficieze. De aceea, primiți o reducere de 90% la amuletă. Prețul cu reducere doar <b class='new_price_val'>" + r + "</b> <b class='new_price_sig'>" + o + "</b><br>Reducerea este valabilă numai astăzi și a rămas doar {number} de amulete cu reducere",
                    }, {
                        text: "Pentru a obține o amuletă, trebuie doar să vă scrieți numele și numărul de telefon în formularul de comandă",
                    }]
                ],
            ]
        };

        t.socNumber = [{
            text: "Numărul dv. sacru - {number}. Aceasta înseamnă că în " + date_month() + " viața dvs. se poate schimba dramatic în bine",
        }];

        t.getZodiak = function (e) {
            var n = parseInt(e[0]);
            switch (parseInt(e[1])) {
                case 1:
                    t.zodiak = n < 20 ? 10 : 11;
                    break;
                case 2:
                    t.zodiak = n < 19 ? 11 : 12;
                    break;
                case 3:
                    t.zodiak = n < 21 ? 12 : 1;
                    break;
                case 4:
                    t.zodiak = n < 20 ? 1 : 2;
                    break;
                case 5:
                    t.zodiak = n <= 21 ? 2 : 3;
                    break;
                case 6:
                    t.zodiak = n < 21 ? 3 : 4;
                    break;
                case 7:
                    t.zodiak = n < 23 ? 4 : 5;
                    break;
                case 8:
                    t.zodiak = n < 23 ? 5 : 6;
                    break;
                case 9:
                    t.zodiak = n < 23 ? 6 : 7;
                    break;
                case 10:
                    t.zodiak = n < 23 ? 7 : 8;
                    break;
                case 11:
                    t.zodiak = n < 22 ? 8 : 9;
                    break;
                case 12:
                    t.zodiak = n < 22 ? 9 : 10
            }

            return t.zodiak
        }

        t.ZodiakName = [{
            name: "Berbec",
            id: 1
        }, {
            name: "Taur",
            id: 2
        }, {
            name: "Gemeni",
            id: 3
        }, {
            name: "Rac",
            id: 4
        }, {
            name: "Leu",
            id: 5
        }, {
            name: "Fecioara",
            id: 6
        }, {
            name: "Balanță",
            id: 7
        }, {
            name: "Scorpion",
            id: 8
        }, {
            name: "Săgetător",
            id: 9
        }, {
            name: "Capricornul",
            id: 10
        }, {
            name: "Vărsător",
            id: 11
        }, {
            name: "Pesti",
            id: 12
        }];

        t.DateBirthday = [{
            day: [1, 31],
            month: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
            year: [1940, 2019]
        }];

        t.MonthVariantType = ['january', 'fabruary', 'march', 'april', 'may', 'june', 'august', 'august', 'september', 'october', 'november', 'december', ];

        t.MonthVariant = {
            january: ['ianuarie', 'ianuarie', 'ianuarie'],
            fabruary: ['februarie', 'februarie', 'februarie'],
            march: ['martie', 'martie', 'martie'],
            april: ['aprilie', 'aprilie', 'aprilie'],
            may: ['mai', 'mai', 'mai'],
            june: ['iunie', 'iunie', 'iunie'],
            july: ['iulie', 'iulie', 'iulie'],
            august: ['august', 'august', 'august'],
            september: ['septembrie', 'septembrie', 'septembrie'],
            october: ['octombrie', 'octombrie', 'octombrie'],
            november: ['noiembrie', 'noiembrie', 'noiembrie'],
            december: ['decembrie', 'decembrie', 'decembrie'],
        };


        //Интерфейс сообщений
        function Template(type, id = false, text = '') {


            var h = new Date();
            var minut = ('0' + h.getMinutes()).slice(-2);
            var hours = ('0' + h.getHours()).slice(-2);
            var time = hours + ":" + minut

            var template = '',
                avatar = '',
                id_text = '',
                id_paragraph = '';




            if (id) {
                id_text = "text-" + id;
                id_paragraph = ' class="p' + id + '"';
            }

            template = '<div class="chat-content-item ' + type + ' ' + id_text + '">' +
                '<div class="chat-content-desc"><div class="chat-content-desc-item ' + type + '">  ' + '<span class="time">' + time + '</span>' +
                '<p' + id_paragraph + '>' + text + '</p>' +
                '</div>' +
                '</div>' +
                '</div>';
            return template;
        }

        //Пол человека
        function Gender(info) {

            var template = '<div class="chat-content-buttons-gender">' +
                '<div class="chat-content-buttons-gender-block">' +
                '<span class="chooseGender" data-type="m">' + info.m.text + '</span>' +
                '</div>' +
                '<div class="chat-content-buttons-gender-block">' +
                '<span class="chooseGender" data-type="w">' + info.w.text + '</span>' +
                '</div>' +
                '</div>';
            return template;
        }


        //Дата рождения
        function Zodiak() {
            var list_day,
                list_month,
                list_year,
                Days = function () {
                    for (i = t.DateBirthday[0].day[0]; i < t.DateBirthday[0].day[1] + 1; i++) {
                        list_day += '<option value="' + i + '">' + i + '</option>';
                    }
                    return list_day;
                },
                Month = function () {
                    $.each(t.DateBirthday[0].month, function (index, value) {
                        var num = index + 1;
                        list_month += '<option value="' + num + '">' + value + '</option>';
                    });
                    return list_month;
                },
                Year = function () {
                    for (i = t.DateBirthday[0].year[0]; i < t.DateBirthday[0].year[1] + 1; i++) {
                        list_year += '<option value="' + i + '">' + i + '</option>';
                    }
                    return list_year;
                };
            var template = '<form name="questionForm" class="form">' +
                '<div class="form-group">' +
                '<div class="form-group-inline">' +
                '<select name="day" class="custom-select select-day">' +
                '<option value="" selected="selected">Zi</option>' +
                Days() +
                '</select>' +
                '</div>' +
                '<div class="form-group-inline full-month">' +
                '<select name="month" class="custom-select select-month">' +
                '<option value="" selected="selected">Lună</option>' +
                Month() +
                '</select>' +
                '</div>' +
                '<div class="form-group-inline year">' +
                '<select name="year" class="custom-select select-year">' +
                '<option value="" selected="selected">An</option>' +
                Year() +
                '</select>' +
                '</div>' +
                '</div>' +
                '</form>';
            return template;
        }

        //Replace
        t.Replace = function (text_str, obj) {
            var val = text_str,
                entries = Object.entries(obj);
            entries.forEach((para) => {
                var find = '{' + para[0] + '}',
                    regExp = new RegExp(find, 'g');
                val = val.replace(regExp, para[1]);
            })
            return val;
        }

        //Последовательный вывод массива сообщений
        t.LoadListMessages = function (text_info, zodie) {
            var i = 1,
                i2 = 1,
                count = 0,
                options = {
                    showCursor: false,
                    typeSpeed: 1
                };

            count = text_info.length;

            for (i == 1; i < count + 1; i++) {

                options.onStringTyped = function () {
                    i2++;
                    if (i2 < count + 1) {
                        options.array_id = i2;
                        options.strings = [text_info[i2 - 1]];
                        $('.chat-content-list').append(Template('manager', i2));
                        $(".chat-content-item.manager p.p" + i2).typed(options);

                        var div = $(".chat").height() + 100;
                        var win = $('.content').height();

                        if (div > win) {
                            $("#scroll_id").removeClass("hide");
                            var i = $(".inp").val();
                            $(".inp").val(++i);

                        }

                        function inputVal() {
                            $("#scroll_id").removeClass("aba");
                            $("#scroll_id").removeClass("hide");
                            var i = $(".inp").val();
                            $(".inp").val(++i);
                        }


                        if (document.getElementById('res').value == "0") {
                            $("#scroll_id").addClass("aba");
                        } else {
                            $("#scroll_id").removeClass("aba");
                        }

                    }

                    if (i2 == count + 1) {
                        setTimeout(function () {
                            $('.chat-content2').fadeIn(100);
                            $(".iframe-form").addClass("show");
                            // t.Scroll();
                        }, 1500);
                    }
                };

                if (i == 1) {
                    options.array_id = i;
                    options.strings = [text_info[i - 1]];
                    $('.chat-content-list').append(Template('manager', i));
                    $(".chat-content-item.manager p.p" + i).typed(options);
                    // t.Scroll();
                }
            }
        }

        //Результат выбора пола
        function GenderResult(type_name) {

            $('.chat-content-buttons-gender').remove();
            //Вывод сообщения с полом
            $('.chat-content-list').append(Template('user'));
            $("#scroll_id").addClass("hide-q");
            $(".content").animate({
                scrollTop: $('.chat-content-list').height()
            }, 700);
            $("#scroll_id").removeClass("hide-q");
            $(".chat-content-item.user p").html(t.managerDialog[1][type_name].text);
            questionAnswer.push(t.managerDialog[1][type_name].text);
            //Вывод сообщения когда родились

            $('.chat-content-list').append(Template('manager'));


            $(".chat-content-item.manager p").typed({

                strings: [t.managerDialog[2].text],
                showCursor: false,
                callback: function () {
                    setTimeout(function () {


                        //Вывод выбора даты рождения
                        $('.chat-content-list').append(Zodiak());
                        // t.Scroll();
                        var date_birth = [],
                            d;

                        //Выбор даты рождения
                        var form = $('form[name="questionForm"]');
                        form.find('select').addClass('empty_field');

                        $("#scroll_id").addClass("hide-q");
                        $(".content").animate({
                            scrollTop: $('.chat-content-list').height()
                        }, 700);
                        $("#scroll_id").removeClass("hide-q");

                        function checkSelect() {
                            form.find('select').each(function () {
                                if ($(this).val() != '') {
                                    $(this).removeClass('empty_field');
                                } else {
                                    $(this).addClass('empty_field');
                                }

                                date_birth[this.name] = $(this).val();
                            });
                        };
                        form.find('select').change(function () {
                            checkSelect();

                            var sizeEmpty = form.find('.empty_field').size();
                            if (sizeEmpty == 0) {
                                form.remove();
                                var type = t.MonthVariantType[date_birth['month'] - 1],
                                    month1 = t.MonthVariant[type][0],
                                    month2 = t.MonthVariant[type][1],
                                    month3 = t.MonthVariant[type][2];
                                d = [date_birth['day'], date_birth['month']], d = t.getZodiak(d), date_birth['day'] = date_birth['day'].length > 1 ? date_birth['day'] : "0" + date_birth['day'], date_birth['month'] = date_birth['month'].length > 1 ? date_birth['month'] : "0" + date_birth['month'];
                                //Вывод сообщения с датой рождения
                                $('.chat-content-list').append(Template('user', 'date'));
                                $(".chat-content-item.user.text-date p").html(date_birth['day'] + '.' + date_birth['month'] + '.' + date_birth['year']);
                                questionAnswer.push(date_birth['day'] + '.' + date_birth['month'] + '.' + date_birth['year']);

                                var array_text = [],
                                    text_typed = [],
                                    replace_reg = {
                                        'zodie': t.ZodiakName[d - 1].name,
                                        'date': date_birth['day'],
                                        'month1': month1,
                                        'month2': month2,
                                        'month3': month3,
                                        'year': date_birth['year'],
                                        'number': t.randomIntFromInterval(4, 10)
                                    };

                                //Вывод текста с зодиаком
                                $('.chat-content-list').append(Template('manager', 'birthday'));

                                var str = t.userZodiak[0].text,
                                    UserZodiakText = t.Replace(str, replace_reg);
                                $(".chat-content-item.manager p").typed({
                                    strings: [UserZodiakText],
                                    showCursor: false,
                                    callback: function () {
                                        var str2 = t.Replace(t.socNumber[0].text, replace_reg),
                                            socNumberText = [{
                                                text: str2
                                            }];
                                        array_text = $.merge(t.managerVariants[type_name][0][0], socNumberText);
                                        array_text = $.merge(array_text, t.managerVariants[type_name][0][1]);

                                        $.each(array_text, function (index, value) {

                                            text_typed.push(t.Replace(value['text'], replace_reg));
                                        });

                                        //Вывод текста после зодиака
                                        t.LoadListMessages(text_typed, replace_reg['zodie']);
                                    }
                                });
                            }
                        });
                    }, 1000);
                }
            })
        }

        $(window).on('load', function () {
            $('.chat-content-list').append(Template('manager'));
            // t.Scroll();
            $(".chat-content-item.manager p").typed({
                //Первое сообщение
                strings: [t.managerDialog[0].text],
                showCursor: false,
                typeSpeed: 1,
                callback: function () {
                    setTimeout(function () {
                        //Второе сообщение
                        $('.chat-content-list').append(Template('manager'));
                        // t.Scroll();
                        $(".chat-content-item.manager p").typed({
                            strings: [t.managerDialog[1].text],
                            showCursor: false,
                            typeSpeed: 1,
                            callback: function () {
                                setTimeout(function () {
                                    // t.Scroll();
                                    //Вывод сообщения с выбором пола
                                    $('.chat-content-list').append(Gender(t.managerDialog[1]));
                                    // t.Scroll();
                                    //Выбор пола
                                    $('.chooseGender').on('click', function () {
                                        var type = $(this).data('type');
                                        GenderResult(type);
                                    });

                                    setInterval(function () {
                                        let userSex;
                                        let zodiac;


                                        zodiac = $(".zod").text();
                                        userSex = $(".user:first-child p").text();
                                        $('input[name=comments]').val("сайт бабы Нины" + ", " + userSex + ' /' + zodiac);
                                    }, 500)

                                }, 1000);
                            }
                        });

                    }, 1000);
                }
            });
        })
    })




}, 0);





$('.content').scroll(function () {
    if (document.getElementById('res').value == "0") {
        $("#scroll_id").addClass("aba");
    } else {
        $("#scroll_id").removeClass("aba");
    }
});



/* Скролл к якорю */
$("[data-scroll]").on("click", function (event) {
    $(".content").animate({
        scrollTop: $('.chat-content-list').height()
    }, 700);
    $("#scroll_id").addClass("hide");
});


/* Скрыть/показать кнопку скролла */
var $marker = $('#down-box');
$('.content').scroll(function () {

    if ($('.content').scrollTop() + $('.content').height() >= $('.chat-content-list').height() + 100) {
        document.getElementById('res').value = "0";
        $("#scroll_id").addClass("hide");
    } else {
        $("#scroll_id").removeClass("hide");
    }
});