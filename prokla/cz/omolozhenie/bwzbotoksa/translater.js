    function Translater () {
    for (class_name in new_lang) {
        var elements = document.getElementsByClassName(class_name);
        if (elements.length) {
            for (key in elements) {
                elements[key].innerHTML = new_lang[class_name];
            }
        }
    }
};