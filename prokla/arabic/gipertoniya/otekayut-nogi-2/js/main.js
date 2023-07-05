$(document).ready(function() {
    $('.change-package-selector').on('change', (function() {
        $('.item-gift').hide();
        $('.' + $(this).val() + '_pack').show();
        $('.change-package-selector2 [value="' + $(this).val() + '"]').prop("selected", true);

        var package_id = $(this).val();
        //   set_package_prices(package_id);
    }));
});
