function makeTimer(e) {
    var t = document.querySelector("#min"),
        o = document.querySelector("#sec"),
        r = setInterval((function () {
            -1 === e ? clearInterval(r) : (t.textContent = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) : Math.floor(e / 60), o.textContent = e % 60 < 10 ? "0" + e % 60 : e % 60, e -= 1)
        }), 1e3)
}
var resultWrapper = document.querySelector(".spin-result-wrapper-roulette"),
    wheel = document.querySelector(".wheel-img-roulette"),
    closePopup = document.querySelector(".close-popup-roulette");

function spin() {
    wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout((function () {
        resultWrapper.style.display = "block"
    }), 8e3), setTimeout((function () {
        $(".spin-wrapper-roulette").slideUp(), $(".order_block-roulette").slideDown(), makeTimer(600)
    }), 1e4), wheel.classList.add("rotated"))
}
$(".close-popup-roulette, .pop-up-button-roulette").click((function (e) {
    e.preventDefault(), $(".spin-result-wrapper-roulette").fadeOut()
})), $(document).ready((function () {
    $(".boxes > div").click((function () {
        $(this).parent().hasClass("boxesfirsttry") ? ($(".boxes").removeClass("boxesfirsttry"), $(this).addClass("openbox"), $(this).find(".try").hide(), $(this).find(".opentry").show(), setTimeout((function () {
            $(".sweet-overlay").show(), $(".sweet-alert").show()
        }), 500)) : $(this).parent().hasClass("boxeslasttry") && ($(this).hasClass("openbox") || ($(this).find(".try").hide(), $(this).find(".opentry").show(), $(this).find(".boxtext").css("display", "block"), setTimeout((function () {
            $(".spin-result-wrapper-box").show(), setTimeout((function () {
                $("#boxesContainer").slideUp(250), setTimeout((function () {
                    $(".order_block").slideDown(250)
                }), 500)
            }), 500)
        }), 500)))
    })), $("#update").click((function () {
        $(".sweet-overlay").hide(), $(".sweet-alert").hide(), $(".boxes").addClass("boxeslasttry")
    })), $(".pop-up-button-box").click((function () {
        $(".spin-result-wrapper").hide(), $("a").attr("href", "#fforms"), makeTimer(600)
    }))
}));
class Comment {
    constructor(e, t, o, r, n, s) {
        this.commentForm = document.querySelector(e), this.inputCommentName = document.querySelector(t), this.inputCommentText = document.querySelector(o), this.formImage = document.querySelector(r), this.formAvatar = document.querySelector(n), this.commentPushBlock = document.querySelector(s), this.commArrAll = [], this.formImageUrl, this.formImageChange(), this.pushComBlock(), this.domOnloader()
    }
    uploadFile(e) {
        if (!["image/jpeg", "image/png", "image/gif"].includes(e.type)) return alert("Solo se permiten imágenes."), void(formImage.value = "");
        if (e.size > 1048576) alert("El archivo debe tener menos de 1 MB.");
        else {
            var t = new FileReader;
            t.onload = e => {
                this.formAvatar.innerHTML = `<img src="${e.target.result}" alt="Фото">`, this.formAvatar.classList.add("form__avatar--loaded"), this.formImageUrl = e.target.result
            }, t.onerror = function (e) {
                alert("Error")
            }, t.readAsDataURL(e)
        }
    }
    formImageChange() {
        this.formImage.addEventListener("change", (() => {
            this.uploadFile(this.formImage.files[0])
        }))
    }
    pushComm() {}
    removeInputClass() {
        this.inputCommentName && (this.inputCommentName.value = "", this.inputCommentName.classList.remove("error")), this.inputCommentText.value = "", this.inputCommentText.classList.remove("error")
    }
    pushComBlock() {
        this.commentForm.addEventListener("submit", (e => {
            if (e.preventDefault(), this.inputCommentName) {
                if (this.inputCommentName.value && inputCommentText.value) return this.formAvatar.innerHTML = "", this.formAvatar.classList.remove("form__avatar--loaded"), this.pushComm();
                this.inputCommentName.classList.add("error"), this.inputCommentText.classList.add("error")
            } else {
                if (this.inputCommentText.value) return this.formAvatar.innerHTML = "", this.formAvatar.classList.remove("form__avatar--loaded"), this.pushComm();
                this.inputCommentText.classList.add("error")
            }
        }))
    }
    domOnloader() {
        document.addEventListener("DOMContentLoaded", (() => {
            localStorage.commArr && (this.commArrAll = JSON.parse(localStorage.getItem("commArr")), commentPushBlock.innerHTML = this.commArrAll.join(""))
        }))
    }
}