window.dataLayer = window.dataLayer || [];

var selectors = {
  shippingForm: '#shipping',
  firstName: 'input[name="firstName"]',
  lastName: 'input[name="lastName"]',
  phone: 'input[name="phone"]',
  email: 'input[name="email"]',
  address: 'input[name="address"]',
  country: '#id_country',
  state: '#id_state',
  city: 'input[name="city"]',
  zipCode: 'input[name="zipCode"]',
  loader: '.popup-loading-wrapper',
  checkoutForm: '#checkout',
  billingForm: '.billing-form',
  cardNumber: 'input[name="cardNumber"]',
  cardExpMonth: '#cardExpMonth',
  cardExpYear: '#cardExpYear',
  cvv: 'input[name="cvv"]',
  paymentAsShipping: '#payment_as_shipping',
  package: '.product',
  formError: "#formError"
}



var rules = {
  expMonth: {
    required: true,
  },
  expYear: {
    required: true,
    CCExp: true,
  },
  cardNumber: {
    required: true,
    creditcard: true,
  },
  cvv: {
    required: true,
    digits: true,
    minlength: 3,
    maxlength: 4,
  },
  country: "required",
  state: "required",
  firstName: {
    latin: true,
    maxlength: 24,
    required: true,
  },
  lastName: {
    latin: true,
    maxlength: 24,
    required: true,
  },
  address: "required",
  city: "required",
  zipCode: {
    zipCodeValidator: true
  },
  phone: {
    phoneValidator: true
  },
  email: {
    required: true,
    email: true,
  },
};

var someText = {
  en: {
    CA: "Select Province",
    GB: "Select County",
    IE: "Select County",
    NZ: "Select Region",
    Default: "Select State",
  },
  es: {
    US: "Seleccione estado",
    Default: "Seleccione estado / provincia",
  },
  fr: {
    CA: "Sélectionnez la région",
    Default: "Sélectionnez la région",
  },
  ru: {
    Default: "Область",
  },
  de: {
    US: "Staat wählen",
    Default: "Wählen Bundesland",
  }
};

var errorText = {
  en: "Transaction was declined, please try another credit card",
  fr: "La transaction a été refusée, veuillez essayer une autre carte de crédit",
  es: "La transacción fue rechazada, intente con otra tarjeta de crédito",
  ru: "Транзакция была отклонена, попробуйте другую кредитную карту",
  de: "Die Transaktion wurde abgelehnt. Bitte versuchen Sie es mit einer anderen Kreditkarte"
};

function urlParam(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return results[1] || 0;
  }
}

function getCurrentPath() {
  var arr = window.location.pathname.split("/");
  var page = arr.slice(0, -1);
  var name = page.join("/");

  return name;
}

function getCurrentPageName() {
  var arr = window.location.pathname.split("/");
  var page = arr[arr.length - 1];
  var name = page.split(".");

  return name[0];
}

function getPage(name) {
  var path = getCurrentPath();

  switch (name) {
    case 'confirmation':
      return path + "/confirmation.html";
    case 'order':
      return path + "/order.html";
    case 'declined':
      return path + "/declined.html";
    case 'choose':
      return path + "/choose.html";
    case 'checkout':
      return path + "/checkout.html";
  }
}

