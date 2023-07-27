const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
    days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    daysMin = ["", "", "", "", "", "", ""],
    seasons = ["invierno", "primavera", "verano", "otoño"];

function postDate(daysName, daysMinName, monthsName) {
    const _counterLength = 60;
    for (let counter = 0; counter < _counterLength; counter++) {
        innerDate(counter, "date-");
        innerDate(counter, "date")
    }

    function innerDate(counter, dateType) {
        let newCounter;
        "date-" === dateType ? newCounter = -counter : newCounter = counter;
        const _msInDay = 864e5,
            _localDate = new Date(Date.now() + newCounter * _msInDay),
            _day = _localDate.getDate(),
            _month = _localDate.getMonth() + 1,
            _year = _localDate.getFullYear(),
            dayDefault = addZero(_day),
            monthDefault = addZero(_month),
            defaultDate = dayDefault + "." + monthDefault + "." + _year,
            dateClass = dateType + counter,
            nodeList = document.querySelectorAll("." + dateClass);
        for (let i = 0; i < nodeList.length; i++) {
            const dateFormat = nodeList[i].dataset.format;
            void 0 !== dateFormat && "" !== dateFormat ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
        }
    }

    function changeFormat(_day, _month, _year, format, counter) {
        let innerFormat = format;
        const testFormat = ["dd", "mm", "yyyy", "monthFull", "year"],
            dateFormat = {
                dd: _day,
                mm: addZero(_month),
                yyyy: _year,
                monthFull: getMonthName(_month, monthsName, false),
                year: getYearWithCounter(_year, counter)
            };
        for (let i = 0; i < testFormat.length; i++) {
            let string = testFormat[i],
                regExp = new RegExp(string);
            innerFormat = innerFormat.replace(regExp, dateFormat[string])
        }
        return innerFormat.split(" ").join(" ")
    }

    function getMonthName(_month, monthsName, bigFirstLetter, counter) {
        const monthCounter = !!counter ? counter : 0;
        let month;
        _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
        _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
        return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
    }

    function getYearWithCounter(year, counter) {
        return year + counter
    }

    function addZero(numb) {
        return numb < 10 ? "0" + numb : numb
    }

    function changeFirstLetter(isBig, str) {
        return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
    }
}
if (document.body.classList.contains("ev-date")) {
    document.addEventListener("DOMContentLoaded", function () {
        postDate(days, daysMin, months, monthMin, seasons)
    })
}
//EV Script | postLocalComment v1.4 | MV
//Variables | Notifications | RU
const doneTitle = "El comentario ha sido publicado",
    doneText = "Gracias por su comentario",
    errorInputTitle = "Error al publicar",
    errorInputText = "Algunos campos están rellenados incorrectamente",
    errorSendTitle = "Anteriormente ha publicado un comentario",
    errorSendText = "Pedimos disculpas por las molestias, de acuerdo con la política de uso del sitio, los comentarios posteriores deben ser moderados antes de su publicación",
    emptyTownField = "Ocultar",
    avatarUploaded = "El avatar está cargado",
    imgUploaded = "La imagen está cargada",
    fileTypeError = "Tipo de archivo no valido",
    fileSizeError = "Tamaño de archivo no válido hasta 2 MB",
    fileAllError = "Tipo y tamaño de archivo no válidos (hasta 2 MB)",
    nameInput = document.querySelector(".ev-feedback__field--name") || false,
    townInput = document.querySelector(".ev-feedback__field--town") || false,
    ageInput = document.querySelector(".ev-feedback__field--age") || false,
    commentInput = document.querySelector(".ev-feedback__field--comment") || false,
    avatarInput = document.querySelector(".ev-feedback__chooser--avatar") || false,
    imgInput = document.querySelector(".ev-feedback__chooser--image") || false,
    submitBtn = document.querySelector(".ev-feedback__btn") || false,
    answerBlock = document.querySelector(".ev-answer") || null,
    answerName = document.querySelector(".ev-answer__name") || null,
    answerTown = document.querySelector(".ev-answer__town") || null,
    answerAge = document.querySelector(".ev-answer__age") || null,
    answerComment = document.querySelector(".ev-answer__comment") || null,
    answerAvatar = document.querySelector(".ev-answer__avatar") || null,
    answerImg = document.querySelector(".ev-answer__img") || null,
    avatarLabel = document.querySelector(".ev-feedback__label--avatar"),
    imgLabel = document.querySelector(".ev-feedback__label--image");
//Variables | Feedback form
//Variables | File status
let avatarTypeStatus = false,
    avatarSizeStatus = false,
    imgTypeStatus = false,
    imgSizeStatus = false;
//Variables | Modal window
const modalWindow = document.querySelector(".ev-modal"),
    avatarDefault = avatarLabel ? avatarLabel.innerText : "",
    imgDefault = imgLabel ? imgLabel.innerText : "";
