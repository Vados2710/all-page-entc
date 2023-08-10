const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    monthMin = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    daysMin = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"], seasons = ["зима", "весна", "лето", "осень"];

function postDate(e, t, n, a, o) {
    for (let e = 0; e < 60; e++) l(e, "date-"), l(e, "date");

    function l(e, t) {
        let n;
        n = "date-" === t ? -e : e;
        const a = new Date(Date.now() + 864e5 * n), o = a.getDate(), l = a.getMonth() + 1, i = a.getFullYear(),
            s = c(o), u = s + "." + c(l) + "." + i, d = t + e, m = document.querySelectorAll("." + d);
        for (let e = 0; e < m.length; e++) {
            const t = m[e].dataset.format;
            m[e].innerHTML = void 0 !== t && "" !== t ? String(r(s, l, i, t, n)) : u
        }
    }

    function r(e, t, n, a, o) {
        let l = a;
        const r = ["dd", "mm", "yyyy", "year"], s = {dd: e, mm: c(t), yyyy: n, year: i(n, o)};
        for (let e = 0; e < r.length; e++) {
            let t = r[e], n = new RegExp(t);
            l = l.replace(n, s[t])
        }
        return l.split(" ").join(" ")
    }

    function i(e, t) {
        return e + t
    }

    function c(e) {
        return e < 10 ? "0" + e : e
    }
}

document.body.classList.contains("ev-date") && document.addEventListener("DOMContentLoaded", (function () {
    postDate(days, daysMin, months, monthMin, seasons)
}));
const doneTitle = "Il commento è stato pubblicato!", doneText = "Grazie per la tua recensione!",
    errorInputTitle = "Errore di pubblicazione!", errorInputText = "Alcuni campi sono compilati erroneamente.",
    errorSendTitle = "Hai già lasciato un commento prima.",
    errorSendText = "Siamo spiacenti per l'inconveniente, secondo la politica di utilizzo del sito, i commenti successivi vengono moderati prima di essere pubblicati.",
    emptyTownField = "Nascondi", avatarUploaded = "Avatar caricato", imgUploaded = "Immagine caricata",
    fileTypeError = "Неверный тип файла", fileSizeError = "Dimensione di file non valida (fino a 2MB)",
    fileAllError = "Tipo e dimensione di file non validi (fino a 2MB)",
    nameInput = document.querySelector(".ev-feedback__field--name") || !1,
    townInput = document.querySelector(".ev-feedback__field--town") || !1,
    ageInput = document.querySelector(".ev-feedback__field--age") || !1,
    commentInput = document.querySelector(".ev-feedback__field--comment") || !1,
    avatarInput = document.querySelector(".ev-feedback__chooser--avatar") || !1,
    imgInput = document.querySelector(".ev-feedback__chooser--image") || !1,
    submitBtn = document.querySelector(".ev-feedback__btn") || !1,
    answerBlock = document.querySelector(".ev-answer") || null,
    answerName = document.querySelector(".ev-answer__name") || null,
    answerTown = document.querySelector(".ev-answer__town") || null,
    answerAge = document.querySelector(".ev-answer__age") || null,
    answerComment = document.querySelector(".ev-answer__comment") || null,
    answerAvatar = document.querySelector(".ev-answer__avatar") || null,
    answerImg = document.querySelector(".ev-answer__img") || null,
    avatarLabel = document.querySelector(".ev-feedback__label--avatar"),
    imgLabel = document.querySelector(".ev-feedback__label--image");
let avatarTypeStatus = !1, avatarSizeStatus = !1, imgTypeStatus = !1, imgSizeStatus = !1;
const modalWindow = document.querySelector(".ev-modal"), avatarDefault = avatarLabel ? avatarLabel.innerText : "",
    imgDefault = imgLabel ? imgLabel.innerText : "";

function setImgToLocalStorage(e, t) {
    const n = new FileReader, a = t.files[0], o = a.size < 22e5, l = !!a && "image" === a.type.split("/")[0];
    l && o ? (n.readAsDataURL(a), n.onload = function () {
        null === localStorage.getItem(e) && null === localStorage.getItem("isPublished") && localStorage.setItem(e, n.result.toString())
    }, validationFiles(t, !0, !0)) : !l && o ? validationFiles(t, !1, !0) : !o && l ? validationFiles(t, !0, !1) : !l && !o && validationFiles(t, !1, !1)
}

