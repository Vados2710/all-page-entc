(function (article, post, footerDate) {
    var now = new Date(),
        weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
        d = weekAgo.getDate(),
        m = weekAgo.getMonth() + 1,
        y = weekAgo.getFullYear();
    post[0].textContent = zero(now.getDate()) + '.' + zero(now.getMonth() + 1) + '.' + now.getFullYear();
    footerDate[0].textContent = now.getFullYear();
    for (var i = 0; i < article.length; i++) {
        var articleDate = new Date(now.getFullYear(), now.getMonth(), Math.round(now.getDate() - (i * 1))),
            chooseDate = articleDate < now ? articleDate : now;
        article[i].textContent = buildDate(
            chooseDate.getDate(),
            chooseDate.getMonth() + 1,
            chooseDate.getFullYear())
    }

    function zero(val) {
        return val.toString().length === 1 ? '0' + val : val;
    }

    function buildDate(d, m, y) {
        return [zero(d), zero(m), y,].join('.');
    }
})(
    document.getElementsByClassName('article-date'),
    document.getElementsByClassName('post-date'),
    document.getElementsByClassName('footer-date')
);