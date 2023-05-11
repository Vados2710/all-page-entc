$(window).on("load", function () {
    var id = 0;

    $('.animImg').each(function () {
        var $this = $(this),
            imgPath = $this.attr('src'),
            extStart = imgPath.lastIndexOf('.'),
            gifPath = imgPath.slice(0, extStart);
            
        gifPath += '.gif';
        $this.data('gifSrc', gifPath);
        $this.wrap('<div class="animImgWr"></div>');
        $this.before('<div class="animImgLoading"></div>');
        $this.closest('.animImgWr')
             .attr('id', 'animImgWr' + id++)
             .prepend('<div class="animImgShadow"></div>')
             .prepend('<div class="animImgPlay" title="Tap or click to play"></div>');
    });
});

$(document).on('click', '.animImgShadow, .animImgPlay', function () {
    var $this = $(this),
        $parent = $this.closest('.animImgWr'),
        $img = $parent.find('.animImg'),
        gifImg = $img.data('gifSrc');

    $img.attr('src', gifImg);
    $parent.find('.animImgPlay').remove();
    $parent.find('.animImgLoading').css('visibility', 'visible');

    $('.animImg').one("load", function () {
        var $this = $(this),
            $siblings = $this.siblings();
        $siblings.filter('.animImgLoading').remove();
        $siblings.filter('.animImgShadow').remove();
    });
});