function setTextToLocalStorage(e, t) {
    0 !== t.length && localStorage.setItem(e, t.trim())
}

function clearFeedbackForm(e, t, n, a) {
    e && (e.value = ""), t && (t.value = ""), n && (n.value = ""), a && (a.value = "")
}

function setItemsToLocalStorage() {
    setTextToLocalStorage("isPublished", "true"), nameInput && setTextToLocalStorage("nameValue", nameInput.value), townInput && (0 !== townInput.value.length ? setTextToLocalStorage("townValue", townInput.value) : setTextToLocalStorage("townValue", "Nascondi")), ageInput && setTextToLocalStorage("ageValue", ageInput.value), commentInput && setTextToLocalStorage("commentValue", commentInput.value), hideImg("imgUrl", answerImg)
}

function changeModalState(e, t) {
    const n = document.querySelector(".ev-modal__title"), a = document.querySelector(".ev-modal__subtitle");
    n.innerText = e, a.innerText = t, modalWindow.classList.add("ev-modal--active")
}

function createComment() {
    null !== answerName && (answerName.innerText = localStorage.getItem("nameValue")), null !== answerTown && (answerTown.innerText = null !== localStorage.getItem("townValue") ? localStorage.getItem("townValue") : ""), null !== answerAge && (answerAge.innerText = null !== localStorage.getItem("ageValue") ? localStorage.getItem("ageValue") : ""), null !== answerComment && (answerComment.innerText = localStorage.getItem("commentValue")), null !== answerAvatar && (answerAvatar.src = null !== localStorage.getItem("avatarUrl") ? localStorage.getItem("avatarUrl") : answerAvatar.src), null !== answerImg && (answerImg.src = null !== localStorage.getItem("imgUrl") ? localStorage.getItem("imgUrl") : answerImg.src), "true" === localStorage.getItem("isPublished") ? answerBlock.classList.remove("ev-answer--hidden") : answerBlock.classList.add("ev-answer--hidden"), null === localStorage.getItem("imgUrl") && "true" === localStorage.getItem("isPublished") && hideImg("imgUrl", answerImg)
}

function postComment() {
    null !== localStorage.getItem("isPublished") ? (clearFeedbackForm(nameInput, townInput, ageInput, commentInput), setDefaultFileInputState(), changeModalState(errorSendTitle, errorSendText)) : (setItemsToLocalStorage(), createComment(), clearFeedbackForm(nameInput, townInput, ageInput, commentInput), setDefaultFileInputState(), changeModalState(doneTitle, doneText))
}

function changeFormStyles() {
    const e = document.querySelector(".ev-feedback"), t = document.querySelector(".ev-feedback__section--data"),
        n = document.querySelector(".ev-feedback__section--files"),
        a = document.querySelectorAll(".ev-feedback__profile .ev-feedback__field"),
        o = document.querySelectorAll(".ev-feedback__file");
    2 === a.length ? t.classList.add("ev-feedback__section--two") : 1 === a.length && t.classList.add("ev-feedback__section--one"), 1 === o.length && n.classList.add("ev-feedback__section--one"), a.length > 1 && 1 === o.length && n.classList.add("ev-feedback__section--full"), 1 === a.length && 1 === o.length && e.classList.add("ev-feedback--structure")
}

function changeFileInputState(e, t, n, a, o, l, r) {
    const i = e.parentNode, c = i.children[1];
    t && n ? (i.classList.remove("ev-feedback__file--error"), i.classList.add("ev-feedback__file--loaded"), c.innerText = a) : (i.classList.remove("ev-feedback__file--loaded"), i.classList.add("ev-feedback__file--error"), t || n ? t && !n ? c.innerText = l : !t && n && (c.innerText = o) : c.innerText = r)
}

function setDefaultFileInputState() {
    const e = document.querySelectorAll(".ev-feedback__file");
    for (let t = 0; t < e.length; t++) e[t].classList.remove("ev-feedback__file--loaded"), e[t].classList.remove("ev-feedback__file--error");
    avatarLabel && (avatarLabel.innerText = avatarDefault), imgLabel && (imgLabel.innerText = imgDefault)
}