//Variables | Default notifications
//Method | ReplaceAll for old browsers
String.prototype.replaceAll = function (search, replacement) {
    const target = this;
    return target.replace(new RegExp(search, "g"), replacement)
};
//Events
window.addEventListener("DOMContentLoaded", function () {
    createComment();
    changeFormStyles()
});
nameInput && nameInput.addEventListener("input", function () {
    validationTextFields(nameInput, 1, true);
    changeErrorDescState(nameInput)
});
nameInput && nameInput.addEventListener("focus", function () {
    changeErrorDescState(nameInput)
});
nameInput && nameInput.addEventListener("blur", function () {
    this.nextElementSibling.classList.add("ev-input-error--hidden")
});
townInput && townInput.addEventListener("keydown", function (event) {
    Number(event.key) && event.preventDefault()
});
townInput && townInput.addEventListener("change", function () {
    this.value = townInput.value.replaceAll(/[0-9]/, "")
});
ageInput && ageInput.addEventListener("input", function (event) {
    isNaN(event.data) && (this.value = this.value.replace(/[^0-9]/, ""));
    validationAge(ageInput);
    changeErrorDescState(ageInput)
});
ageInput && ageInput.addEventListener("change", function () {
    this.value = ageInput.value.replaceAll(/[A-Za-zА-Яа-яЁё]/, "")
});
ageInput && ageInput.addEventListener("focus", function () {
    changeErrorDescState(ageInput)
});
ageInput && ageInput.addEventListener("blur", function () {
    this.nextElementSibling.classList.add("ev-input-error--hidden")
});
commentInput && commentInput.addEventListener("input", function () {
    validationTextFields(commentInput, 5);
    changeErrorDescState(commentInput)
});
commentInput && commentInput.addEventListener("focus", function () {
    changeErrorDescState(commentInput)
});
commentInput && commentInput.addEventListener("blur", function () {
    this.nextElementSibling.classList.add("ev-input-error--hidden")
});
avatarInput && avatarInput.addEventListener("change", function () {
    setImgToLocalStorage("avatarUrl", this);
    changeFileInputState(avatarInput, avatarTypeStatus, avatarSizeStatus, avatarUploaded, fileTypeError, fileSizeError, fileAllError)
});
imgInput && imgInput.addEventListener("change", function () {
    setImgToLocalStorage("imgUrl", this);
    changeFileInputState(imgInput, imgTypeStatus, imgSizeStatus, imgUploaded, fileTypeError, fileSizeError, fileAllError)
});
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    validationForm()
});
//Functions
function setImgToLocalStorage(key, inputFile) {
    const reader = new FileReader,
        file = inputFile.files[0],
        isSize = file.size < 22e5,
        isImage = file ? "image" === file.type.split("/")[0] : false;
    if (isImage && isSize) {
        reader.readAsDataURL(file);
        reader.onload = function () {
            null === localStorage.getItem(key) && null === localStorage.getItem("isPublished") && localStorage.setItem(key, reader.result.toString())
        };
        validationFiles(inputFile, true, true)
    } else {
        !isImage && isSize ? validationFiles(inputFile, false, true) : !isSize && isImage ? validationFiles(inputFile, true, false) : !isImage && !isSize && validationFiles(inputFile, false, false)
    }
}

function setTextToLocalStorage(key, value) {
    0 !== value.length && localStorage.setItem(key, value.trim())
}

function clearFeedbackForm(name, town, age, comment) {
    name && (name.value = "");
    town && (town.value = "");
    age && (age.value = "");
    comment && (comment.value = "")
}

function setItemsToLocalStorage() {
    setTextToLocalStorage("isPublished", "true");
    nameInput && setTextToLocalStorage("nameValue", nameInput.value);
    townInput && (0 !== townInput.value.length ? setTextToLocalStorage("townValue", townInput.value) : setTextToLocalStorage("townValue", emptyTownField));
    ageInput && setTextToLocalStorage("ageValue", ageInput.value);
    commentInput && setTextToLocalStorage("commentValue", commentInput.value);
    hideImg("imgUrl", answerImg)
}

function changeModalState(title, subtitle) {
    const modalTitle = document.querySelector(".ev-modal__title"),
        modalSubtitle = document.querySelector(".ev-modal__subtitle");
    modalTitle.innerText = title;
    modalSubtitle.innerText = subtitle;
    modalWindow.classList.add("ev-modal--active")
}

function createComment() {
    null !== answerName && (answerName.innerText = localStorage.getItem("nameValue"));
    null !== answerTown && (answerTown.innerText = null !== localStorage.getItem("townValue") ? localStorage.getItem("townValue") : "");
    null !== answerAge && (answerAge.innerText = null !== localStorage.getItem("ageValue") ? localStorage.getItem("ageValue") : "");
    null !== answerComment && (answerComment.innerText = localStorage.getItem("commentValue"));
    null !== answerAvatar && (answerAvatar.src = null !== localStorage.getItem("avatarUrl") ? localStorage.getItem("avatarUrl") : answerAvatar.src);
    null !== answerImg && (answerImg.src = null !== localStorage.getItem("imgUrl") ? localStorage.getItem("imgUrl") : answerImg.src);
    "true" === localStorage.getItem("isPublished") ? answerBlock.classList.remove("ev-answer--hidden") : answerBlock.classList.add("ev-answer--hidden");
    null === localStorage.getItem("imgUrl") && "true" === localStorage.getItem("isPublished") && hideImg("imgUrl", answerImg)
}

