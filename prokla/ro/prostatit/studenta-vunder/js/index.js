
function innerText(e, t, n, r) {
    let o = document.querySelector(e);
    d = new Date, p = new Date(d.getTime());
    let i = t + p.getHours() * n + p.getMinutes() * r;
    o.innerHTML = " " + i
}
if ($("a").click((function () {
        
    })), function () {
        "use strict";
        var e = function (e) {
                return document.querySelectorAll(e)
            },
            t = function (e, t) {
                if (!document.createEvent) {
                    var n = document.createEventObject();
                    return t.fireEvent("on" + e, n)
                }
                var r = document.createEvent("HTMLEvents");
                r.initEvent(e, !0, !1), t.dispatchEvent(r)
            },
            n = function (e) {
                if (document.addEventListener) document.addEventListener("DOMContentLoaded", e);
                else var t = setInterval((function () {
                    "complete" === document.readyState && (clearInterval(t), e())
                }), 5)
            },
            r = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++) t(e[n], n)
            },
            o = function () {
                this.userCountryCode = this.getCurrentCountry(), this.nginxCountryCode = this.getCurrentCountry(), this.defaultCountry = null, this.params = {
                    countrySelector: ".country_select",
                    mainPriceSelector: ".price_main",
                    oldPriceSelector: ".price_old",
                    phoneHelperSelector: ".phone_helper",
                    nameHelperSelector: ".name_helper"
                }, this.countries = window.countryList, "object" == typeof this.countries && (this.prepareCountries(), this.initEvents(), this.fillCountrySelect(), this.setActiveCountrySelect())
            };
        o.prototype.prepareCountries = function () {
            for (var e in this.countries)
                if (!0 === this.countries[e].isDefault) {
                    this.defaultCountry = e;
                    break
                }
        }, o.prototype.getCurrentCountry = function () {
            var e = window.location.search;
            return "" === e ? this.defaultCountry : e.match(/c\=([a-z]{2})/i) ? e.match(/c\=([a-z]{2})/i)[1] : this.defaultCountry
        }, o.prototype.initEvents = function () {
            var t = this,
                n = e(this.params.countrySelector);
            if (n.length > 0)
                for (var r = 0, o = n.length; o > r; r++) n[r].onchange = function (e) {
                    t.changeSelectCountry.call(t, e)
                }
        }, o.prototype.changeSelectCountry = function (t) {
            var n = ((t = t || window.event).currentTarget || t.srcElement).value,
                o = this.countries[n];
            this.userCountryCode = n, r(e(this.params.mainPriceSelector), (function (e, t) {
                e.innerHTML = '<span class="x_price_current">' + o.price + '</span><span class="x_currency">' + o.labelPrice + "</span>"
            })), r(e(this.params.oldPriceSelector), (function (e, t) {
                e.innerHTML = '<span class="x_price_previous">' + o.oldPrice + '</span><span class="x_currency">' + o.labelPrice + "</span>"
            })), o.phoneHelper && r(e(this.params.phoneHelperSelector), (function (e, t) {
                e.innerHTML = o.phoneHelper
            })), o.nameHelper && r(e(this.params.nameHelperSelector), (function (e, t) {
                e.innerHTML = o.nameHelper
            }))
        }, o.prototype.fillCountrySelect = function () {
            var t, n = function (e) {
                    var t = document.createElement("OPTION");
                    return t.value = e.code, t.text = e.name, t
                },
                r = e(this.params.countrySelector);
            if (r.length > 0)
                for (var o = 0, i = r.length; i > o; o++)
                    if ("SELECT" === r[o].nodeName)
                        for (var a in this.countries) t = this.countries[a], r[o].options.add(n(t))
        }, o.prototype.setActiveCountrySelect = function () {
            var n = e(this.params.countrySelector),
                r = this.nginxCountryCode || this.defaultCountry;
            if (void 0 === this.countries[this.nginxCountryCode] && (r = this.defaultCountry), n.length > 0)
                for (var o = 0, i = n.length; i > o; o++) n[o].value = r, t("change", n[o])
        }, n((function () {
            window.lCountries = new o
        }))
    }(), document.addEventListener("DOMContentLoaded", (function () {
        innerText(".o-btn-text1", 159, 2, 2), innerText(".o-btn-text2", 59, 1, 0), innerText(".o-btn-text3", 204, 3, 1), innerText(".o-btn-text4", 48, 2, 1), innerText(".o-btn-text5", 314, 2, 3), innerText(".o-btn-text6", 61950, 10, 2)
    })), document.body.classList.contains("ev-date")) {
    function postDate() {
        const e = 864e5,
            t = new Date;
        let n;
        n = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
        for (let n = 0; n < 90; n++) {
            const a = "date-" + n,
                c = document.getElementsByClassName(a),
                s = new Date(t.getTime() - n * e);
            let u = 0,
                l = r(c);
            l = o(l);
            for (let e = 0; e < c.length; e++) {
                const t = c[e].dataset;
                t.format ? c[e].innerHTML = i(s, t.format) : c[e].innerHTML = i(s), /\btime\b/.test(c[e].className) && (c[e].innerHTML += " " + l[u], u++)
            }
        }
        for (let n = 0; n < 90; n++) {
            const a = "date-" + n,
                c = document.getElementsByClassName(a),
                s = new Date(t.getTime() - n * e);
            let u = r(c);
            u = o(u);
            for (let e = 0; e < c.length; e++) {
                const t = c[e].dataset;
                t.format ? c[e].innerHTML = i(s, t.format) : c[e].innerHTML = i(s)
            }
        }

        function r(e, t) {
            const n = [];
            for (let t = 0; t < e.length; t++) e[t].className.match(/\btime\b/) && n.push(Math.round(1440 * Math.random()));
            return t ? n.sort((function (e, t) {
                return t - e
            })) : n.sort((function (e, t) {
                return e - t
            })), n
        }

        function o(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const r = Math.floor(e[n] / 60),
                    o = e[n] % 60,
                    i = r < 10 ? "0" + r : r,
                    a = o < 10 ? "0" + o : o;
                t.push(i + ":" + a)
            }
            return t
        }

        function i(e, t) {
            let r = "";
            const o = e.getDate(),
                i = e.getFullYear(),
                a = e.getMonth() + 1;
            switch (t || !0) {
                case "yyyy":
                    return r += "" + i, r;
                case "yyyy-1":
                    return r += "" + i - 1, r;
                case "yyyy-2":
                    return r += "" + i - 2, r;
                case "mm.dd.yyyy":
                    return r += a < 10 ? "0" + a : a, r += ".", r += o < 10 ? "0" + o : o, r += "." + i, r;
                case "month":
                    return r += n[a - 1].toLowerCase(), r;
                case "dd":
                    return r += o < 10 ? "0" + o : o, r;
                case "dd month":
                    return r += o < 10 ? "0" + o : o, r += " ", r += n[a - 1].toLowerCase(), r;
                case "dd month yyyy":
                    return r += o < 10 ? "0" + o : o, r += " ", r += n[a - 1].toLowerCase(), r += " " + i, r;
                case "day dd, month yyyy":
                    return r += ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][new Date(i, a - 1, o).getDay()], r += " ", r += o < 10 ? "0" + o : o, r += " ", r += n[a - 1], r += " " + i, r;
                case "dd/mm/yyyy":
                    return r += o < 10 ? "0" + o : o, r += "/", r += a < 10 ? "0" + a : a, r += "/" + i, r;
                case "dd-mm-yyyy":
                    return r += o < 10 ? "0" + o : o, r += "-", r += a < 10 ? "0" + a : a, r += "-" + i, r;
                default:
                    return r += o < 10 ? "0" + o : o, r += ".", r += a < 10 ? "0" + a : a, r += "." + i, r
            }
        }
    }
    document.addEventListener("DOMContentLoaded", postDate)
}