function validationForm() {
    const e = !nameInput || validationTextFields(nameInput, 1), t = !ageInput || validationAge(ageInput),
        n = !commentInput || validationTextFields(commentInput, 5);
    e && t && n ? postComment() : changeModalState(errorInputTitle, errorInputText)
}

function validationTextFields(e, t) {
    return e.value.length < t ? (e.parentElement.classList.add("ev-feedback__profile--error"), !1) : (e.parentElement.classList.remove("ev-feedback__profile--error"), !0)
}

function validationAge(e) {
    return e.value.length > 0 ? e.value >= 18 && e.value <= 120 ? (e.parentElement.classList.remove("ev-feedback__profile--error"), !0) : (e.parentElement.classList.add("ev-feedback__profile--error"), !1) : (e.parentElement.classList.remove("ev-feedback__profile--error"), !0)
}

function validationFiles(e, t, n) {
    "avatar" === e.name ? (avatarTypeStatus = t, avatarSizeStatus = n) : (imgTypeStatus = t, imgSizeStatus = n)
}

function changeErrorDescState(e) {
    const t = e.clientHeight + 2;
    e.nextElementSibling.classList.contains("ev-input-error") && (e.nextElementSibling.style.top = t + 10 + "px"), e.parentElement.classList.contains("ev-feedback__profile--error") ? e.nextElementSibling.classList.remove("ev-input-error--hidden") : e.nextElementSibling.classList.add("ev-input-error--hidden")
}

function hideImg(e, t) {
    null === localStorage.getItem(e) && t && (t.style.display = "none")
}

String.prototype.replaceAll = function (e, t) {
    return this.replace(new RegExp(e, "g"), t)
}, window.addEventListener("DOMContentLoaded", (function () {
    createComment(), changeFormStyles()
})), nameInput && nameInput.addEventListener("input", (function () {
    validationTextFields(nameInput, 1, !0), changeErrorDescState(nameInput)
})), nameInput && nameInput.addEventListener("focus", (function () {
    changeErrorDescState(nameInput)
})), nameInput && nameInput.addEventListener("blur", (function () {
    this.nextElementSibling.classList.add("ev-input-error--hidden")
})), townInput && townInput.addEventListener("keydown", (function (e) {
    Number(e.key) && e.preventDefault()
})), townInput && townInput.addEventListener("change", (function () {
    this.value = townInput.value.replaceAll(/[0-9]/, "")
})), ageInput && ageInput.addEventListener("input", (function (e) {
    isNaN(e.data) && (this.value = this.value.replace(/[^0-9]/, "")), validationAge(ageInput), changeErrorDescState(ageInput)
})), ageInput && ageInput.addEventListener("change", (function () {
    this.value = ageInput.value.replaceAll(/[A-Za-zА-Яа-яЁё]/, "")
})), ageInput && ageInput.addEventListener("focus", (function () {
    changeErrorDescState(ageInput)
})), ageInput && ageInput.addEventListener("blur", (function () {
    this.nextElementSibling.classList.add("ev-input-error--hidden")
})), commentInput && commentInput.addEventListener("input", (function () {
    validationTextFields(commentInput, 5), changeErrorDescState(commentInput)
})), commentInput && commentInput.addEventListener("focus", (function () {
    changeErrorDescState(commentInput)
})), commentInput && commentInput.addEventListener("blur", (function () {
    this.nextElementSibling.classList.add("ev-input-error--hidden")
})), avatarInput && avatarInput.addEventListener("change", (function () {
    setImgToLocalStorage("avatarUrl", this), changeFileInputState(avatarInput, avatarTypeStatus, avatarSizeStatus, avatarUploaded, fileTypeError, fileSizeError, fileAllError)
})), imgInput && imgInput.addEventListener("change", (function () {
    setImgToLocalStorage("imgUrl", this), changeFileInputState(imgInput, imgTypeStatus, imgSizeStatus, imgUploaded, fileTypeError, fileSizeError, fileAllError)
})), submitBtn.addEventListener("click", (function (e) {
    e.preventDefault(), validationForm()
})), modalWindow.addEventListener("click", (function (e) {
    e.preventDefault();
    const t = e.target;
    (t.classList.contains("ev-modal") || t.classList.contains("ev-modal__close") || t.classList.contains("ev-modal__btn")) && modalWindow.classList.remove("ev-modal--active")
}));
