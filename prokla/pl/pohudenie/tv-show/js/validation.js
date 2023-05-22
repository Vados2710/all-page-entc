$().ready(function(){
    //$('a[href^=#]').click(function(e){
     //   e.preventDefault();
     //   return false;
    //});

    $('input[name=phone]').focus(function(){
        if($(this).val() == '') {
            $(this).val(phone_config.get_phone_code($(this).parents('form')));
        }
    }).val('');

    //скролл вверх
    $('.to_top').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

  
    //ввод только цифр
    $('.only_number').on('keydown', function(event) {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 187 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {return;}
        else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {event.preventDefault();}
        }
    });

    $('.js_submit').click(function(e){
        e.preventDefault();
        check_form(this);
        return false;
    });


    $('.js_scroll_to_form').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: $('form').offset().top}, 400);
        return false;
    });
  
    $('.change-package-button').on('click', (function() {
      var package_id = $(this).data('package-id');
      $('.change-package-selector [value="' + package_id + '"]').attr("selected", "selected");
      set_package_prices(package_id);
    }));

    $('.change-package-selector').on('change', (function() {
      var package_id = $(this).val();
      set_package_prices(package_id);
    }));
  
  	function show_form_hint(elem, msg) {
      $(".js_errorMessage").remove();
      jQuery('<div class="js_errorMessage">' + msg + '</div>').appendTo('body').css({
        'left': jQuery(elem).offset().left,
        'top': jQuery(elem).offset().top - 30,
        'background-color':'#e74c3c',
        'border': '1px dashed black',
        'border-radius': '5px',
        'color': '#fff',
        'font-family': 'Arial',
        'font-size': '14px',
        'margin': '3px 0 0 0px',
        'padding': '6px 5px 5px',
        'position': 'absolute',
        'z-index': '9999'
      });
      jQuery(elem).focus();
    };
  
  	$('input[name=name]').on('click', function(){
      if (name_hint != '') {
          show_form_hint(this, name_hint);
          return false;
      }
    });
  
  	$('input[name=phone]').on('click', function(){
      if (phone_hint != '') {
        show_form_hint(this, phone_hint);
      	return false;
      }
    });

    function check_form(target) {

        var feed = {
            submit: function(elem) {
                var form = jQuery(elem).parents('form').first();

                var formInputs = {
                    country: form.find('[name="country_code"]'),
                    fio: form.find('[name="name"]'),
                    phone: form.find('[name="phone"]'),
                    lid: form.find('[name="lid"]')
                };

                var postParams = {
                    method: 'feedback',
                    name: formInputs.fio.val(),
                    phone: formInputs.phone.val(),
                    country: formInputs.country.val(),
                    lid: formInputs.lid.val()
                };

                jQuery('.js_errorMessage').remove();
                var country = postParams.country.toLowerCase();

                var rename = /^[\D+ ]*$/i;
                var rephone = /^[0-9\-\+\(\) ]*$/i;

              	// checking name
                if(!postParams.name.length)
                    return feed.errorMessage(formInputs.fio, defaults.get_locale_var('set_fio'));

                if(!postParams.name.length || !rename.test(postParams.name))
                    return feed.errorMessage(formInputs.fio, defaults.get_locale_var('error_fio'));
              
              	// checking phone
              	if(phone_config.locale[country] !== undefined) {
					var numbers_min = phone_config.locale[country].numbers_min;
                  	var numbers_max = phone_config.locale[country].numbers_max;
                  
                    if(numbers_min && postParams.phone.length < phone_config.locale[country].numbers_min)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));

                    if(numbers_max && postParams.phone.length > phone_config.locale[country].numbers_max)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));

                } else {

                    if(!postParams.phone.length)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('set_phone'));

                    if(!rephone.test(postParams.phone) || postParams.phone.length < 5)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));
                }
                
                form.submit();
                //alert('submit');
                return false;
            },
            errorMessage: function(elem, msg) {
	            $(".js_errorMessage").remove();
                jQuery('<div class="js_errorMessage">' + msg + '</div>').appendTo('body').css({
                    'left': jQuery(elem).offset().left,
                    'top': jQuery(elem).offset().top - 30,
                    'background-color':'#e74c3c',
                    'border-radius': '5px',
                    'color': '#fff',
                    'font-family': 'Arial',
                    'font-size': '14px',
                    'margin': '3px 0 0 0px',
                    'padding': '6px 5px 5px',
                    'position': 'absolute',
                    'z-index': '9999'
                });
                jQuery(elem).focus();
                return false;
            }
        };
        feed.submit(target);
    }

    $("#country, .country").change(function(){
        def_click($(this).val());
        phone_config.change_phone_code($(this).parents('form'));
    });

    $("body").on('click', function(){
        $(".js_errorMessage").remove();
    });

    $(window).on('scroll', function(){
        $(".js_errorMessage").remove();
    });

  
    checkTimeZone();
    setBrowser();

    if (typeof site_title !== 'undefined') {
        $('title').text(site_title);
    }
});

