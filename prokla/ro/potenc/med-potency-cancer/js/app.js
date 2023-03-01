

var statusPopup = {};

var helper = new Helper();

function Helper() {
    this.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    this.availableStorage = function () {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }
    this.deserialize = function (element, data, clearForm) {
        var splits = decodeURIComponent(data).split('&'),
            i = 0,
            split = null,
            key = null,
            value = null,
            splitParts = null;

        if (clearForm) {
            $('input[type="checkbox"],input[type="radio"]', element).removeAttr('checked');
            $('select,input[type="text"],input[type="password"],input[type="hidden"],textarea', element).val('');
        }

        var kv = {};
        while (split = splits[i++]) {
            splitParts = split.split('=');
            key = splitParts[0] || '';
            value = (splitParts[1] || '').replace(/\+/g, ' ');

            if (key != '') {
                if (key in kv) {
                    if ($.type(kv[key]) !== 'array')
                        kv[key] = [kv[key]];

                    kv[key].push(value);
                } else
                    kv[key] = value;
            }
        }

        for (key in kv) {
            value = kv[key];

            $('input[type="checkbox"][name="' + key + '"][value="' + value + '"],input[type="radio"][name="' + key + '"][value="' + value + '"]', element).prop('checked', true);
            $('select[name="' + key + '"],input[type="text"][name="' + key + '"],input[type="password"][name="' + key + '"],input[type="hidden"][name="' + key + '"],textarea[name="' + key + '"]', element).val(value);
        }
    }
}




