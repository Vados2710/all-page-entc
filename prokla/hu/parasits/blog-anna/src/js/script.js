document.querySelector('#form-name').addEventListener('input', function() {
        if (this.value.match(/[^A-Za-zА-Яа-я- ]+/g)) {
            this.value = this.value.replace(/[^A-Za-zА-Яа-я- ]+/g, "");
        }
    })
    document.querySelector('#form-phone').addEventListener('input', function() {
        if (this.value.match(/[^0-9+]/g)) {
            this.value = this.value.replace(/[^0-9+]/g, "");
        }
    })