var phone_config = {
    get_phone_code: function(form) {
        var country = form.find('[name="country_code"]').val().toLowerCase();
        return phone_code = typeof phone_config.locale[country] != 'undefined' ? phone_config.locale[country].cod : '';
    },
    change_phone_code: function(form) {
        var new_phone_code = this.get_phone_code(form);

        for (var cnr in phone_config.locale) {
            if ( ! phone_config.locale.hasOwnProperty(cnr)) continue;
            if (phone_config.locale[cnr].cod == form.find('input[name="phone"]').val()) {
                form.find('input[name="phone"]').val(new_phone_code);
            }
        }
    },
    locale: {
      /*
      	tr:{
          	cod: '',
          	numbers_min: '10',
          	numbers_max: '12',
          	primer: ''
        },
	    gr:{
          	cod: '',
          	numbers_min: '10',
          	numbers_max: '10',
          	primer: ''
        },
      	mx:{
          	cod: '+521',
          	numbers_min: '',
          	numbers_max: '',
          	primer: ''
        },
      	in:{
          	cod: '+91',
          	numbers_min: '13',
          	numbers_max: '13',
          	primer: ''
        },  
      	th:{
          	cod: '66',
          	numbers_min: '11',
          	numbers_max: '11',
          	primer: ''
        },
        ru:{
            cod: '7',
            numbers_min: '11',
            numbers_max: '11',
            primer: '79121234567'
        },
        ua:{
            cod: '380',
            numbers_min: '12',
            numbers_max: '12',
            primer: '380501234567'
        },
        md:{
            cod: '373',
            numbers_min: '11',
            numbers_max: '11',
            primer: '37368123456'
        }
        */
      	bo:{
            cod: '',
            numbers_min: '8',
            numbers_max: '8',
            primer: ''
        },
      	pe:{
            cod: '',
            numbers_min: '8',
            numbers_max: '9',
            primer: ''
        },
      	br:{
            cod: '',
            numbers_min: '10',
            numbers_max: '12',
            primer: ''
        },
      	cl:{
            cod: '',
            numbers_min: '9',
            numbers_max: '',
            primer: ''
        }
    },
    errors: {
        error_phone_code: 'Номер телефона должен начинаться с "{cod}".<br> Пример: {primer}',
        input_phone: 'Вы не полностью ввели номер телефона. Должно быть {numbers_limit} цифр',
        set_limit: 'Вы ввели слишком много цифр,<br> скорее всего была допущена<br> ошибка при наборе номера'
    },
    process_error: function (error_name, country){
        var error_text = this.errors[error_name];
        for (var code in this.locale[country]) {
            if ( ! this.locale[country].hasOwnProperty(code)) continue;
            error_text = error_text.replace('{'+code+'}', this.locale[country][code]);
        }
        return error_text;
    }
};