window.offer = {
  data: null,
  isStateLoaded: false,
  isLoading: false,
  country: null,
  phones: null,
  usingBilling: false,
  rules: rules,
  someText: someText,
  errorText: errorText,
  pricesProduct: null,
  upsaleList: null,
  products: null,
  listeners: [],

  loadState: function () {
    var that = this;
    var url = "/ajax/state";
    var uid = urlParam("uid");

    if (uid) {
      url += "?uid=" + uid;
    }

    that.isLoading = true;

    $.ajaxSetup({ cache: false });
    $.get(url, function (res) {
      that.data = res.data;
      that.isStateLoaded = true;
      that.isLoading = false;
      that.country = window.country || res.data.geo.code || 'US';
      that.phones = res.data.templates.phone;
      that.pricesProduct = res.data.availableProducts;
      that.products = res.data.products;
      that.upsaleList = res.data.upsales;

      var segment = res.data.segment;
      var state = res.data.state;
      var shipping = res.data.profile.shipping;
      var t = res.data.query.hasOwnProperty('t') ? res.data.query['t'] : null;

      var segmentData = {
        segmentAff: segment.aff,
        segmentNet: segment.net,
        segmentSub: segment.sub,
        segmentPage: segment.page,
      };

      if (t) {
        segmentData['t'] = t;
      }

      window.dataLayer.push(segmentData);

      var r = urlParam("r");
      var isDirect = r === "direct";
      var page = getCurrentPageName();

      if (isDirect && state === "partial" && shipping.address.length && page === 'index') {
        window.location.pathname = getPage('order');
      } else if (state === "purchase" && page !== 'confirmation') {
        window.location.pathname = getPage('confirmation');
      } else if (state === "decline" && page !== 'declined') {
        window.location.pathname = getPage('declined');
      } else {
        for (var i = 0; i < that.listeners.length; i++) {
          that.listeners[i].cb(res.data);
        }
      }
    });
  },

  getState: function (cb) {
    var that = this;

    if (that.isStateLoaded) {
      cb(that.data);
    } else if (that.isLoading) {
      that.listeners.push({ cb: cb });
    } else {
      that.listeners.push({ cb: cb });
      that.loadState();
    }
  },

  getOrderPage: function () { return getPage('order') },
  getConfirmPage: function () { return getPage('confirmation') },
  getDeclinedPage: function () { return getPage('declined') },
  getChoosePage: function () { return getPage('choose') },
  getCheckoutPage: function () { return getPage('checkout') },
  getCurrentPath: getCurrentPath,
  getUrlParam: urlParam,

  sendOrder: function (formData, cb) {
    var url = "/ajax/order";
    var uid = urlParam("uid");

    if (uid) {
      url = "/ajax/order" + "?uid=" + uid;
    }

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      success: function (response) {
        if (response && response.success && response.data) {
          cb && cb({ success: true, response: response, error: null });
        } else {
          cb && cb({ success: false, response: response, error: 'Something went wrong... Please try again' });
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        cb && cb({ success: false, response: { success: false }, error: 'Something went wrong... Please try again' });
      }
    });
  },

  getValidationRules: function (name) {
    if (rules[name]) {
      return rules[name];
    }

    return null;
  },

  setUsingBilling: function (flag) {
    this.usingBilling = flag;
  },

  getUsingBilling: function () {
    return this.usingBilling;
  },

  setValidationRule: function (name, rule) {
    this.rules[name] = rule;
  },

  getSelectors: function () {
    return selectors;
  },

  getCountryIsoCode: function () {
    return this.country;
  },

  getSomeText: function (lang, isoCode) {
    return this.someText[lang || "en"][this.someText[lang || "en"].hasOwnProperty(isoCode) ? isoCode : "Default"];
  },

  changeGeo: function (phones) {
    $('.local-phone').html(phones);
  },

  getPrice: function () {
    var pricesProduct = this.pricesProduct,
      product = '.product';
    for (var i = 0; i < pricesProduct.length; i++) {
      $(product + (i + 1) + ' .price').html((window.currency || '$') + pricesProduct[i].price.toFixed(2))
      $(product + (i + 1) + ' .save-price').html((window.currency || '$') + pricesProduct[i].templates.save)
      $(product + (i + 1) + ' .retail-price').html((window.currency || '$') + pricesProduct[i].templates.retail);
      $(product + (i + 1) + ' .retail-price-full').html((window.currency || "$") + (pricesProduct[i].templates.retail * pricesProduct[i].quantity).toFixed(2))
      $(product + (i + 1) + ' .retail-price-short').html((window.currency || '$') + pricesProduct[i].templates.retail.split('.')[0]);
      $(product + (i + 1) + ' .full-price').html((window.currency || '$') + pricesProduct[i].fullprice.toFixed(2));

      $(product + (i + 1) + ' .price-int').attr('data-currency', pricesProduct[i].price.toFixed(2));
      $(product + (i + 1) + ' .save-price-int').attr('data-currency', pricesProduct[i].templates.save);
      $(product + (i + 1) + ' .retail-price-int').attr('data-currency', pricesProduct[i].templates.retail);
      $(product + (i + 1) + ' .full-price-int').attr('data-currency', pricesProduct[i].templates.retail);
    }
  },

  getPrivacy: function () {
    $('.product-name').html(this.data.templates.title);
  },

  getTerms: function (phone) {
    var products = this.products,
        upsaleList = this.upsaleList,
        isoCode = this.data.geo.code,
        productName = this.data.templates.title,
        upsalesStr = "",
        packagesInfo = "",
        shippingPrice = "",
        quantityUpsale = "",
        num = 0;

    upsaleList.filter(function (upsale) {
      if (upsale.templates.title === "Expedited Shipping") {
        return false;
      }
      return true;
    }).map(function (upsale) {
      num = num + 1;
      switch (window.lang) {
        case 'es':
          if (upsale.quantity > 1) {
            quantityUpsale = "paquete de " + upsale.quantity + " botella"
          } else {
            quantityUpsale = "producto que reciba"
          }
          upsalesStr +=
              "<br>" +
              "2.5." + num + " Producto de suscripción adicional: " +
              upsale.templates.title +
              ", si se compra, se enviará dentro de las 24 horas y llegará dentro de los" +
              " <span class='delivery-day'></span> "
              + " días hábiles. Está solicitando un suministro de 30 días y se le cobrará" +
              " $" + upsale.price + " (+ manejo y envío gratis) por el " + quantityUpsale +
              ". Esta compra está respaldada por una garantía de devolución del dinero del " +
              "100%. Si en algún momento decide cancelar esta compra, llame al servicio al cliente al " +
              phone +
              " en cualquier momento entre las 9 a. M. Y las 5 p. M. MST de lunes a viernes."
          ;
          break;
        default:
          if (upsale.quantity > 1) {
            quantityUpsale = upsale.quantity + " bottle package"
          } else {
            quantityUpsale = " product you receive"
          }
          upsalesStr +=
              "<br>" +
              "2.5." + num + " Additional Opt-in Product: " +
              upsale.templates.title +
              ", if purchased, will be shipped within 24 hours and arrive\n" +
              " within " + "<span class='delivery-day'></span>" +" business days. You are ordering a 30 day supply and will be charged" +
              " $" + upsale.price + " (+ free S&H) for the\n" + quantityUpsale +
              ". This purchase is backed by a 100% Money Back " +
              "Guarantee. If at some point you choose to\n" +
              " cancel this purchase, call customer service at " +
              phone +
              " anytime between 9am to 5pm MST Monday-Friday."
      }
    });

    switch (window.lang) {
      case 'es':
        if (products.length >= 1 && products[2].quantity === 1) {
          shippingPrice = "(+ 9.95 S&H)"
        } else {
          shippingPrice = "(+ manejo y envío gratis)"
        }
        packagesInfo +=
            "<br>" + "2.1.1. Los precios de los productos son los siguientes: " +
            "$" + products[0].fullprice + " (+ manejo y envío gratis) por el paquete de " +
            products[0].quantity + " botellas (" +
            "$" + products[0].price + " botella); " +
            "$" + products[1].fullprice + " (+ manejo y envío gratis) por el paquete de " +
            products[1].quantity + " botellas (" +
            "$" + products[1].price + " botella); " +
            "$" + products[2].fullprice + " " +
            shippingPrice + " por el paquete de " +
            products[2].quantity + " botella " +
            "($" + products[2].price + " botella)."
        ;
        break;
      default:
        if (products.length >= 1 && products[2].quantity === 1) {
          shippingPrice = "(+ 9.95 S&H)"
        } else {
          shippingPrice = "(+ free S&H)"
        }
        packagesInfo +=
            "<br>" + "2.1.1. The prices for the products are as follows: " +
            "$" + products[0].fullprice + " (+ free S&H) for the " +
            products[0].quantity + " bottle package (" +
            "$" + products[0].price + " bottle); " +
            "$" + products[1].fullprice + " (+ free S&H) for the " +
            products[1].quantity + " bottle package (" +
            "$" + products[1].price + " bottle); " +
            "$" + products[2].fullprice + " " +
            shippingPrice + " for the " +
            products[2].quantity + " bottle package " +
            "($" + products[2].price + " bottle)."
        ;
    }
    $(".packagesInfo").html(packagesInfo);
    $(".upsalesList").html(upsalesStr);
    $(".product-name").html(productName);
    if(isoCode === 'AU' || isoCode === 'NZ'){
      $('.delivery-day').html('10-14')
    } else {
      $('.delivery-day').html('5-7')
    }
  },

  getPhone: function () {
    var geoPhone,
        currentPhone,
        phone,
        iso_code = this.country,
        phones = this.phones;

    if (phones.indexOf(iso_code + ': ') >= 0) {
      geoPhone = phones.split(iso_code + ': ');
      currentPhone = geoPhone[1].split(/[A-Z]*/ + ': ')
      currentPhone = currentPhone[0].split(', ');
      phone = currentPhone[0]
    } else if (phones.match(/[a-z]*[A-Z]+[a-z]*/)) {
      geoPhone = phones.split(': ');
      if (geoPhone.length === 1) {
        currentPhone = geoPhone[0].split(',');
      } else {
        currentPhone = geoPhone[1].split(',');
      }
      phone = currentPhone[0];
    }

    this.changeGeo(phone || phones);
    this.getTerms(phone || phones);
    $('.phone-line').html(phone || phones);
  },

  getErrorText: function (lang) {
    return this.errorText[lang || "en"];
  }
};