// packs
$('.change-package-selector').on('change', (function () {
  var package_id = $(this).val();
  set_package_prices(package_id);
}));

