;
(function () {

    class Comebacker {
        constructor() {
            this.html = document.querySelector('html');
            this.head = document.querySelector('head');
            this.body = document.querySelector('body');

            this.landing_url = this.html.getAttribute('data-landing_url');
            this.offer_id = this.html.getAttribute('data-offer_id');
            this.image = '';
            this.offer = '';
            this.offer_price_content = '';
            this.offer_title = '';
            this.offer_new_price = '';
            this.offer_old_price = '';
            this.offer_currency = '';
            this.offer_discount = '';
            this.offer_discount_content = '';
            this.offer_content_part_1 = '';
            this.offer_content_part_2 = '';
            this.offer_content_part_3 = '';
            this.button = '';
            this.offer_hour = '';
            this.offer_minutes = '';
            this.offer_seconds = '';
            this.country = '';

                       this.language = [
                {
                    offer_language: 'it',
                    offer_price_content: 'prezzo scontato',
                    offer_title: 'Un\'offerta speciale per te!',
                    offer_content_part_1:'Non perdere questa opportunità! Acquista <strong>',
                    offer_content_part_2:'</strong> con lo sconto del -',
                    offer_content_part_3:'%.',
                    offer_currency: '&euro;',
                    offer_new_price: '39',
                    offer_old_price: '78',
                    offer_discount: '50',
                    offer_discount_content: 'Sconto',
                    offer_hour: 'ore',
                    offer_minutes: 'minuti',
                    offer_seconds: 'secondi',
                    offer_button: 'Ottenere lo sconto',
                },
                {
                    offer_language: 'pt',
                    offer_price_content: 'preço com desconto',
                    offer_title: 'Oferta especial para você!',
                    offer_content_part_1: 'Não perca a oportunidade! Compre <strong>',
                    offer_content_part_2: '</strong> com -',
                    offer_content_part_3: '% de desconto.',
                    offer_currency: '&euro;',
                    offer_new_price: '39',
                    offer_old_price: '78',
                    offer_discount: '50',
                    offer_discount_content: 'Desconto',
                    offer_hour: 'horas',
                    offer_minutes: 'minutos',
                    offer_seconds: 'segundos',
                    offer_button: 'Ganhe um desconto',
                },
                {
                    offer_language: 'es',
                    offer_price_content: 'precio con descuento',
                    offer_title: '¡Oferta especial para usted!',
                    offer_content_part_1:'¡No pierda la oportunidad! Compre <strong>',
                    offer_content_part_2:'</strong> con un -',
                    offer_content_part_3:'% de descuento.',
                    offer_currency: '&euro;',
                    offer_new_price: '39',
                    offer_old_price: '78',
                    offer_discount: '50',
                    offer_discount_content: 'Descuento',
                    offer_hour: 'horas',
                    offer_minutes: 'minutos',
                    offer_seconds: 'segundos',
                    offer_button: 'Obtener un descuento',
                },
                {
                    offer_language: 'at',
                    offer_price_content: 'Preis mit Rabatt',
                    offer_title: 'Ein Sonderangebot für Sie!',
                    offer_content_part_1:'Verpassen Sie diese Gelegenheit nicht! Bestellen Sie <strong>',
                    offer_content_part_2:'</strong> mit -',
                    offer_content_part_3:'% Rabatt.',
                    offer_currency: '&euro;',
                    offer_new_price: '49',
                    offer_old_price: '98',
                    offer_discount: '50',
                    offer_discount_content: 'Rabatt',
                    offer_hour: 'stunden',
                    offer_minutes: 'minuten',
                    offer_seconds: 'sekunden',
                    offer_button: 'Einen Rabatt bekommen',
                },
                {
                    offer_language: 'de',
                    offer_price_content: 'Preis mit Rabatt',
                    offer_title: 'Ein Sonderangebot für Sie!',
                    offer_content_part_1:'Verpassen Sie diese Gelegenheit nicht! Bestellen Sie <strong>',
                    offer_content_part_2:'</strong> mit -',
                    offer_content_part_3:'% Rabatt.',
                    offer_currency: '&euro;',
                    offer_new_price: '49',
                    offer_old_price: '98',
                    offer_discount: '50',
                    offer_discount_content: 'Rabatt',
                    offer_hour: 'stunden',
                    offer_minutes: 'minuten',
                    offer_seconds: 'sekunden',
                    offer_button: 'Einen Rabatt bekommen',
                },
                {
                    offer_language: 'ch',
                    offer_price_content: 'Preis mit Rabatt',
                    offer_title: 'Ein Sonderangebot für Sie!',
                    offer_content_part_1:'Verpassen Sie diese Gelegenheit nicht! Bestellen Sie <strong>',
                    offer_content_part_2:'</strong> mit -',
                    offer_content_part_3:'% Rabatt.',
                    offer_currency: 'CHF',
                    offer_new_price: '49',
                    offer_old_price: '98',
                    offer_discount: '50',
                    offer_discount_content: 'Rabatt',
                    offer_hour: 'stunden',
                    offer_minutes: 'minuten',
                    offer_seconds: 'sekunden',
                    offer_button: 'Einen Rabatt bekommen',
                },
                 {
                    offer_language: 'cz',
                    offer_price_content: 'Diskontní cena',
                    offer_title: 'Speciální nabídka pro vás!',
                    offer_content_part_1:'Nepropásněte svou příležitost! Kupte si <strong>',
                    offer_content_part_2:'</strong> s -',
                    offer_content_part_3:'% slevou.',
                    offer_currency: 'CZK',
                    offer_new_price: '1300',
                    offer_old_price: '2600',
                    offer_discount: '50',
                    offer_discount_content: 'Sleva',
                    offer_hour: 'hodiny',
                    offer_minutes: 'minuty',
                    offer_seconds: 'sekundy',
                    offer_button: 'Získejte slevu',
                },
                {
                    offer_language: 'pl',
                    offer_price_content: 'Cena z rabatem',
                    offer_title: 'Specjalna oferta dla Ciebie!',
                    offer_content_part_1: 'Nie przegap swojej okazji! Otrzymaj <strong>',
                    offer_content_part_2: '</strong> z -',
                    offer_content_part_3: '% zniżką.',
                    offer_currency: 'PLN',
                    offer_new_price: '139',
                    offer_old_price: '278',
                    offer_discount: '50',
                    offer_discount_content: 'Zniżka',
                    offer_hour: 'godziny',
                    offer_minutes: 'minuty',
                    offer_seconds: 'sekundy',
                    offer_button: 'Skorzystaj z rabatu',
                },
                {
                    offer_language: 'cl',
                    offer_price_content: 'prezzo scontato',
                    offer_title: '¡Oferta especial para usted!',
                    offer_content_part_1:'¡No pierda la oportunidad! Compre <strong>',
                    offer_content_part_2:'</strong> con un -',
                    offer_content_part_3:'% de descuento.',
                    offer_currency: 'CLP',
                    offer_new_price: '29000',
                    offer_old_price: '58000',
                    offer_discount: '50',
                    offer_discount_content: 'Descuento',
                    offer_hour: 'horas',
                    offer_minutes: 'minutos',
                    offer_seconds: 'segundos',
                    offer_button: 'Obtener un descuento',
                },
                {
                    offer_language: 'fi',
                    offer_price_content: 'alennushinta',
                    offer_title: 'Sinulle erikoistarjous!',
                    offer_content_part_1:'Älä missaa tilaisuuttasi! Osta <strong>',
                    offer_content_part_2:'</strong> -',
                    offer_content_part_3:'% dalennuksella.',
                    offer_currency: '&euro;',
                    offer_new_price: '39',
                    offer_old_price: '78',
                    offer_discount: '50',
                    offer_discount_content: 'Alennus',
                    offer_hour: 'tuntia',
                    offer_minutes: 'minuuttia',
                    offer_seconds: 'sekuntia',
                    offer_button: 'Hanki alennus',
                },
                {
                    offer_language: 'fr',
                    offer_price_content: 'Prix réduit',
                    offer_title: 'Une offre spéciale pour vous!',
                    offer_content_part_1:'Ne manquez pas votre chance! Achetez <strong>',
                    offer_content_part_2:'</strong> avec une réduction de -',
                    offer_content_part_3:'%.',
                    offer_currency: '&euro;',
                    offer_new_price: '49',
                    offer_old_price: '64',
                    offer_discount: '30',
                    offer_discount_content: 'Réduction',
                    offer_hour: 'heures',
                    offer_minutes: 'minutes',
                    offer_seconds: 'secondes',
                    offer_button: 'Obtenir une réduction',
                },
                {
                    offer_language: 'be',
                    offer_price_content: 'Prix réduit',
                    offer_title: 'Une offre spéciale pour vous!',
                    offer_content_part_1:'Ne manquez pas votre chance! Achetez <strong>',
                    offer_content_part_2:'</strong> avec une réduction de -',
                    offer_content_part_3:'%.',
                    offer_currency: '&euro;',
                    offer_new_price: '49',
                    offer_old_price: '64',
                    offer_discount: '30',
                    offer_discount_content: 'Réduction',
                    offer_hour: 'heures',
                    offer_minutes: 'minutes',
                    offer_seconds: 'secondes',
                    offer_button: 'Obtenir une réduction',
                },
                {
                    offer_language: 'ru',
                    offer_price_content: 'Цена со скидкой',
                    offer_title: 'Для вас специальное предложение!',
                    offer_content_part_1:'Не упустите свою возможность! Приобретите <strong>',
                    offer_content_part_2:'</strong> со скидкой в -',
                    offer_content_part_3:'%.',
                    offer_currency: '&euro;',
                    offer_new_price: '39',
                    offer_old_price: '78',
                    offer_discount: '50',
                    offer_discount_content: 'Скидка',
                    offer_hour: 'часы',
                    offer_minutes: 'минуты',
                    offer_seconds: 'секунды',
                    offer_button: 'Получить скидку',
                },
                {
                    offer_language: 'ro',
                    offer_price_content: 'Preț redus',
                    offer_title: 'O oferta speciala pentru tine!',
                    offer_content_part_1:'Nu rata ocazia! Cumpărați <strong>',
                    offer_content_part_2:'</strong> cu o reducere de -',
                    offer_content_part_3:'%.',
                    offer_currency: 'RON',
                    offer_new_price: '149',
                    offer_old_price: '298',
                    offer_discount: '50',
                    offer_discount_content: 'Reducere',
                    offer_hour: 'ore',
                    offer_minutes: 'minute',
                    offer_seconds: 'secunde',
                    offer_button: 'Obțineți o reducere',
                },
            ];
            this.offers = [
                {
                    offer_id: 4,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/4/success-product.png',

                },
                {
                    offer_id: 5,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/5/success-product.png',
                },
                {
                    offer_id: 6,
                    offer_name: 'Eretron Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/6/success-product.png',
                },
                {
                    offer_id: 7,
                    offer_name: 'Detoxionis',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/7/success-product.png',
                },
                {
                    offer_id: 9,
                    offer_name: 'Artrolux+',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/9/success-product.png',
                },
                {
                    offer_id: 10,
                    offer_name: 'Idealis',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/10/success-product.png',
                },
                {
                    offer_id: 19,
                    offer_name: 'SizePlus',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/19/success-product.png',
                },
                {
                    offer_id: 20,
                    offer_name: 'Parazax Complex',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/20/success-product.png',
                },
                {
                    offer_id: 26,
                    offer_name: 'NonStop 24',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/26/success-product.png',
                },
                {
                    offer_id: 28,
                    offer_name: 'Cutecat',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/28/success-product.png',
                },
                {
                    offer_id: 41,
                    offer_name: 'Idealis Cream',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/41/success-product.png',
                },
                {
                    offer_id: 42,
                    offer_name: 'Artrolux+ Cream',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/42/success-product.png',
                },
                {
                    offer_id: 43,
                    offer_name: 'Smoodiet',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/43/success-product.png',
                },
                {
                    offer_id: 54,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/54/success-product.png',
                },
                {
                    offer_id: 56,
                    offer_name: 'SizePlus',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/56/success-product.png',
                },
                {
                    offer_id: 57,
                    offer_name: 'Cafediet',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/57/success-product.png',
                },
                {
                    offer_id: 58,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/58/success-product.png',
                },
                {
                    offer_id: 59,
                    offer_name: 'Varilux Premium',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/59/success-product.png',
                },
                {
                    offer_id: 60,
                    offer_name: 'Viatonica',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/60/success-product.png',
                },
                {
                    offer_id: 61,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/5/success-product.png',
                },
                {
                    offer_id: 62,
                    offer_name: 'Eretron Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/6/success-product.png',
                },
                {
                    offer_id: 63,
                    offer_name: 'Eretron Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/6/success-product.png',
                },
                {
                    offer_id: 64,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/4/success-product.png',
                },
                {
                    offer_id: 65,
                    offer_name: 'Smart Hair Spray',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/65/success-product.png',
                },
                {
                    offer_id: 66,
                    offer_name: 'Smart Hair Spray Male',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/66/success-product.png',
                },
                {
                    offer_id: 67,
                    offer_name: 'Smart Hair Spray Female',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/67/success-product.png',
                },
                {
                    offer_id: 68,
                    offer_name: 'Smart Beard Spray',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/68/success-product.png',
                },
                {
                    offer_id: 69,
                    offer_name: 'Coffe-in Forma',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/69/success-product.png',
                },
                {
                    offer_id: 72,
                    offer_name: 'ProSlim Active',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/72/success-product.png',
                },
                {
                    offer_id: 75,
                    offer_name: 'Black Diamond',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/75/success-product.png',
                },
                {
                    offer_id: 76,
                    offer_name: 'Prostatricum Active',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/76/success-product.png',
                },
                {
                    offer_id: 77,
                    offer_name: 'Prostatricum PLUS',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/77/success-product.png',
                },
                {
                    offer_id: 78,
                    offer_name: 'Prostatix ULTRA',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/78/success-product.png',
                },
                {
                    offer_id: 79,
                    offer_name: 'PushUP Formula',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/79/success-product.png',
                },
                {
                    offer_id: 80,
                    offer_name: 'CannabisVital Oil',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/80/success-product.png',
                },
                {
                    offer_id: 84,
                    offer_name: 'Keton Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/84/success-product.png',
                },
                {
                    offer_id: 87,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/5/success-product.png',
                },
                {
                    offer_id: 90,
                    offer_name: 'IMMUNO+ Complex',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/90/success-product.png',
                },
                {
                    offer_id: 94,
                    offer_name: 'Prostatricum PLUS',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/94/success-product.png',
                },
                {
                    offer_id: 95,
                    offer_name: 'Slimbox',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/95/success-product.png',
                },
                {
                    offer_id: 97,
                    offer_name: 'Onixan Spray',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/97/success-product.png',
                },
                {
                    offer_id: 98,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/4/success-product.png',
                },
                {
                    offer_id: 99,
                    offer_name: 'Eretron Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/6/success-product.png',
                },
                {
                    offer_id: 100,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/5/success-product.png',
                },
                {
                    offer_id: 101,
                    offer_name: '7 Slim Acive',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/101/success-product.png',
                },
                {
                    offer_id: 107,
                    offer_name: 'Smart Hair Spray',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/65/success-product.png',
                },
                {
                    offer_id: 108,
                    offer_name: 'Black Pearl',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/108/success-product.png',
                },
                {
                    offer_id: 109,
                    offer_name: 'MaxiGrow',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/109/success-product.png',
                },
                {
                    offer_id: 111,
                    offer_name: 'Urogun',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/111/success-product.png',
                },
                {
                    offer_id: 115,
                    offer_name: 'Happy Box',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/115/success-product.png',
                },
                {
                    offer_id: 116,
                    offer_name: 'MaxiGrow Beard',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/116/success-product.png',
                },
                {
                    offer_id: 117,
                    offer_name: 'CystiNorm',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/117/success-product.png',
                },
                {
                    offer_id: 118,
                    offer_name: 'CardioBalance',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/118/success-product.png',
                },
                {
                    offer_id: 119,
                    offer_name: 'Hepasanol',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/119/success-product.png',
                },
                {
                    offer_id: 120,
                    offer_name: 'Keton Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/120/success-product.png',
                },
                {
                    offer_id: 121,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/121/success-product.png',
                },
                {
                    offer_id: 123,
                    offer_name: 'Black Pearl',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/123/success-product.png',
                },
                {
                    offer_id: 124,
                    offer_name: 'Be-in-Forma',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/124/success-product.png',
                },
                {
                    offer_id: 125,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/125/success-product.png',
                },
                {
                    offer_id: 126,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/126/success-product.png',
                },
                {
                    offer_id: 127,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/127/success-product.png',
                },
                {
                    offer_id: 128,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/128/success-product.png',
                },
                {
                    offer_id: 129,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/129/success-product.png',
                },
                {
                    offer_id: 130,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/130/success-product.png',
                },
                {
                    offer_id: 131,
                    offer_name: 'Eretron Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/131/success-product.png',
                },
                {
                    offer_id: 132,
                    offer_name: 'Eretron Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/132/success-product.png',
                },
                {
                    offer_id: 133,
                    offer_name: 'Eretron Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/133/success-product.png',
                },
                {
                    offer_id: 134,
                    offer_name: 'CardioBalance',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/134/success-product.png',
                },
                {
                    offer_id: 138,
                    offer_name: 'CannabisVital Oil (20%)',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/138/success-product.png',
                },
                {
                    offer_id: 139,
                    offer_name: 'CannabisVital Oil (10%)',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/139/success-product.png',
                },
                {
                    offer_id: 186,
                    offer_name: 'Keton Aktiv',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/84/success-product.png',
                },
                {
                    offer_id: 187,
                    offer_name: "Idealis",
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/187/success-product.png',
                },
                {
                    offer_id: 188,
                    offer_name: 'CardioBalance',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/118/success-product.png',
                },
                {
                    offer_id: 191,
                    offer_name: 'Prostatricum',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/5/success-product.png',
                },
                {
                    offer_id: 192,
                    offer_name: "Idealis",
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/187/success-product.png',
                },
                {
                    offer_id: 193,
                    offer_name: 'Be-in-Forma',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/193/success-product.png',
                },
                {
                    offer_id: 197,
                    offer_name: 'Insulinorm',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/197/success-product.png',
                },
                {
                    offer_id: 202,
                    offer_name: 'Slim4vit',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/127/success-product.png',
                },
                {
                    offer_id: 205,
                    offer_name: 'CardioBalance',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/205/success-product.png',
                },
                {
                    offer_id: 239,
                    offer_name: 'Vitavisin',
                    offer_image: 'https://minio.cdnwv.com/cdnwv/success/it/239/success-product.png',
                },
            ];
        }
        getLanguage() {
            let language = this.landing_url.substring(8, this.landing_url.indexOf('.'));
            if (language.match(/[0-9]/i)) {
                language = language.slice(0, language.length-1);
            }
            if (language.length > 2 && language.length < 4) {
                language = language.substring(1);
            }
            if(language.length > 3 && language.length < 5){
                language = language.substring(2);
            }
            if(language.length > 3 && language.length < 6){
                language = language.substring(3);
            }

            let offrNewPrice, offerOldPrice, offerCurrency, offerContentPart1, offerContentPart2, offerContentPart3, offerDiscountContent, offerHour, offerMinutes, offerSeconds, offerButton, offerPriceContent, offerTitle, offerDiscount;

            this.language.forEach(item => {
                if (item.offer_language == language) {
                    offerContentPart1 = item.offer_content_part_1;
                    offerContentPart2 = item.offer_content_part_2;
                    offerContentPart3 = item.offer_content_part_3;
                    offerPriceContent = item.offer_price_content;
                    offerDiscount = item.offer_discount;
                    offerTitle = item.offer_title;
                    offerDiscountContent = item.offer_discount_content;
                    offrNewPrice = item.offer_new_price;
                    offerOldPrice = item.offer_old_price;
                    offerCurrency = item.offer_currency;
                    offerHour = item.offer_hour;
                    offerMinutes = item.offer_minutes;
                    offerSeconds = item.offer_seconds
                    offerButton = item.offer_button;

                }
            })

            this.offer_discount_content = offerDiscountContent;
            this.offer_new_price = offrNewPrice;
            this.offer_old_price = offerOldPrice;
            this.offer_currency = offerCurrency;
            this.offer_content_part_1 = offerContentPart1;
            this.offer_content_part_2 = offerContentPart2;
            this.offer_content_part_3 = offerContentPart3;
            this.offer_price_content = offerPriceContent;
            this.offer_discount = offerDiscount;
            this.offer_title = offerTitle;
            this.offer_hour = offerHour;
            this.offer_minutes = offerMinutes;
            this.offer_seconds = offerSeconds;
            this.button = offerButton;
            this.language = language;

        }

        getOffer() {
            let offerID = this.offer_id;
            let offerName, offerImage;
            this.offers.forEach(offer => {
                if (offer.offer_id == offerID) {
                    offerName = offer.offer_name;
                    offerImage = offer.offer_image;
                }
            })
            this.offer = offerName;
            this.image = offerImage;

        }
        createComebackerStyle() {
            let comebackerStyle = document.createElement('style');
            comebackerStyle.innerHTML = `
            .wv_comebacker{
                position: fixed !important;
                z-index: 99999 !important;
                left: 0 !important;
                top: 0 !important;
                overflow: auto !important;
                display:none !important;
                width:0 !important;
                min-height:0 !important; 
                font-family: 'Lato', sans-serif !important;              
                box-sizing: border-box !important;
            }
            .wv_comebacker p{
                margin:0 !important;
                text-indent: 0px !important;
                text-align: left !important;
                box-sizing: border-box !important;
                font-family: 'Lato', sans-serif !important; 
            }
            .wv_comebacker__container{
                position: relative !important;
                background: #FFFFFF !important;
                max-width:800px !important;
                height:fit-content !important;
                display:flex !important;
                justify-content: center !important;
                align-item: center !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__btn-close{
                width:auto !important;
                height:auto !important;
                position: absolute !important;
                right:5px !important;
                top:5px !important;
                border:none !important;
                background: none !important;
                padding:10px !important;
                display:flex !important;
                justify-content: center !important;
                align-items: center !important;
                box-sizing: border-box !important;
                cursor: pointer !important
                padding:0 !important;
                margin:0 !important;
                box-shadow: none !important;
            }
            .wv_comebacker__btn-close:hover svg rect{
                fill:black !important;
            }
            .wv_comebacker__image{
                // display:flex;
                // justify-content: space-between;
                // align-item: flex-end;
                width:50% !important;
                background: url(https://minio.cdnwv.com/cdnwv/bg/comebacker-bg.png) center / cover no-repeat !important;
                padding:40px 20px 40px 30px !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__image-content{
                display:flex !important;
                justify-content: space-between !important;
                align-items: flex-end !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__image-title{
                text-align: left !important;
                font-weight: normal !important;
                font-size: 52px !important;
                line-height: 1.2 !important;
                color: #009F4F !important;
                max-width:100% !important;
                position:relative !important;
                z-index:1 !important;
                margin:0 auto 0 0 !important;
                font-family: 'Bebas Neue', cursive !important;
                box-sizing: border-box !important;
                background: transparent !important;
            }
            .wv_comebacker__img{
                position:relative !important;
                z-index:2 !important;
                width:320px !important;
                margin: 0 -40px -40px !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__image img{
                display:block !important;
                margin: 0 auto !important;
                width:100% !important;
                box-sizing: border-box !important;
                border: none !important;
            }
            .wv_comebacker__price{
                width:50% !important;
                margin:0 !important;
                padding:0 0 80px !important;
                font-size: 12px !important;
                line-height: 1.2 !important;
                letter-spacing: 0.5px !important;
                color: #808080 !important;
                text-align:left !important;
                position:relative !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__price:before{
                content:'' !important;
                position:absolute !important;
                bottom:70px !important;
                left:0 !important;
                width:calc(100% + 80px) !important;
                height:2px !important;
                background: #009F4F !important;              
            }
            .wv_comebacker__price p {
                text-align:left !important;
                margin:0 !important;
                text-indent: 0 !important;
                padding:0 0 12px !important;
                box-sizing: border-box !important;
                font-size: 12px !important;
                line-height: 1.2 !important;
            }
            .wv_comebacker__price-container{
                display:flex !important;
                justify-content: flex-star !important;
                align-items: flex-star !important;
                box-sizing: border-box !important;
            }
            .new-price span{
                font-family: 'Bebas Neue', cursive !important;
                font-weight: bold !important;
                font-size: 48px !important;
                line-height: 1 !important;
                color: #009F4F !important;
                box-sizing: border-box !important;
            }
            .old-price span{
                font-family: 'Bebas Neue', cursive !important;
                font-size: 32px !important;
                line-height: 1 !important;
                text-decoration-line: line-through !important;
                color: #444444 !important;
                box-sizing: border-box !important;
            }
            .old-price span::after{
                content: '' !important;
                height: 0 !important;
                width: 0 !important;
                background-color: none !important;
                display: none !important;
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                transform: rotate(0) !important;
            }
            .old-price::after {
                content: ''!important;
                display: none !important;
                position: absolute !important;
                width: 0 !important;
                height: 0 !important;
                background-color: transparent !important;
                transform: none !important;
                top: auto !important;
                left: auto !important;
              }
            .wv_currency span{
                font-weight: 300 !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__content{
                width:50% !important;
                padding:40px 30px !important;
                display:flex !important;
                flex-direction:column !important;
                justify-content: center !important;
                align-items:flex-star !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__title{
                text-align: left !important;
                font-family: 'Bebas Neue', cursive !important;
                font-weight: normal !important;
                font-size: 36px !important;
                line-height: 1.1 !important;
                color: #070707 !important;
                padding:0 0 16px !important;
                margin:0 !important;
                box-sizing: border-box !important;
                background: transparent !important;
            }
            .wv_comebacker__text{
                font-size: 14px !important;
                line-height: 1.2 !important;
                letter-spacing: 0.5px !important;
                color: #444444 !important;
                padding: 0 0 27px !important;
                margin:0 !important;
                text-indent: 0px !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__timer-container{
                background: #E6ECF4 !important;
                box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.1) !important;
                display:flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                margin:0 0 36px !important;
                padding:10px !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__order-form-timer-dots{
                padding:0 5px !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__order-form-timer{
                width: calc(100% - 80px) !important;
                display:flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                box-sizing: border-box !important;      
            }
            .wv_discount__content{
                font-family: Bebas Neue !important;
                font-weight: normal !important;
                font-size: 18px !important;
                line-height: 1.6 !important;
                letter-spacing: 0.01em !important;
                text-transform: uppercase !important;
                color: #636567 !important;
                box-sizing: border-box !important;
            }
            .wv_discount__content p{
                font-size: 12px !important;
                line-height: 1 !important;
                display:flex !important;
                align-items: center !important;
                box-sizing: border-box !important;
                padding:0 !important;
            }
            .wv_comebacker__container .wv_discount{
                font-family: Bebas Neue !important;
                font-weight: bold !important;
                font-size: 38px !important;
                line-height: 1 !important;;
                letter-spacing: 0.01em !important;
                text-transform: uppercase !important;
                color: #353637 !important;
                box-sizing: border-box !important;
                background: transparent !important;
            }
            .wv_comebacker__order-form-timer-block{
                background: #FFFFFF !important;
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1) !important;
                border-radius: 4px !important;
                padding:5px !important;
                display:flex !important;
                flex-direction:column !important;
                justify-content: center !important;
                align-items: center !important;
                min-height:100% !important;
                width:76px !important;
                box-sizing: border-box !important;
            }
            .wv_comebacker__order-form-timer .seconds,
            .wv_comebacker__order-form-timer .minutes,
            .wv_comebacker__order-form-timer .hours{
                font-family: Bebas Neue !important;
                font-weight: bold !important;
                font-size: 32px !important;
                line-height: 1 !important;
                display: flex !important;
                align-items: center !important;
                text-align: center !important;
                letter-spacing: 0.02em !important;
                color: #009F4F !important;
                box-sizing: border-box !important;
                padding:0 !important;
                display:flex !important;
                flex-direction:column !important;
                justify-content: center !important;
                align-items: center !important;
            }
            .wv_comebacker__order-form-timer-block p{
                font-size: 12px !important;
                line-height: 14px !important;
                display: flex !important;
                align-items: center !important;
                text-align: center !important;
                letter-spacing: 0.02em !important;
                color: #444444 !important;
                box-sizing: border-box !important;
                padding:0 !important;
                display:flex !important;
                flex-direction:column !important;
                justify-content: center !important;
                align-items: center !important;
            }
            .wv_comebacker__link{
                font-family: Bebas Neue !important;
                display:block !important;
                margin:0 auto !important;
                width:100% !important;
                padding:24px !important;
                background: #009F4F !important;
                box-shadow: 0px 16px 16px rgba(0, 255, 150, 0.05) !important;
                color: white !important;
                font-family: Bebas Neue !important;
                font-style: normal !important;
                font-weight: normal !important;
                font-size: 24px !important;
                line-height: 1 !important;
                text-align: center !important;
                color: #FFFFFF !important;
                border:1px solid #009F4F !important;
                text-decoration-line: none !important;
                text-transform: uppercase !important;
                transition: all ease 0.45s !important;
                box-sizing: border-box !important;
                cursor: pointer !important;
            }
            .wv_comebacker__link:hover{
                color: #009F4F !important;
                background: transparent !important;
                text-decoration-line: none !important;
            }
            .wv_comebacker-active{
                display:flex !important;
                justify-content: center !important;
                align-items: center !important;
                width: 100% !important;
                height: 100% !important;
                background-color: rgba(0,0,0,.65) !important;
                box-sizing: border-box !important;
            }
            `;
            this.head.append(comebackerStyle);
        }
        createComebacker() {
            this.createComebackerStyle();
            this.getLanguage();
            this.getOffer();

            let modifyStyle = '';
            if (this.offer_currency == 'CHF' || this.offer_currency == 'CZK' || this.offer_currency == 'PLN' || this.offer_currency == 'CLP' || this.offer_currency == 'RON') {
                modifyStyle = `style="flex-direction:column"`;
            }

            let comebackerSection = document.createElement('section');
            comebackerSection.className = 'wv_comebacker wv_comebacker-closed';

            comebackerSection.innerHTML = `
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
               
                <div class="wv_comebacker__container">
                    <button class="wv_comebacker__btn-close">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.51819" y="2.33984" width="20" height="1.66667" rx="0.833333" transform="rotate(45 3.51819 2.33984)" fill="#E6ECF4"/>
                            <rect x="3.51819" y="2.33984" width="20" height="1.66667" rx="0.833333" transform="rotate(45 3.51819 2.33984)" fill="#E6ECF4"/>
                            <rect x="2.33972" y="16.4814" width="20" height="1.66667" rx="0.833333" transform="rotate(-45 2.33972 16.4814)" fill="#E6ECF4"/>
                        </svg>                    
                    </button>
                    <div class="wv_comebacker__image">
                        <h3 class="wv_comebacker__image-title">
                            ${this.offer}
                        </h3>
                        <div class="wv_comebacker__image-content">                            
                            <div class="wv_comebacker__price">
                                <p>${this.offer_price_content}</p>
                                <div class="wv_comebacker__price-container" ${modifyStyle}>
                                    <div class="new-price">
                                       <span class="wv_new-price">${this.offer_new_price}</span><span class="wv_currency">${this.offer_currency}</span>
                                    </div>
                                    &nbsp;&nbsp;
                                    <div class="old-price">
                                        <span class="wv_old-price">${this.offer_old_price}</span><span class="wv_currency">${this.offer_currency}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wv_comebacker__img">
                                <img src="${this.image}" alt="${this.offer} image" />
                            </div>
                        </div>                        
                    </div>
                    <div class="wv_comebacker__content">
                        <h3 class="wv_comebacker__title">
                            ${this.offer_title}
                        </h3>
                        <p class="wv_comebacker__text">
                            ${this.offer_content_part_1}&nbsp;${this.offer}&nbsp;${this.offer_content_part_2}${this.offer_discount}${this.offer_content_part_3}
                        </p>
                        <div class="wv_comebacker__timer-container">
                            <div class="wv_discount__content">
                                <p>-&nbsp;<span class="wv_discount">${this.offer_discount}</span>&nbsp;%</p>
                                <p>${this.offer_discount_content}</p>
                            </div>
                            <div class="wv_comebacker__order-form-timer">
                                <div class="wv_comebacker__order-form-timer-block">
                                    <p class="hours">00</p>
                                    <p>${this.offer_hour}</p>
                                </div>
                                <div class="wv_comebacker__order-form-timer-dots"> : </div>
                                <div class="wv_comebacker__order-form-timer-block">
                                    <p class="minutes">00</p> 
                                    <p>${this.offer_minutes}</p>
                                </div>
                                <div  class="wv_comebacker__order-form-timer-dots"> : </div>
                                <div class="wv_comebacker__order-form-timer-block">
                                    <p class="seconds">00</p>
                                    <p>${this.offer_seconds}</p>
                                </div>
                            </div>
                        </div>
                        <a href="${this.landing_url}" target="_blank" class="wv_comebacker__link">
                            ${this.button}
                        </a>
                    </div>
                </div>
            `;

            this.body.prepend(comebackerSection);
            var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
            this.initializeClock(deadline);
            this.closeComebacker();

        }

        showComebacker() {
            let url = this.landing_url;

            // Redirect to landing
            window.addEventListener('beforeunload', (event) => {
                event.preventDefault();
                event.returnValue = true;
                document.querySelector('.wv_comebacker').classList.add('wv_comebacker-redirect');
                document.querySelector('.wv_comebacker').classList.add('wv_comebacker-active');
            })
            // Show comebacker
            window.addEventListener('mouseout', (event) => {
                if (event.clientY < 0 && document.querySelector('.wv_comebacker').classList.contains('wv_comebacker-closed')) {
                    document.querySelector('.wv_comebacker').classList.add('wv_comebacker-active');
                }
                if((event.clientY < 0 && document.querySelector('.wv_comebacker').classList.contains('wv_comebacker-redirect'))) {
                    return location.assign(url);
                }
                return;
            })
        }

        closeComebacker() {
            let url = this.landing_url;
            document.querySelector('.wv_comebacker button.wv_comebacker__btn-close').addEventListener('click', () => {
                document.querySelector('.wv_comebacker').classList.add('wv_comebacker-redirect');
                document.querySelector('.wv_comebacker').classList.remove('wv_comebacker-closed');
                document.querySelector('.wv_comebacker.wv_comebacker-active').classList.remove('wv_comebacker-active');
            })
            return;
        }

        initializeClock(endtime) {

            function getTimeRemaining(endtime) {
                let t = Date.parse(endtime) - Date.parse(new Date());
                let seconds = Math.floor((t / 1000) % 60);
                let minutes = Math.floor((t / 1000 / 60) % 60);
                let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                let days = Math.floor(t / (1000 * 60 * 60 * 24));
                return {
                    total: t,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                };
            }

            function updateClock() {
                var t = getTimeRemaining(endtime);
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                    var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
                }

                let clock = document.querySelectorAll('.wv_comebacker__order-form-timer').forEach(item => {
                    item.querySelector(".hours").innerHTML = ("0" + t.hours).slice(-2);
                    item.querySelector(".minutes").innerHTML = ("0" + t.minutes).slice(-2);
                    item.querySelector(".seconds").innerHTML = ("0" + t.seconds).slice(-2);
                });
            }
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        init() {
            if (window.matchMedia("(min-width: 980px)").matches) {
                this.createComebacker();
                this.showComebacker();
            }
        }
    }

    try {
        document.addEventListener('DOMContentLoaded', () => {
            let comebacker = new Comebacker().init();
        })
    } catch (error) {
        console.error(`Comebacker Error: ${error}`);
    }

})();