var defaults = {
    get_locale_var: function(var_name) {
        country = this._locale.toLowerCase();
        return this.locale[country][var_name] !== undefined ?
            this.locale[country][var_name] : this.locale[this._locale][var_name];
    },
    locale: {
        ru:{
            set_country: 'Вы не выбрали страну',
            set_fio: 'Вы не заполнили ФИО',
            error_fio: 'Неверно заполнено ФИО',
            set_phone: 'Вы не заполнили Телефон',
            error_phone: 'Неверно заполнен Телефон',
            exit_text: 'Вы точно хотите закрыть вкладку? До завершения заказа осталось нажать одну кнопку!',
            set_comment: 'Расскажите о вашей проблеме',
            set_holder_name: 'Заполните имя номинанта',
            set_nomin: 'Заполните номинацию'
        },
        hi:{
            set_country: 'आपने देश का चयन नहीं किया',
            set_fio: 'आपनें पूरा नाम नहीं भरा',
            error_fio: 'गलत नाम',
            set_phone: 'आपनें फोन नंबर नहीं भरा',
            error_phone: 'गलत फोन नंबर',
            exit_text: 'क्या आप सुनिश्चित रूप से छोड़ना चाहते हैं? आप अपने आर्डर से बस एक चरण की दूरी पर हैं',
        },
		id:{
            set_country: 'Anda belum memilih negara',
            set_fio: 'Anda belum mengisi nama lengkap',
            error_fio: 'Nama tidak valid',
            set_phone: 'Anda belum mengisi nomor telepon',
            error_phone: 'Nomor telepon tidak valid',
            exit_text: 'Apakah Anda yakin Anda ingin meninggalkan laman ini? Hanya tinggal satu langkah lagi untuk menyelesaikan pesanan Anda!',
        },           
        ms:{
            set_country: 'Anda tidak memilih negara',
            set_fio: 'Anda tidak mengisi nama penuh',
            error_fio: 'Nama tidak sah',
            set_phone: 'Anda tidak mengisi nombor telefon',
            error_phone: 'Nombor telefon tidak sah',
            exit_text: 'Adakah anda pasti anda ingin keluar? Hanya tinggal satu langkah lagi daripada pesanan anda!',
        },
        bg:{
            set_country: 'Вие не сте избрали държава',
            set_fio: 'Моля, въведете валидно име',
            error_fio: 'Моля, въведете валидно име',
            set_phone: 'Моля, въведете телефон за връзка',
            error_phone: 'Телефонния номер е въведен неправилно',
            exit_text: 'Сигурни ли сте че искате да затворите раздел? До приключване на поръчката кликнете с левия бутон един бутон!'
        },
        ro:{
            set_country: 'Vă rugăm să completați câmpul "Nume/Prenume"',
            set_fio: 'Cimpul a fost completat incorect "Nume/Prenume"',
            error_fio: 'Cimpul a fost completat incorect  "Nume/Prenume"',
            set_phone: 'Vă rugăm să completați câmpul "Telefon"',
            error_phone: 'Cimpul a fost completat incorect "Telefon"',
            exit_text: 'Sunteți sigur că doriți să închideți o filă? Până la finalizarea comenzii stânga faceți clic pe un buton!'
        },
        br:{
            set_country: 'Não selecionou país',
            set_fio: 'Por gentileza, verifique os seus dados',
            error_fio: 'Por gentileza, verifique os seus dados',
            set_phone: 'or gentileza, verifique os seus dados',
            error_phone: 'or gentileza, verifique os seus dados',
            exit_text: 'Tem certeza de que quer fechar uma guia? Até a conclusão da ordem esquerda clique em um botão!'
        },
        hu:{
            set_country: 'Nem választott ország',
            set_fio: 'Nem kitölteni Név és vezetéknév',
            error_fio: 'Helytelenül kitöltött Név és vezetéknév',
            set_phone: 'Nem kitölteni Phone',
            error_phone: 'Helytelenül kitöltött Telefon',
            exit_text: 'Biztos benne, hogy be akarja zárni a lapra? Befejezéséig a rendelés bal gombbal egy gombot!',
        },
        tr:{
            set_country: 'Siz ülkeyi seçmediniz',
            set_fio: 'Adınızı yazınız lütfen',
            error_fio: 'Adınız yalnış yazılmış',
            set_phone: 'Telefon numaranızı yazınız lütfen',
            error_phone: 'Telefon numarası yanlış yazılmış',
            exit_text: 'Sayfamızı kapatmak istediniz. Eminmisiniz? Sipariş etmek icin son tıklama lazım!',
        },
        pl:{
            set_country: 'Podaj kraju',
            set_fio: 'Podaj imię i nazwisko',
            error_fio: 'Podaj realne imię i nazwisko',
            set_phone: 'Podaj numer telefonu',
            error_phone: 'Podaj realny numer telefonu',
            exit_text: 'Czy na pewno chcesz zamknąć kartę?',
        },
        es:{
            set_country: 'No escogió un país',
            set_fio: 'No escribió su nombre y apellido',
            error_fio: 'Usted escribió mal su nombre y apellido',
            set_phone: 'No escribió su teléfono',
            error_phone: 'Escribio mal su teléfono',
            exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
        },
      	cl:{
            set_country: 'No escogió un país',
            set_fio: 'No escribió su nombre y apellido',
            error_fio: 'Usted escribió mal su nombre y apellido',
            set_phone: 'No escbribió su teléfono',
            error_phone: 'Escribio mal su teléfono',
            exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
        },
        en:{
            set_country: 'Select country',
            set_fio: 'Name is a required field',
            error_fio: 'Name field is entered incorrectly',
            set_phone: 'Phone number is a required field',
            error_phone: 'The phone number is entered incorrectly',
            exit_text: 'You really want to close tab?',
        },
	    pt:{
            set_country: 'Não selecionou o país',
            set_fio: 'Não preencheu o nome completo',
            error_fio: 'Nome inválido',
            set_phone: 'Não preencheu o telefone',
            error_phone: 'Número de telefone inválido',
            exit_text: 'Tem a certeza de que quer sair? Está apenas a um passo da sua encomenda!',
        },
      	zh:{
            set_country: '你沒有選擇國家',
            set_fio: '你沒有填寫完整姓名',
            error_fio: '無效姓名',
            set_phone: '你沒有填寫電話號碼',
            error_phone: '無效電話號碼',
            exit_text: '你是否確定要離開？離你的訂單僅剩一步了！',
        },
      	km:{
            set_country: 'លោកអ្នកមិនបានជ្រើសរើសប្រទេស',
            set_fio: 'លោកអ្នកមិនបានបំពេញឈ្មោះពេញ',
            error_fio: 'ឈ្មោះមិនត្រឹមត្រូវ',
            set_phone: 'លោកអ្នកមិនបានបញ្ចូលលេខទូរសព្',
            error_phone: 'លេខទូរសព្ទមិនត្រឹមត្រូវ',
            exit_text: 'តើអ្នកពិតជាចង់ចាកចេញមែនឬទេ? នៅសល់តែមួយជំហានទៀតអ្នកនឹងបញ្ជាទិញបានហើយ!',
        },
      	nb:{
            set_country: 'Du valgte ikke land',
            set_fio: 'Du oppgav ikke fullt navn',
            error_fio: 'Ugyldig navn',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	nn:{
            set_country: 'Du valgte ikke land',
            set_fio: 'Du oppgav ikke fullt navn',
            error_fio: 'Ugyldig navn',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	no:{
            set_country: 'Du valgte ikke land',
            set_fio: 'Du oppgav ikke fullt navn',
            error_fio: 'Ugyldig navn',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	nb_no:{
            set_country: 'Du valgte ikke land',
            set_fio: 'Du oppgav ikke fullt navn',
            error_fio: 'Ugyldig navn',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	ur:{
          set_country: 'آپ نے ملک کا انتخاب نہیں کیا',
          set_fio: 'آپ نے پورا نام درج نہیں کیا ',
          error_fio: 'غیر موزوں نام ',
          set_phone: 'آپ نے فون نمبر درج نہیں کیا',
          error_phone: 'آپ نے فون نمبر درج نہیں کیاغیر موزوں فون نمبر',
          exit_text: 'کیا آپ اس صفحے سے جانا چاہتے ہیں؟ آپ اپنا آرڈر بک کرانے سے صرف ایک کلک دوری پر ہیں ',
        },
      	fil:{
            set_country: 'Hindi mo pinili ang bansa',
            set_fio: 'Hindi mo pinunan ang buong pangalan',
            error_fio: 'Inbalidong pangalan',
            set_phone: 'Hindi mo pinunan ang telepono',
            error_phone: 'Inbalidong numero ng telepono',
            exit_text: 'Sigurado ka bang gusto mong umalis? Ikaw ay isang hakbang nalang mula sa iyong order!',
        },
      	ar:{
            set_country: 'أنت لم تختر البلاد',
            set_fio: 'أنت لم تملء الاسم الكامل',
            error_fio: 'اسم غير صالح',
            set_phone: 'أنت لم تدخل رقم الهاتف',
            error_phone: 'رقم الهاتف غير صحيح',
            exit_text: 'هل أنت متأكد أنك تريد أن تغادر؟ كنت للتو في خطوة واحدة من النظام الخاص بك!',
        },
      	vi:{
            set_country: 'Bạn chưa chọn quốc gia',
            set_fio: 'Bạn chưa điền họ tên',
            error_fio: 'Tên không hợp lệ',
            set_phone: 'Bạn chưa điền số điện thoại',
            error_phone: 'Số điện thoại không hợp lệ',
            exit_text: 'Bạn có chắc muốn rời đi không? Chỉ còn còn một bước đặt hàng nữa thôi!',
        },
      	ng:{
            set_country: 'Select country',
            set_fio: 'Name is a required field',
            error_fio: 'Name field is entered incorrectly',
            set_phone: 'Phone number is a required field',
            error_phone: 'The phone number is entered incorrectly',
            exit_text: 'You really want to close tab?',
        },
        rs:{
            set_country: 'Niste odaberete zemlju',
            set_fio: 'Niste popunite imenom',
            error_fio: 'Invalid format Ime',
            set_phone: 'Niste napuniti telefon',
            error_phone: 'Invalid format Telefon',
            exit_text: 'Da li ste sigurni da želite da zatvorite karticu ? Pre završetka naloga ostaje jedan taster pritisnuti!'
        },
        fr:{
            set_country: 'Vous n\'avez pas choisi le pays',
            set_fio: 'Vous n\'avez pas indiqué le nom',
            error_fio: 'Le nom est incorrect',
            set_phone: 'Vous n\'avez pas indiqué le numéro de téléphone',
            error_phone: 'Le numéro de téléphone est uncorrecte',
            exit_text: 'Êtes-vous sûr de fermer l\'onglet ? Il vous reste de cliquer sur un seul bouton pour passer la commande !',
        },
        it:{
            set_country: 'Cortesemente compilare questo spazio vuoto',
            set_fio: 'Non è stato inserito il nome',
            error_fio: 'Errato il nome',
            set_phone: 'Inserire il numero di telefono',
            error_phone: 'Errato il numero di telefono',
            exit_text: 'Sicuro di chiudere la pagina? Per completare l\'ordine basta solo premere il bottone!',
        },
        de:{
            set_country: 'Das Land ist nicht gewählt.',
            set_fio: 'Name ist nicht ausgefüllt',
            error_fio: 'Name ist falsch ausgefüllt',
            set_phone: 'Telefon ist nicht ausgefüllt',
            error_phone: 'Telefon ist falsch ausgefüllt',
            exit_text: 'Wirklich diesen Tab schließen? Bis Bestellungsabnahme bleibt nur ein Klick!'
        },
        cs:{
            set_country: 'Nezvolil jste zemi',
            set_fio: 'Nevypsal jste jméno, jméno po otci a příjmení',
            error_fio: 'Nesprávně zadané jméno, jméno po otci a příjmení',
            set_phone: 'Nezadal jste Telefonní číslo',
            error_phone: 'Nesprávě zadané Telefonní číslo',
            exit_text: 'Jistě chcete uzavřít stránku? Abyste ukončil zadání objednávky, náleží stlačit jedno tlačítko!',
            set_comment: 'Řeknete prosím o Vašem problému',
            set_holder_name: 'Zadejte prosím jméno nominanta',
            set_nomin: 'Zadejte prosím nominaci'            
        },
      	cn: {
          	set_country: 'You haven’t chosen your country', 
            set_fio: 'You haven’t entered  your first and last name', 
            error_fio: 'Your first and last name were entered incorrectly',  
            set_phone: 'You haven’t entered your phone number', 
            error_phone: 'Your phone number was entered incorrectly',  
            exit_text: 'Do you really want to close the tab? Before an order completion  you should press only 1 button!',
        },
      	sk: {
          set_country: 'Nezadali ste krajinu',
          set_fio: 'Nezadali ste plné meno',
          error_fio: 'Neplatné plné meno',
          set_phone: 'Nezadali ste telefón',
          error_phone: 'Neplatný telefón',
          exit_text: 'Ste istí, že chcete zatvoriť kartu? Pre dokončenie objednávky zostalo potrebné jedné kliknutie!',
          set_comment: 'Povedzte niečo o svojom probléme',
          set_holder_name: 'Vyplňte meno kandidáta',
          set_nomin: 'Vyplňte nomináciu'
        },
      	th: {
          set_country: 'คุณไม่ได้ยังไม่ได้เลือกประเทศ',
          set_fio: 'คุณไม่ได้ระบุชื่อจริง',
          error_fio: 'ชื่อนี้ใช้ไม่ได้',
          set_phone: 'คุณยังไม่ได้กรอกเบอร์โทรศัพท์',
          error_phone: 'เบอร์โทรศัพท์นี้ใช้ไม่ได้',
          exit_text: 'คุณแน่ใจไหมว่าจะออกจากหน้านี้ การสั่งซื้อของคุณเหลืออีกเพียงขั้นตอนเดียวเท่านั้น!',
          set_comment: 'Povedzte niečo o svojom probléme',
          set_holder_name: 'Vyplňte meno kandidáta',
          set_nomin: 'Vyplňte nomináciu'
        },
      	gr: {
          set_fio: 'Δεν έχετε συμπληρώσει το ονοματεπώνυμο',
          set_phone: 'Μη έγκυρος αριθμός τηλεφώνου',
          error_phone: 'Λάθος αριθμός τηλεφώνου! Παρακαλώ εισάγετε τον αριθμό του κινητού σας τηλεφώνου ξεκινώντας με 69',  
        },
      	ko:{
            set_country: '국가를 선택하지 않았습니다',
            set_fio: '성명을 입력하지 않았습니다',
            error_fio: '유효하지 않은 이름',
            set_phone: '전화번호를 입력하지 않았습니다',
            error_phone: '유효하지 않은 전화번호',
            exit_text: '정말 이 페이지에서 나오시겠습니까? 주문까지 오직 한 단계만 남았습니다!',
        },
    },
    _locale: window.lang_locale || 'en'
};

function set_package_prices(package_id) {

    var price = package_prices[package_id]['price'] * 1,
        old_price = package_prices[package_id]['old_price'] * 1;

    $('.js_new_price').each(function() {
      $(this).is('input') ? $(this).val(price) : $(this).text(price);
    });

    $('.js_old_price').each(function() {
      $(this).is('input') ? $(this).val(old_price) : $(this).text(old_price);
    });

    $('.js_full_price').each(function() {
      $(this).is('input') ? $(this).val(price + shipment_price) : $(this).text(price + shipment_price);
    });

    $('.js_delivery_price').each(function() {
      $(this).is('input') ? $(this).val(shipment_price) : $(this).text(shipment_price);
    });
  
  	$('input[name=price]').each(function() {
      $(this).val(price);
    });
  	
  	$('input[name=package_id]').val(package_id);
}

function checkTimeZone() {
    var offset = new Date().getTimezoneOffset();
    hours = offset / (-60);
    $('form').append('<input type="hidden" name="time_zone" value="'+hours+'">');
}

function setBrowser() {

    if (typeof ua !== 'undefined') {
        $('form').append('<input type="hidden" name="bw" value="'+ua.browser.name+'">');
    }

}

function sendPhoneOrder(form){
    form_data = $(form).serializeArray();
    form_data.push({"name" : "uri_params", "value" : window.location.search.replace("?", "")});
    $.ajax({
        type: "POST",
        url: "/order/create/",
        data: form_data,
        crossDomain: true,
        dataType: "json",
        success: function (e){
        }
    });
}

function cancelEvent(e){
    try {
        if (e) {
            e.returnValue = defaults.get_locale_var('exit_text');
            e.cancelBubble = true;
            if (e.stopPropagation)
                e.stopPropagation();
            if (e.preventDefault)
                e.preventDefault();
        }
    } catch (err) {}
    return defaults.get_locale_var('exit_text');
}

function RemoveUnload() {
    window.onbeforeunload = null;
}