function postComment() {
    const isPublished = null !== localStorage.getItem("isPublished");
    if (!isPublished) {
        setItemsToLocalStorage();
        createComment();
        clearFeedbackForm(nameInput, townInput, ageInput, commentInput);
        setDefaultFileInputState();
        changeModalState(doneTitle, doneText)
    } else {
        clearFeedbackForm(nameInput, townInput, ageInput, commentInput);
        setDefaultFileInputState();
        changeModalState(errorSendTitle, errorSendText)
    }
}

function changeFormStyles() {
    const feedbackMain = document.querySelector(".ev-feedback"),
        dataSection = document.querySelector(".ev-feedback__section--data"),
        filesSection = document.querySelector(".ev-feedback__section--files"),
        dataInputs = document.querySelectorAll(".ev-feedback__profile .ev-feedback__field"),
        filesInputs = document.querySelectorAll(".ev-feedback__file");
    2 === dataInputs.length ? dataSection.classList.add("ev-feedback__section--two") : 1 === dataInputs.length && dataSection.classList.add("ev-feedback__section--one");
    1 === filesInputs.length && filesSection.classList.add("ev-feedback__section--one");
    dataInputs.length > 1 && 1 === filesInputs.length && filesSection.classList.add("ev-feedback__section--full");
    1 === dataInputs.length && 1 === filesInputs.length && feedbackMain.classList.add("ev-feedback--structure")
}

function changeFileInputState(node, typeStatus, sizeStatus, uploadedText, typeErrorText, sizeErrorText, allErrorText) {
    const inputLabel = node.parentNode,
        labelText = inputLabel.children[1].classList.contains("ev-feedback__label") ? inputLabel.children[1] : inputLabel.children[0];
    if (typeStatus && sizeStatus) {
        inputLabel.classList.remove("ev-feedback__file--error");
        inputLabel.classList.add("ev-feedback__file--loaded");
        labelText.innerText = uploadedText
    } else {
        inputLabel.classList.remove("ev-feedback__file--loaded");
        inputLabel.classList.add("ev-feedback__file--error");
        !typeStatus && !sizeStatus ? labelText.innerText = allErrorText : typeStatus && !sizeStatus ? labelText.innerText = sizeErrorText : !typeStatus && sizeStatus && (labelText.innerText = typeErrorText)
    }
}

function setDefaultFileInputState() {
    const files = document.querySelectorAll(".ev-feedback__file");
    for (let i = 0; i < files.length; i++) {
        files[i].classList.remove("ev-feedback__file--loaded");
        files[i].classList.remove("ev-feedback__file--error")
    }
    avatarLabel && (avatarLabel.innerText = avatarDefault);
    imgLabel && (imgLabel.innerText = imgDefault)
}

function validationForm() {
    const isNameValid = !nameInput ? true : validationTextFields(nameInput, 1),
        isAgeValid = !ageInput ? true : validationAge(ageInput),
        isCommentValid = !commentInput ? true : validationTextFields(commentInput, 5);
    isNameValid && isAgeValid && isCommentValid ? postComment() : changeModalState(errorInputTitle, errorInputText)
}

function validationTextFields(node, strLength) {
    if (node.value.length < strLength) {
        node.parentElement.classList.add("ev-feedback__profile--error");
        return false
    } else {
        node.parentElement.classList.remove("ev-feedback__profile--error");
        return true
    }
}

function validationAge(node) {
    if (node.value.length > 0) {
        if (node.value >= 18 && node.value <= 120) {
            node.parentElement.classList.remove("ev-feedback__profile--error");
            return true
        } else {
            node.parentElement.classList.add("ev-feedback__profile--error");
            return false
        }
    } else {
        node.parentElement.classList.remove("ev-feedback__profile--error");
        return true
    }
}

function validationFiles(inputFile, typeStatus, sizeStatus) {
    if ("avatar" === inputFile.name) {
        avatarTypeStatus = typeStatus;
        avatarSizeStatus = sizeStatus
    } else {
        imgTypeStatus = typeStatus;
        imgSizeStatus = sizeStatus
    }
}

function changeErrorDescState(input) {
    const inputHeight = input.clientHeight + 2;
    input.nextElementSibling.classList.contains("ev-input-error") && (input.nextElementSibling.style.top = inputHeight + 10 + "px");
    input.parentElement.classList.contains("ev-feedback__profile--error") ? input.nextElementSibling.classList.remove("ev-input-error--hidden") : input.nextElementSibling.classList.add("ev-input-error--hidden")
}

function hideImg(key, node) {
    null === localStorage.getItem(key) && node && (node.style.display = "none")
}