var Attention=function(){"use strict";function e(e){for(var a in e){a=a.toUpperCase();var s=i[a];if(s)return t(s,r)}return t(i.EN,r)}function t(e,t){function i(e){if(e.matches)s.prepend(function(){var e=document.createElement("img");return e.classList.add("blockRedLine3103__image"),e.style.cssText="flex-shrink: 0; box-sizing: border-box; width: 60px; height: auto; margin: 0; padding: 0;",e.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDM3LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgMzcuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMwMEE2NTE7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNS45LDI5LjNjLTIuNCwwLTQuMywxLjktNC4zLDQuM3MxLjksNC4zLDQuMyw0LjNjMi40LDAsNC4zLTEuOSw0LjMtNC4zUzE4LjMsMjkuMywxNS45LDI5LjN6IE0xNS45LDM1LjIKCQkJYy0wLjksMC0xLjctMC43LTEuNy0xLjdzMC43LTEuNywxLjctMS43YzAuOSwwLDEuNywwLjcsMS43LDEuN1MxNi44LDM1LjIsMTUuOSwzNS4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNS40LDI5LjNjLTIuNCwwLTQuMywxLjktNC4zLDQuM3MxLjksNC4zLDQuMyw0LjNjMi40LDAsNC4zLTEuOSw0LjMtNC4zUzM3LjgsMjkuMywzNS40LDI5LjN6IE0zNS40LDM1LjIKCQkJYy0wLjksMC0xLjctMC43LTEuNy0xLjdzMC43LTEuNywxLjctMS43YzAuOSwwLDEuNywwLjcsMS43LDEuN1MzNi40LDM1LjIsMzUuNCwzNS4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLjQsMzIuNGg3LjNjMC4yLTEsMC43LTEuOCwxLjMtMi41SDMuNFYzMi40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00My44LDI5Ljl2LTguN2wtNi05LjdoLTkuN3YxOC4zaC04LjNjMC43LDAuNywxLjEsMS41LDEuMywyLjVoOS4yYzAuNS0yLjQsMi42LTQuMiw1LjItNC4yczQuNywxLjgsNS4yLDQuMgoJCQloNC44di0yLjVINDMuOHogTTMxLDIwLjF2LTUuN2g0LjVsNCw1LjdIMzF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjMsOGMwLDEuMSwwLDIuMiwwLDMuNGMwLDcuNC05LjMsMTAuMi05LjMsMTAuMnMtMS41LDAtMywwdjYuNGgyMS40VjhIMTcuM3oiLz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNS43LDMuNEMxMi40LDMuNCw5LjYsMiw4LjYsMEg3LjFDNi4xLDIsMy4zLDMuNCwwLDMuNGMwLDIuMSwwLDUsMCw3LjdjMCw1LjQsOCw4LjUsOCw4LjVzNy43LTIuMyw3LjctOC41CgkJQzE1LjgsOC4xLDE1LjgsNS40LDE1LjcsMy40QzE1LjcsMy40LDE1LjcsMy40LDE1LjcsMy40eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LjUsNC40Yy0yLjgsMC01LjEtMS4yLTYtMi45SDcuM0M2LjQsMy4yLDQsNC40LDEuMyw0LjRjMCwxLjgsMCw0LjIsMCw2LjZjMCw0LjYsNi43LDcuMiw2LjcsNy4yCgkJczYuNS0yLDYuNS03LjJDMTQuNSw4LjQsMTQuNSw2LjEsMTQuNSw0LjRDMTQuNSw0LjQsMTQuNSw0LjQsMTQuNSw0LjR6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy4zLDEyLjJDNy4zLDEyLjIsNy4yLDEyLjIsNy4zLDEyLjJjLTAuMiwwLTAuNC0wLjEtMC42LTAuMkw0LjgsOS44Yy0wLjMtMC4zLTAuMy0wLjgsMC0xLjEKCQkJYzAuMy0wLjMsMC44LTAuMywxLjEsMGwxLjQsMS41bDIuNi0yLjdjMC4zLTAuMywwLjgtMC4zLDEuMSwwYzAuMywwLjMsMC4zLDAuOCwwLDEuMWwtMy4yLDMuM0M3LjcsMTIuMSw3LjUsMTIuMiw3LjMsMTIuMnoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K",e}()),s.prepend(a()),s.append(a());else for(var t=document.querySelectorAll(".blockRedLine3103 .blockRedLine3103__image"),i=0;i<t.length;i++)t[i].remove()}var r=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div");r.classList.add("blockRedLine3103"),n.textContent=e.title,l.textContent=e.text,r.style.cssText="color: "+t.color+"; background: "+t.background+"; box-sizing:border-box;font: 400 16px / 1.15 Arial,sans-serif;text-transform:none;position:relative;z-index:1000000; padding:0;margin:0;direction:ltr;text-transform:none;",s.style.cssText="font:inherit;margin: 0 auto; padding: 10px 10px; max-width: 1200px; width: 100%; display: flex; justify-content: center; align-items: center; box-sizing: border-box;",o.style.cssText="font:inherit;text-align:center;box-sizing:border-box;padding:0 5px;margin:0;",n.style.cssText="font:inherit;font-weight:700;color:inherit;padding:0;margin:0 0 5px;box-sizing:border-box;",l.style.cssText="font:inherit;font-size:15px;color:inherit;padding:0;margin:0;box-sizing:border-box;",o.append(n),o.append(l),s.append(o),r.append(s),document.body.prepend(r);var c=window.matchMedia("(min-width: 768px)");i(c),c.addListener(i)}function a(){var e=document.createElement("div");e.classList.add("blockRedLine3103__image");for(var t=["0px","20px","10px"],a=["10px","10px","0px"],i=0;i<3;i++){var r=document.createElement("div");r.style.cssText="width: 65px; height: 5px; border-radius: 2px; background: rgba(255, 255, 255, 0.3); margin-top: 0; margin-right: 0; margin-bottom: "+a[i]+"; margin-left: "+t[i]+"; box-sizing: border-box;",e.append(r)}return e.style.cssText="flex-shrink: 0; box-sizing: border-box; padding: 0; margin: 0;",e}var i={EN:{title:"SAFE DELIVERY!  Don't worry, the safety of our customers is very important to us!",text:"Our couriers change masks every two hours. Delivery and payment are rendered without direct contact."},IN:{title:"सुरक्षित वितरण!  चिंता न करें, हमारे ग्राहकों की सुरक्षा हमारे लिए बहुत महत्वपूर्ण है!",text:"हमारे कोरियर हर दो घंटे में मास्क बदलते हैं।  वितरण और भुगतान सीधे संपर्क के बिना प्रदान किया जाता है।"},LA:{title:"ຈັດສົ່ງທີ່ປອດໄພ! ບໍ່ຕ້ອງກັງວົນ ຄວາມປອດໄພຂອງລູກຄ້າຂອງເຮົາເປັນສີ່ງສຳຄັນຫຼາຍສຳລັບເຮົາ!",text:"ບໍລິການຈັດສົ່ງຂອງເຮົາປ່ຽນຫນ້າກາກທຸກສອງຊົ່ວໂມງ ຈັດສົ່ງແລະຊຳລະເງີນໂດຍບໍ່ຕ້ອງຕິດຕໍ່ໂດຍຕົງ"},NP:{title:"सुरक्षित डेलिभरी! चिन्ता नगर्नुहोस् - हाम्रा ग्राहकहरूको सुरक्षा हाम्रो लागि धेरै महत्त्वपूर्ण छ!",text:"डेलिभरी र पैसाको कारोबार प्रत्यक्ष सम्पर्क बिना गरिन्छ।"},RU:{title:"БЕЗОПАСНАЯ ДОСТАВКА! Не волнуйтесь - безопасность наших клиентов очень важна для нас!",text:"Наши курьеры меняют маски каждые два часа. Доставка и оплата производится без прямого контакта."},AM:{title:"ԱՆՎՏԱՆԳ ԱՌԱՔՈՒՄ! Մի անհանգստացեք, մեր հաճախորդների անվտանգությունը շատ կարևոր է մեզ համար!",text:"Մեր առաքիչները դիմակները փոխում են երկու ժամը մեկ։ Առաքումը և վճարումը կատարվում է առանց անմիջական կապի."},KZ:{title:"БЕЗОПАСНАЯ ДОСТАВКА! Не волнуйтесь - безопасность наших клиентов очень важна для нас!",text:"Наши курьеры меняют маски каждые два часа. Доставка и оплата производится без прямого контакта."},GE:{title:"უსაფრთხო მიწოდება! არ ინერვიულოთ - ჩვენი მომხმარებლების უსაფრთხოება ჩვენთვის ძალიან მნიშვნელოვანია!",text:"ჩვენი კურიერები ნიღბებს ორ საათში ერთხელ იცვლიან. მიწოდება და გადახდა ხდება პირდაპირი კონტაქტის გარეშე."},AZ:{title:"TƏHLÜKƏSİZ ÇATDIRILMA! Narahat olmayın,müştərilərimizin gizliliyi bizim üçün çox vacibdir!",text:"Kuryerlərimiz sizin seçdiyiniz ünvana sifarişinizi təslim edəcək."},FR:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},BJ:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},CI:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},SN:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},ML:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},GN:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},UZ:{title:"Xavfsiz Yetkazib berish! Xavotir olmang - mijozlarimizning xavfsizligi biz uchun juda muhim!",text:"Bizning kurerlarimiz har ikki soatda niqoblarini almashtiradilar. Yetkazib berish va to'lash bevosita aloqasiz amalga oshiriladi."},ES:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},BO:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},EC:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},PE:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},MX:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},AR:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},CO:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},CL:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},CR:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},IT:{title:"CONSEGNA SICURA! Non ti preoccupare! Prendiamo sul serio la sicurezza dei nostri clienti!",text:"I nostri corrieri cambiano maschere e guanti ogni due ore. Il processo di spedizione e pagamento avviene senza contatto diretto."},TH:{title:"การจัดส่งที่ปลอดภัย! ไม่ต้องกังวล! เราคำนึงถึงความปลอดภัยของลูกค้าอย่างจริงจัง!",text:"ผู้ให้บริการจัดส่งสินค้าของเราเปลี่ยนหน้ากากและถุงมือทุกสองชั่วโมง การจัดส่งและการชำระเงินจะเกิดขึ้นโดยไม่ต้องติดต่อโดยตรง"},HU:{title:"BIZTONSÁGOS SZÁLLÍTÁS! Ne aggódjon! Mi komolyan vesszük az ügyfeleink biztonságát!",text:"Futáraink két óránként cserélnek maszkot és kesztyűt. A szállítási és fizetési folyamat közvetlen kapcsolat nélkül zajlik."},RO:{title:"LIVRARE SIGURA! Nu vă faceți griji! Noi luăm în serios siguranța clienților noștri!",text:"Curierii noștri schimbă măștie și mănuși la fiecare două ore. Procesul de livrare și plată are loc fără contact direct."},MD:{title:"LIVRARE SIGURA! Nu vă faceți griji! Noi luăm în serios siguranța clienților noștri!",text:"Curierii noștri schimbă măștie și mănuși la fiecare două ore. Procesul de livrare și plată are loc fără contact direct."},CZ:{title:"BEZPEČNÉ DODÁVÁNÍ! Nebojte se! Bezpečnost našich zákazníků bereme vážně!",text:"Naši kurýři mění masky a rukavice každé dvě hodiny. Proces dodání a platby probíhá bez přímého kontaktu."},SK:{title:"Bezpečné doručenie! Netrápte sa! Vážny sa staráme o bezpečnosť našich zákazníkov!",text:"Naše kuriéri si zmenia ochranné rúška a rukavice každé dve hodiny. Proces doručovania a platby prebieha bez priameho kontaktu!"},HR:{title:"SIGURNA DOSTAVA! Ne brinite se!Sigurnost naših kupaca shvaćamo ozbiljno!",text:"Naši kuriri mijenjaju maske i rukavice svaka dva sata. Postupak dostave i plaćanja odvija se bez izravnog kontakta."},SL:{title:"VARNA DOSTAVA! Brez skrbi! Varnost naših strank jemljemo resno!",text:"Naši kurirji menjajo maske in rokavice vsaki dve uri. Postopek dostave in plačila poteka brez neposrednega stika."},BG:{title:"БЕЗОПАСНА ДОСТАВКА! Не се притеснявайте! Ние приемаме сериозно безопасността на нашите клиенти!",text:"Нашите куриери сменят маски и ръкавици на всеки два часа. Процесът на доставка и плащане се осъществява без директен контакт."},GR:{title:"ΑΣΦΑΛΗ ΠΑΡΑΔΟΣΗ! Μην ανησυχείτε! Λαμβάνουμε σοβαρά υπόψη την ασφάλεια των πελατών μας!",text:"Τα κούριερ μας αλλάζουν μάσκες και γάντια κάθε δύο ώρες. Η διαδικασία παράδοσης και πληρωμής πραγματοποιείται χωρίς άμεση επαφή."},PT:{title:"ENTREGA SEGURA! Não se preocupe! Levamos a sério a segurança de nossos clientes!",text:"Nossos correios trocam máscaras e luvas a cada duas horas. O processo de entrega e pagamento ocorre sem contato direto."},PL:{title:"BEZPIECZNA DOSTAWA! Nie martw się! Poważnie podchodzimy do bezpieczeństwa naszych klientów!",text:"Nasi kurierzy zmieniają maseczki i rękawiczki co dwie godziny. Proces dostawy i płatności odbywa się bez bezpośredniego kontaktu."},AL:{title:"DËRGESË E SIGURT! Mos u shqetëso! Ne e marrim seriozisht sigurinë e klientëve tanë!",text:"Korrierët tanë ndryshojnë maskat dhe dorezat çdo dy orë. Procesi i transportit dhe pagesa zhvillohet pa kontakte të drejtpërdrejta."},NG:{title:"Dear customers, you can request a contactless delivery of your order.",text:"Our couriers follow necessary sanitary requirements and continue to work. Hurry up to get the cheapest deal! Prises will rise soon."},KH:{title:"ការដឹកជញ្ជូនប្រកបដោយសុវត្ថិភាព! សូមកុំបារម្ភ សុវត្ថិភាពរបស់អតិថិជនរបស់យើងគឺជាអត្ថិភាពចំម្បងរបស់យើង!",text:"អ្នកដឹកជញ្ជូនរបស់យើងផ្លាស់ប្តូរម៉ាសរៀងរាល់ពីរម៉ោងម្តង។ ការដឹកជញ្ជូននិងការបង់ប្រាក់គឺធ្វើឡើងដោយមិនចាំបាច់ប៉ះពាល់គ្នាដោយផ្ទាល់នោះទេ។"},LT:{title:"SAUGUS PRISTATYMAS! Nesijaudinkite! Mes rimtai žiūrime į savo klientų saugumą!",text:"Mūsų kurjeriai keičia kaukes ir pirštines kas dvi valandas. Pristatymo ir apmokėjimo procesas vyksta be tiesioginio kontakto."},LV:{title:"DROŠA PIEGĀDE! Neraizējieties - mūsu klientu drošība mums ir ļoti svarīga!",text:"Mūsu kurjeri maina maskas ik pēc divām stundām. Piegādes un apmaksas process norit bez tieša kontakta."},RS:{title:"СИГУРНА ДОСТАВА! Не брините - сигурност наших купаца је веома важна за нас!",text:"Наши курири мењају маске свака два сата. Достава и плаћање се врше без директног контакта."},BA:{title:"СИГУРНА ДОСТАВА! Не брините - сигурност наших купаца је веома важна за нас!",text:"Наши курири мењају маске свака два сата. Достава и плаћање се врше без директног контакта."},ME:{title:"СИГУРНА ДОСТАВА! Не брините - сигурност наших купаца је веома важна за нас!",text:"Наши курири мењају маске свака два сата. Достава и плаћање се врше без директног контакта."},SI:{title:"VARNA DOSTAVA! Brez skrbi - varnost naših strank nam je zelo pomembna!",text:"Naši kurirji menjajo maske vsaki dve uri. Dostava in plačilo se izvedeta brez neposrednega stika."},MK:{title:"БЕЗБЕДНА ДОСТАВА! Не грижете се - безбедноста на нашите клиенти е многу важна за нас!",text:"Нашите доставувачи ги менуваат маските на секои два часа. Доставата и плаќањето се вршат без директен контакт."},TR:{title:"GÜVENLİ TESLİMAT! Merak etmeyin, müşterilerimTeeslimatizin güvenliği bizim için çok önemlidir!",text:"Kuryelerimiz her iki saatte maske değiştirir. Temassiz teslimat ve ödeme."},FI:{title:"TURVALLINEN TOIMITUS! Ei ole mitään syytä huoleen, sillä asiakkaidemme turvallisuus on meille ensisijaisen tärkeää!",text:"Kuriirimme vaihtavat maskit kahden tunnin välein. Toimitus ja maksu suoritetaan lähikontakteja välttäen."},ID:{title:"PENGIRIMAN AMAN! Jangan khawatir, kenyamanan pelanggan sangat penting bagi kami!",text:"Kurir kami mengganti masker setiap dua jam. Pengiriman dan pembayaran dilakukan tanpa kontak langsung."},PH:{title:"Ligtas na Paghahatid! Huwag kayong mag-alala! Pinapahalagahan namin ang kaligtasan ng aming mga customer!",text:"Ang aming mga courier ay nagpapalit ng gloves at face masks ng bawat dalawang oras. Ang proseso ng paghahatid at pagbabayad ay nagaganap nang walang direktang pakikipag-kontak."},BD:{title:"নিরাপদ বিতরণ! চিন্তা করবেন না - আমাদের গ্রাহকদের সুরক্ষা আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ!",text:"আমাদের কুরিয়ারেরা প্রতি দু ঘন্টা পর মাস্ক পরিবর্তন করে। বিতরণ এবং অর্থ প্রদান সরাসরি যোগাযোগ ছাড়াই করা হয়।"},GT:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},EG:{title:"خدمة شحن امنة, لا تقلق, سلامة شحنة عملائنا مهمة جدا بالنسبة لنا",text:"مناديب التوصيل لدينا يضعون كمامة جديدة كل ساعتين, استلام ودفع سعر الشحنة امن وبدون اتصال مباشر"},DE:{title:"SICHERE LIEFERUNG! Keine Sorge - die Sicherheit unserer Kunden ist uns sehr wichtig!",text:"Unsere Kuriere wechseln die Masken alle zwei Stunden. Lieferung und Zahlung erfolgen ohne direkten Kontakt."},SG:{title:"安全送达！别担心，客户的安全对我们来说非常重要！",text:"我们的快递员每两个小时换一次口罩。快递和付款都是无接触进行的。"},TW:{title:"安全送達！別擔心，客戶的安全對我們來說非常重要！",text:"我們的快遞員每兩個小時換一次口罩。快遞和付款都是無接觸進行的。"},HK:{title:"安全送達！別擔心，客戶的安全對我們來說非常重要！",text:"我們的快遞員每兩個小時換一次口罩。快遞和付款都是無接觸進行的。"}},r={color:"#ffffff",background:"red"};return{init:function(t){e(t)}}}();function getUrlQueryString(){var e=window.location.search;if(e){var t=e.indexOf("?");if(-1!=t)return window.location.search.slice(t+1)}return!1}function getUrlQueryParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?void 0:decodeURIComponent(t[1].replace(/\+/g," "))}function getAlUserData(e){try{var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}catch(e){return}}function setAlUserData(e,t,a){try{var i=(a=a||{}).expires,r=new Date;"number"==typeof i&&i?(r.setTime(r.getTime()+1e3*i),i=a.expires=r):(r.setTime(r.getTime()+2592e6),i=a.expires=r),i&&i.toUTCString&&(a.expires=i.toUTCString());var s=e+"="+(t=encodeURIComponent(t));for(var o in a){s+="; "+o;var n=a[o];!0!==n&&(s+="="+n)}s+="; path=/",document.cookie=s}catch(e){}}function getSystemParams(){return{app:function(){try{return navigator.appCodeName}catch(e){return null}}(),app_name:function(){try{return navigator.appName}catch(e){return null}}(),app_version:function(){try{return navigator.appVersion}catch(e){return null}}(),language:function(){try{return(navigator.language||navigator.systemLanguage||navigator.userLanguage||"en").substr(0,2).toLowerCase()}catch(e){return null}}(),platform:function(){try{return navigator.platform}catch(e){return null}}(),java_enabled:function(){try{return navigator.javaEnabled()}catch(e){return null}}(),cookie_enabled:function(){try{return navigator.cookieEnabled}catch(e){return null}}(),browser_ver_minor:function(){try{return parseInt(navigator.appVersion,10)}catch(e){return null}}(),browser_ver_major:function(){try{var e,t=navigator.appVersion;return(e=t.indexOf("MSIE"))>-1?parseFloat(t.substr(e+5)):parseFloat(t)}catch(e){return null}}(),s_width:function(){try{return window.screen?screen.width:0}catch(e){return null}}(),s_height:function(){try{return window.screen?screen.height:0}catch(e){return null}}(),tz_offset:function(){try{return 60*(new Date).getTimezoneOffset()*-1}catch(e){return null}}()}}function alInitUserData(){var e=getUrlQueryString();if(e){var t=e.split("&");if(t.length>0)for(var a=0;a<t.length;a++){var i=t[a].split("=");setAlUserData(i[0],i[1])}}setAlUserData("_allocation",window.location.href),setAlUserData("_alreferer",document.referrer),void 0===getAlUserData("_alquery")&&e&&setAlUserData("_alquery",e),void 0===getAlUserData("_alstart")&&setAlUserData("_alstart",parseInt(Date.now()/1e3)),setAlUserData("_alsystems",JSON.stringify(getSystemParams()))}function encodeQueryData(e){return Object.keys(e).map((function(t){return[t,e[t]].map(encodeURIComponent).join("=")})).join("&")}function alStatPixel(){var e=getSystemParams(),t=getAlUserData("_allocation");void 0!==t&&(e._allocation=t);var a=getAlUserData("alstream");void 0!==a&&(e.alstream=a);var i=getAlUserData("_alid");i?e._alid=i:"undefined"!=typeof _alid&&(setAlUserData("_alid",_alid),e._alid=_alid),void 0===getAlUserData("alunique")?(setAlUserData("alunique",1,{expires:86400}),e.alunique=1):e.alunique=0;var r=getAlUserData("_alstart");void 0!==r&&(e._alstart=r);var s=getAlUserData("alclick");void 0!==s&&(e.alclick=s);var o=getAlUserData("_alreferer");void 0!==o&&(e._alreferer=o);var n=getAlUserData("sub_id");void 0!==n&&(e.sub_id=n);var l=getAlUserData("sub_id_1");void 0!==l&&(e.sub_id_1=l);var c=getAlUserData("sub_id_2");void 0!==c&&(e.sub_id_2=c);var u=getAlUserData("sub_id_3");void 0!==u&&(e.sub_id_3=u);var d=getAlUserData("sub_id_4");void 0!==d&&(e.sub_id_4=d);var p=getAlUserData("utm_source");void 0!==p&&(e.utm_source=p);var m=getAlUserData("utm_medium");void 0!==m&&(e.utm_medium=m);var g=getAlUserData("utm_campaign");void 0!==g&&(e.utm_campaign=g);var y=getAlUserData("utm_term");void 0!==y&&(e.utm_term=y);var v=getAlUserData("utm_content");void 0!==v&&(e.utm_content=v),e.rand=parseInt(1e5*Math.random()),(window.Image?new Image:document.createElement("img")).src="/land/collect/?"+encodeQueryData(e)}var jQ=!1;function runLandScriptsParams(e){setAlUserData("_alid",e._alid),alStatPixel(),function e(t){if("undefined"==typeof jQuery){if(!jQ){jQ=!0;var a=document.createElement("script");a.type="text/javascript",a.src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(a)}setTimeout((function(){e(t)}),50)}else(i=jQuery)((function(){i("body").append('<div id="al-modal" style="vartical-align: middle;font-family: Helvetica,Arial, sans-serif;font-weight: 400;text-align:center;background: #FFFFFF;border-radius: 10px;box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);display: none;left: 50%;margin-left: -200px;margin-top: -100px;opacity: 1;padding: 45px 40px 40px;position: fixed;top: 50%;width: 400px;z-index: 1000;"> <span class="al-modal-close" style="width: 21px;height: 21px;position: absolute;top: 10px;right: 10px;cursor: pointer;display: block;">×</span> <div id="al-modal-content" style="padding: 10px 0 15px 0;"></div> <div class="al-modal-close" style="color: #000;background: linear-gradient(to bottom, #35870d 4%, #297b00 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);border: medium none;border-radius: 5px;box-shadow: 0 -1px 0 0 rgba(13, 69, 9, 1) inset, 0 1px 1px 0 rgba(0, 0, 0, 0.22);color: #fff;cursor: pointer;display: block;text-align: center;text-decoration: none;font-size: 18px;height: 53px;line-height: 53px;margin: 0 auto;width: 235px;">OK</div> </div> <div id="al-modal-overlay" style="z-index: 999; position: fixed; background-color: #efeee9; opacity: 0.8; width: 100%; height: 100%; top: 0; left: 0; cursor: pointer;display: none;"></div>'),i("body").on("click",".al-modal-close, #al-modal-overlay",(function(){i("#al-modal").animate({opacity:0,top:"45%"},200,(function(){i(this).css("display","none"),i("#al-modal-overlay").fadeOut(400)})),i("#al-modal-content").empty()}));var e=i.parseJSON(t.offers);Attention.init(e);var a="",r=!1;for(var s in e){s==t.country_code&&(r=!0);var o=e[s];s==t.country_code?option=i("<option></option>",{value:s,text:o.country,selected:"selected"}):option=i("<option></option>",{value:s,text:o.country});var n=option[0].outerHTML;html_option=void 0!==n?option[0].outerHTML:option.clone().wrap("<div></div>").parent().html(),a+=html_option}function l(e,t){var a;i("#pre-load-al-request").remove(),"error"==t?e='<span style="color: #a94442;"><strong>'+e+"</strong></span>":"success"==t&&(e='<strong><span style="color: #3c763d;">'+e+"</span></strong>"),a=e,i("#al-modal-content").html(a),i("#al-modal-overlay").fadeIn(400,(function(){i("#al-modal").css("display","block").animate({opacity:1,top:"50%"},200)}))}function c(e,t){var a=e[t];if(void 0===a)i(".al-cost").html("-"),i(".al-cost-promo").html("-"),i(".al-cost-delivery").html("-"),i(".al-cost-sum").html("-");else{i(".al-cost").html(a.cost+" "+a.currency),i(".al-cost-promo").html(a.cost_promo+" "+a.currency),i(".al-cost-delivery").html(a.cost_delivery+" "+a.currency);var r=parseInt(a.cost)+parseInt(a.cost_delivery);i(".al-cost-sum").html(r+" "+a.currency),i(".al-raw-cost").html(a.cost),i(".al-raw-cost-promo").html(a.cost_promo),i(".al-raw-cost-delivery").html(a.cost_delivery),i(".al-raw-cost-sum").html(r),i(".al-raw-currency").html(a.currency)}}i(".al-country").each((function(e,s){i(this).append(a),active_val=r?t.country_code:i(this).find("option[value!='']:first").val(),i(this).val(active_val),i(this).find("option[value='"+active_val+"']:first").prop("selected",!0)})),"undefined"!=typeof active_val&&c(e,active_val),i("body").on("change",".al-country",(function(){var a=i(this).val();c(e=i.parseJSON(t.offers),a)})),i("body").on("submit",".al-form",(function(){var e=i(this).serialize();return i.ajax({beforeSend:function(){i("body").prepend('<div id="pre-load-al-request" style="bottom: 0; left: 0; margin: auto;position: fixed;right: 0;top: 0;z-index: 999999999;"><div style="left: 0; margin: 0 auto;position: absolute;right: 0;top: 50%;"><div style="height: 50px; margin: 0 auto; position: relative; width: 300px; text-align: center; line-height: 50px; font-size: 20px; font-weight: bold;color: #333333;background: #FFFFFF; border-radius: 6px;box-shadow: 0 0 0 6px rgba(153, 153, 153, .3);">Loading...</div></div></div>')},url:"/land/order?"+e,data:e,dataType:"json",type:"POST",success:function(e){if("ok"==e.status){var t="/success.html";e.url&&(t=e.url);var a=getUrlQueryParameterByName("fb_pixel_lead");void 0!==a&&(t=-1!==t.indexOf("?")?t+"&fb_pixel_lead="+a:t+"?fb_pixel_lead="+a),window.location.href=t}else"error"==e.status?l(e.data,"error"):l("Unknown error","error")},error:function(e,t,a){l("Server error","error")}}),!1}));var u=getUrlQueryParameterByName("fb_pixel_land");if(void 0===u&&"fb_pixel"in t&&(u=t.fb_pixel),u){!function(e,t,a,i,r,s,o){e.fbq||(r=e.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},e._fbq||(e._fbq=r),r.push=r,r.loaded=!0,r.version="2.0",r.queue=[],(s=t.createElement(a)).async=!0,s.src="//connect.facebook.net/en_US/fbevents.js",(o=t.getElementsByTagName(a)[0]).parentNode.insertBefore(s,o))}(window,document,"script");var d=u.split("|");for(var p in d)fbq("init",d[p]),fbq("track","PageView")}var m,g=getUrlQueryParameterByName("fb_pixel_lead");if(void 0===g&&"fb_pixel_lead"in t&&(g=t.fb_pixel_lead),g&&"success"===t.page_type)for(var p in function(e,t,a,i,r,s,o){e.fbq||(r=e.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},e._fbq||(e._fbq=r),r.push=r,r.loaded=!0,r.version="2.0",r.queue=[],(s=t.createElement(a)).async=!0,s.src="//connect.facebook.net/en_US/fbevents.js",(o=t.getElementsByTagName(a)[0]).parentNode.insertBefore(s,o))}(window,document,"script"),d=g.split("|"))fbq("init",d[p]),fbq("track","Lead");if("iframe_url"in t){var y=document.createElement("IFRAME");y.setAttribute("src",t.iframe_url),y.style.display="none !important",y.setAttribute("height","1"),y.setAttribute("width","1"),y.setAttribute("border","0"),y.setAttribute("frameborder","0"),y.setAttribute("scrolling","no"),y.setAttribute("seamless","seamless"),document.body.appendChild(y)}"footer_script"in t&&t.footer_script&&((m=document.createElement("script")).type="text/javascript",m.src="/script_footer.js?country_code="+t.country_code,document.getElementsByTagName("head")[0].appendChild(m)),"script_langing"in t&&t.script_langing&&((m=document.createElement("script")).type="text/javascript",m.src="/land/script?mode=land&alstream="+t.script_langing,document.getElementsByTagName("head")[0].appendChild(m)),"script_success"in t&&t.script_success&&((m=document.createElement("script")).type="text/javascript",m.src="/land/script?mode=success&alstream="+t.script_success,document.getElementsByTagName("head")[0].appendChild(m))}));var i}(e)}function alGetData(){var e={lang:(navigator.language||navigator.systemLanguage||navigator.userLanguage||"en").substr(0,2).toLowerCase(),rand:parseInt(1e5*Math.random())},t=getAlUserData("_allocation");void 0!==t&&(e.location=t);var a=getAlUserData("alstream");void 0!==a&&(e.alstream=a);var i=document.createElement("script");i.type="text/javascript",i.src="/land/params/?"+encodeQueryData(e),document.getElementsByTagName("head")[0].appendChild(i)}function alCounters(){}try{alInitUserData(),alGetData(),alCounters()}catch(e){}