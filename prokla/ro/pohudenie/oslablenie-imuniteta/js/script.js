$(document).ready(function() {
    $(".product-order__btn").on('click', function(event) {
        $(this).parents(".product__content").addClass("is-ordered");
        $(".product__content").not(".is-ordered").slideUp();
        $(".suggestion-product").slideUp();
        $(".product__content.is-ordered").find(".order-suggestion-info__content").slideDown();
    });
});

