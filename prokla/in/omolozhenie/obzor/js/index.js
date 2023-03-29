var _CONFIG = {
    getTextArea: document.querySelector('#textarea'),
    getBnt:document.querySelector('#add-comment-cancel'),
}

var app = {
    _cancelMessage() {
        var that = this;
        _CONFIG.getBnt.addEventListener('click', function (evt) {
            evt.preventDefault();
            that._clearMessage(_CONFIG.getTextArea)
        })
    },
    _clearMessage(value) {
        value.value =''
    },
    initialization() {
        this._cancelMessage();
    }
}

window.addEventListener('load', function () {
    app.initialization()
})
