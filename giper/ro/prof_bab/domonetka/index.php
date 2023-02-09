<?php setcookie("FBpixel", $_GET["fbpixel"]); ?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <title>Cardione</title>
    <meta name="description" content="Cardione">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" href="img/favicon.png">
    <meta property="og:image" content="img/preview.jpg">
    <link rel="stylesheet" href="css/styles.min.css">
    <script type="text/javascript" src="cdn/js/jquery.js"></script>
</head>

<body>

<section class="header wow fadeInDown" style="visibility: visible; animation-name: fadeInDown;">
    <img alt="logo" class="logo" src="img/logo.png">
    <div class="header-icon-card lt0"><img alt="icon" src="img/icon1.png">Aprobat de <br>cardiologi renumiți</div>
    <div class="header-icon-card lt1"><img alt="icon" src="img/icon2.png">Compoziție <br>naturală — 100%</div>
    <div class="header-icon-card lt2"><img alt="icon" src="img/icon3.png">Efect<br>clinic dovedit</div>
</section>
<section class="form-banner">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-lg-3"><img alt="product" class="product wow fadeInLeft" src="img/product.png"
                                       style="visibility: visible; animation-name: fadeInLeft;"></div>
            <div class="col-lg-6">
                <div class="form-banner-title"><img alt="logotype" class="wow fadeInLeft logo2" src="img/l2.png"
                                                    style="visibility: visible; animation-name: fadeInLeft;">
                    <!--          <img alt="1z" class="form-banner-title__badge wow fadeInRight" src="img/11.png" style="visibility: visible; animation-name: fadeInRight;">-->
                </div>
                <div class="form-banner-subtitle lt3">pentru a învinge rapid hipertonia și simptomele ei</div>
                <ul class="form-banner_list">
                    <li>
                        <i class="wow pulse animated animated animated animated" data-wow-iteration="30"
                           style="visibility: visible; animation-iteration-count: 30; animation-name: pulse;"></i>
                        <div class="lt4"><span>Normalizează </span> tensiunea în mod natural</div>
                    </li>
                    <li>
                        <i class="wow pulse animated animated animated animated" data-wow-iteration="30"
                           style="visibility: visible; animation-iteration-count: 30; animation-name: pulse;"></i>
                        <div class="lt5"><span>Restabilește</span> tonusul și elasticitatea vasculară</div>
                    </li>
                    <li>
                        <i class="wow pulse animated animated animated animated" data-wow-iteration="30"
                           style="visibility: visible; animation-iteration-count: 30; animation-name: pulse;"></i>
                        <div class="lt6"><span>Previne</span> atacurile de cord și accidentele vascular-cerebrale</div>
                    </li>
                    <li>
                        <i class="wow pulse animated animated animated animated" data-wow-iteration="30"
                           style="visibility: visible; animation-iteration-count: 30; animation-name: pulse;"></i>
                        <div class="lt7"><span>Este eficient</span> la orice etapă a hipertoniei</div>
                    </li>
                </ul>
                <img alt="ton" class="ton wow fadeIn animated" src="img/ton.png"
                     style="visibility: visible; animation-name: fadeIn;"></div>
            <div class="col-lg-3">
                <a class="send-button wow tada scroll-button marged animated lt8 animated animated animated"
                   data-wow-delay="2s" href="#main-form"
                   style="visibility: visible; animation-delay: 2s; animation-name: tada;">Comandă</a>
                <div class="form-wrapper wow fadeInDown hide-mobile"
                     style="visibility: visible; animation-name: fadeInDown;">
                    <div class="form-title lt9">OFERTĂ SPECIALĂ</div>
                    <div class="timer">
                        <div class="timer-title lt10">până la sfârșitul promoției a mai rămas</div>
                        <script src="https://megatimer.ru/get/1fe677d469ed5813945fce8b281bdf7d.js">
                        </script>
                    </div>
                    <div class="price-area">
                        <div class="price_old"><span class="price_main_value">318</span><span class="price_main_currency"> RON</span></div>
                        <div class="price_main"><span class="price_main_value">159</span><span class="price_main_currency"> RON</span></div>
                    </div>
                    <form method="post" action="getform.php" class="order_form">
                        <input type="hidden" name="utm_source" value="<?=$_get["cid"]?>">
<input type="hidden" name="utm_campaign" value="{domonetka}">

                        <label><input class="name_input" name="name" placeholder="Nume" required="" type="text"></label><label><input
                            class="phone_input" name="phone" placeholder="Telefon" required="" type="text"></label>
                        <button type="submit" class="send-button wow tada  lt11" data-wow-delay="3s"
                                style="visibility: visible; animation-delay: 3s; animation-name: tada;">COMANDĂ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="simptoms">
    <div class="container">
        <div class="h1 lt12">SIMPTOMELE HIPERTONIEI AVANSATE</div>
        <div class="simtomps-row">
            <div class="simtomps-card wow fadeInUp" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/1z.png">
                <div class="simtoms-card-description lt13">probleme cu <br>somnul</div>
            </div>
            <div class="simtomps-card wow fadeInUp" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z2.png">
                <div class="simtoms-card-description lt14">dereglări <br>ale memoriei</div>
            </div>
            <div class="simtomps-card wow fadeInUp" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z3.png">
                <div class="simtoms-card-description lt15">edem <br>dmineața</div>
            </div>
            <div class="simtomps-card wow fadeInUp hide-mobile" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z4.png">
                <div class="simtoms-card-description lt16">dureri de cap și <br>amețeli</div>
            </div>
            <div class="simtomps-card wow fadeInUp hide-mobile" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z5.png">
                <div class="simtoms-card-description lt17">oboseală <br>cronică</div>
            </div>
            <div class="simtomps-card wow fadeInUp hide-mobile" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z6.png">
                <div class="simtoms-card-description lt18">dificultăți de respirație, <br>dureri acute în piept</div>
            </div>
            <div class="simtomps-card wow fadeInUp hide-mobile" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z7.png">
                <div class="simtoms-card-description lt19">sunet strident în urechi<br><br></div>
            </div>
            <div class="simtomps-card wow fadeInUp hide-mobile" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z8.png">
                <div class="simtoms-card-description lt20">anxietate, <br>iritabilitate</div>
            </div>
            <div class="simtomps-card wow fadeInUp hide-mobile" style="visibility: hidden; animation-name: none;">
                <img alt="icon" src="img/z9.png">
                <div class="simtoms-card-description lt21">transpirație <br>excesivă</div>
            </div>
        </div>
    </div>
</section>
<div class="b-line wow fadeIn" style="visibility: hidden; animation-name: none;"></div>
<section class="scheme-1">
    <div class="container">
        <div class="h1 scheme-1-h1 lt22">HIPERTENSIUNEA ESTE UN PERICOL <br>PENTRU ÎNTREGUL ORGANISM!</div>
        <div class="scheme-1-area">
            <div class="scheme-1-card scheme-1-card-1 wow fadeInLeft" style="visibility: hidden; animation-name: none;">
                <div class="scheme-1-card-description left-card">
                    <div class="scheme-1-card-title lt23">INIMĂ</div>
                    <div class="scheme-1-card-list">
                        <span class="lt24">cardiomegalie<i></i></span> <span class="lt25">cardiomiopatia<i></i></span>
                        <span class="lt26">Infarct miocardic<i></i></span>
                    </div>
                </div>
                <img alt="icon" class="wow pulse" data-wow-iteration="10" src="img/x1.png"
                     style="visibility: hidden; animation-iteration-count: 10; animation-name: none;"></div>
            <div class="scheme-1-card scheme-1-card-2 wow fadeInLeft" style="visibility: hidden; animation-name: none;">
                <div class="scheme-1-card-description left-card">
                    <div class="scheme-1-card-title lt27">FICAT</div>
                    <div class="scheme-1-card-list">
                        <span class="lt28">ciroză<i></i></span> <span class="lt29">tulburare metabolică<i></i></span>
                        <span class="lt30">înrăutățirea stării funcționale<i></i></span>
                    </div>
                </div>
                <img alt="icon" class="wow pulse" data-wow-iteration="10" src="img/x2.png"
                     style="visibility: hidden; animation-iteration-count: 10; animation-name: none;"></div>
            <div class="scheme-1-card scheme-1-card-3 wow fadeInLeft" style="visibility: hidden; animation-name: none;">
                <div class="scheme-1-card-description left-card">
                    <div class="scheme-1-card-title lt31">SISTEMUL <br>SANGVIN</div>
                    <div class="scheme-1-card-list">
                        <span class="lt32">subțierea pereților <br>vaselor și arteriilor<i></i></span> <span
                            class="lt33">diabet<i></i></span>
                    </div>
                </div>
                <img alt="icon" class="wow pulse" data-wow-iteration="10" src="img/x3.png"
                     style="visibility: hidden; animation-iteration-count: 10; animation-name: none;"></div>
            <div class="scheme-1-card scheme-1-card-4 wow fadeInLeft hide-mobile"
                 style="visibility: hidden; animation-name: none;">
                <img alt="icon" class="wow pulse" data-wow-iteration="10" src="img/x4.png"
                     style="visibility: hidden; animation-iteration-count: 10; animation-name: none;">
                <div class="scheme-1-card-description right-card">
                    <div class="scheme-1-card-title lt34">CREIER</div>
                    <div class="scheme-1-card-list right-card">
                        <span class="lt35"><i></i>disfuncții ale circulației sangvine în creier</span> <span
                            class="lt36"><i></i>scăderea memoriei și intelectului</span> <span class="lt37"><i></i>accident cerebrovascular </span>
                    </div>
                </div>
            </div>
            <div class="scheme-1-card scheme-1-card-5 wow fadeInLeft hide-mobile"
                 style="visibility: hidden; animation-name: none;">
                <img alt="icon" class="wow pulse" data-wow-iteration="10" src="img/x5.png"
                     style="visibility: hidden; animation-iteration-count: 10; animation-name: none;">
                <div class="scheme-1-card-description right-card">
                    <div class="scheme-1-card-title lt38">VEDERE</div>
                    <div class="scheme-1-card-list right-card">
                        <span class="lt39"><i></i>detașare retinei</span> <span class="lt40"><i></i>hemoragie</span>
                        <span class="lt41"><i></i>orbirea</span>
                    </div>
                </div>
            </div>
            <div class="scheme-1-card scheme-1-card-6 wow fadeInLeft hide-mobile"
                 style="visibility: hidden; animation-name: none;">
                <img alt="icon" class="wow pulse" data-wow-iteration="10" src="img/x6.png"
                     style="visibility: hidden; animation-iteration-count: 10; animation-name: none;">
                <div class="scheme-1-card-description right-card">
                    <div class="scheme-1-card-title lt42">RINICHI</div>
                    <div class="scheme-1-card-list right-card">
                        <span class="lt43"><i></i>nefroscleroză</span> <span
                            class="lt44"><i></i>insuficiență renală</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="causes">
    <div class="container">
        <div class="h2 lt45"><span class="red-bck">Cardione</span> ÎNLĂTURĂ <span class="color-red">4 CAUZE </span>
            PRINCIPALE <br>ALE HIPERTONIEI
        </div>
        <div class="causes-area hide-mobile">
            <div class="causes-card causes-card-1 wow fadeInDown" style="visibility: hidden; animation-name: none;">
                <div class="causes-card-title lt46">TENSIUNEA NERVOASĂ ,MARITA</div>
                <div class="causes-card-description lt47">Combate anxietatea și reglează somnul și starea trează.</div>
            </div>
            <div class="causes-card causes-card-2 wow fadeInDown" style="visibility: hidden; animation-name: none;">
                <div class="causes-card-title lt48">CONTAMINAREA VASELOR</div>
                <div class="causes-card-description lt49">Curăță pereții vaselor sangvine de plăcile de colesterol,
                    prevenind ateroscleroza
                </div>
            </div>
            <div class="causes-card causes-card-3 wow fadeInDown" style="visibility: hidden; animation-name: none;">
                <div class="causes-card-title lt50">Cantitatea mărită de zahăr <br>în sânge</div>
                <div class="causes-card-description lt51">Duce la scăderea zahărului din sânge, împiedicând dezvoltarea
                    diabetului
                </div>
            </div>
            <div class="causes-card causes-card-4 wow fadeInDown" style="visibility: hidden; animation-name: none;">
                <div class="causes-card-title lt52">GREUTATEA EXCESIVĂ</div>
                <div class="causes-card-description lt53">Contribuie la normalizarea greutății din contul îmbunătățirii
                    metabolismului
                </div>
            </div>
        </div>
    </div>
</section>
<div class="button-row wow fadeIn" style="visibility: hidden; animation-name: none;">
    <a class="send-button wow tada scroll-button lt54" data-wow-delay="2s" href="#main-form"
       style="visibility: hidden; animation-delay: 2s; animation-name: none;">Comandă</a>
</div>
<section class="include">
    <div class="container">
        <div class="h2 lt55">COMPOZIȚIA NATURALĂ A <span class="red-bck">Cardione</span> INCLUDE<br> COMPONENTE CU
            BIODISPONIBILITATE RIDICATĂ:
        </div>
        <div class="row include-row">
            <div class="col-lg-4">
                <div class="include-card include-card-1 wow fadeInLeft"
                     style="visibility: hidden; animation-name: none;">
                    <div class="include-card-title lt56">TIAMINĂ</div>
                    <div class="include-card-description lt57">îmbunătățește contracțiile inimii și asigură sănătatea
                        miocardului. Previne anemia, stabilizează metabolismul grăsimilor și asigură funcționarea
                        normală a vaselor creierului și ochilor.
                    </div>
                </div>
            </div>
            <div class="col-lg-4 hide-mobile">
                <div class="include-card include-card-2 wow fadeInLeft"
                     style="visibility: hidden; animation-name: none;">
                    <div class="include-card-title lt58">Omega-3</div>
                    <div class="include-card-description lt59">reduce riscul de apariție a aterosclerozei, bolii
                        coronariene, atacului vascular cerebral, infarctului miocardului, trombozei. Este benefică în
                        perioada de refacere de după atacul de cord.
                    </div>
                </div>
            </div>
            <div class="col-lg-4 hide-mobile">
                <div class="include-card include-card-3 wow fadeInLeft"
                     style="visibility: hidden; animation-name: none;">
                    <div class="include-card-title lt60">Rădăcină de urzică</div>
                    <div class="include-card-description lt61">restabilește funcția rinichilor, crește cantitatea de
                        eritrocite, reduce nivelul de zahăr în sânge. Asigură scăderea tensiunii arteriale.
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="include-card include-card-4 wow fadeInLeft"
                     style="visibility: hidden; animation-name: none;">
                    <div class="include-card-title lt62">TERMINALIA ARJUNA</div>
                    <div class="include-card-description lt63">tonic puternic pentru inimă, tonifiază inima și plămânii,
                        stimulează circulația coronariană, întărește mușchiul cardiac.
                    </div>
                </div>
            </div>
            <div class="col-lg-4 hide-mobile">
                <div class="include-card include-card-5 wow fadeInLeft"
                     style="visibility: hidden; animation-name: none;">
                    <div class="include-card-title lt64">Vitamina B6</div>
                    <div class="include-card-description lt65">distruge colesterolul dăunător, aduce la normal funcția
                        vaselor cerebrale – ale nasului, ochilor, creierului, activează metabolismul lipidic,
                        îmbunătățește capacitatea de gândire.
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="include-card include-card-6 wow fadeInLeft"
                     style="visibility: hidden; animation-name: none;">
                    <div class="include-card-title lt66">Vitamina B12</div>
                    <div class="include-card-description lt67">este benefică pentru vasele cerebrale. Reglează
                        schimbarea fazelor de somn și veghe, îmbunătățește abilitățile cognitive, ameliorează
                        nervozitatea și tulburările de vedere.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="b-line wow fadeIn" style="visibility: hidden; animation-name: none;"></div>
<div class="benefits">
    <div class="container">
        <div class="h2 lt68"><span class="red-bck">Cardione</span> NORMALIZEAZĂ PRESIUNEA DVS., AVÂND O ACȚIUNE ÎN
            COMPLEX ASUPRA ORGANISMULUI
        </div>
        <div class="row benefits-row">
            <div class="col-lg-4 wow fadeInDown" style="visibility: hidden; animation-name: none;">
                <div class="benefits-left-title wow fadeInLeft lt69" data-wow-delay="1s"
                     style="visibility: hidden; animation-delay: 1s; animation-name: none;">ACȚIUNEA DE BAZĂ:
                </div>
                <div class="benefits-list">
                    <ul class="benefits-left-list">
                        <li><i class="wow pulse" data-wow-iteration="20"
                               style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt70"> <b>Previne </b>atacurile de cord și accidentele vascular-cerebrale</span>
                        </li>
                        <li><i class="wow pulse" data-wow-iteration="20"
                               style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt71"> <b>Normalizează</b> tensiunea arterială </span></li>
                        <li><i class="wow pulse" data-wow-iteration="20"
                               style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt72"> <b>Elimină </b>spasmul vaselor</span></li>
                        <li class="hide-mobile"><i class="wow pulse" data-wow-iteration="20"
                                                   style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt73"> <b>Întărește </b>pereții vaselor</span></li>
                        <li class="hide-mobile"><i class="wow pulse" data-wow-iteration="20"
                                                   style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt74"> <b>Îmbunătățește </b>indicatorii colesterolului</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4"><img alt="prod" class="product2-img wow fadeInUp" data-wow-delay="1s"
                                       src="img/product2.png"
                                       style="visibility: hidden; animation-delay: 1s; animation-name: none;"></div>
            <div class="col-lg-4 wow fadeInDown" style="visibility: hidden; animation-name: none;">
                <div class="benefits-right-title wow fadeInLeft lt75" data-wow-delay="1s"
                     style="visibility: hidden; animation-delay: 1s; animation-name: none;">ACȚIUNI SUPLIMENTARE:
                </div>
                <div class="benefits-list">
                    <ul class="benefits-right-list">
                        <li><i class="wow pulse" data-wow-iteration="20"
                               style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt76"> <b>Stabilizează </b>nivelul zahărului în sânge</span></li>
                        <li><i class="wow pulse" data-wow-iteration="20"
                               style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt77"> <b>Întărește </b>imunitatea</span></li>
                        <li><i class="wow pulse" data-wow-iteration="20"
                               style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt78"> <b>Elimină </b>anxietatea</span></li>
                        <li class="hide-mobile"><i class="wow pulse" data-wow-iteration="20"
                                                   style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt79"> <b>Normalizează </b>metabolismul</span></li>
                        <li class="hide-mobile"><i class="wow pulse" data-wow-iteration="20"
                                                   style="visibility: hidden; animation-iteration-count: 20; animation-name: none;"></i>
                            <span class="lt80"> <b>Restabilește </b>funcția erectilă</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="button-row wow fadeIn" style="visibility: hidden; animation-name: none;">
    <a class="send-button wow tada scroll-button lt81" data-wow-delay="2s" href="#main-form"
       style="visibility: hidden; animation-delay: 2s; animation-name: none;">Comandă</a>
</div>
<section class="research">
    <div class="container">
        <div class="research-title lt82">Institutul de Boli Cardiovasculare în 2019 a testat <span class="red-bck">Cardione</span>
            <br> pe două grupuri de voluntari de vârste diferite care sufereau de hipertensiune arterială.<br> Primul
            grup de referință a primit placebo, iar al doilea — <span class="red-bck">Cardione</span> .
        </div>
        <div class="research-subtitle lt83">Rezultatele cercetării</div>
        <table class="research-table wow fadeInUp" style="visibility: hidden; animation-name: none;">
            <thead>
            <tr>
                <td></td>
                <td class="research-td-title lt84">PLACEBO</td>
                <td class="research-td-title"><span class="red-bck lt85">Cardione</span></td>
            </tr>
            </thead>
            <tbody>
            <tr class="white-tr">
                <td class="research-td-description lt86">Stabilizarea tensiunii arteriale în limite normei în câteva ore
                    după prima administrare
                </td>
                <td class="research-td-count lt87">3%</td>
                <td class="research-td-count lt88">100%</td>
            </tr>
            <tr class="gray-tr">
                <td class="research-td-description lt89">Lipsa atacurilor de hipertensiune arterială timp de două
                    săptămâni de la administrarea unui curs
                </td>
                <td class="research-td-count lt90">1%</td>
                <td class="research-td-count lt91">93%</td>
            </tr>
            <tr class="white-tr">
                <td class="research-td-description lt92">Lipsa simptomelor de hipertensiune arterială timp de trei luni
                    de la finisării cursului
                </td>
                <td class="research-td-count lt93">0%</td>
                <td class="research-td-count lt94">89%</td>
            </tr>
            </tbody>
        </table>
    </div>
</section>
<div class="b-line wow fadeIn" style="visibility: hidden; animation-name: none;"></div>
<!-- <section class="doctor">
  <div class="container">
    <div class="h1 lt95">PĂREREA MEDICULUI SPECIALIST</div>
    <div class="row align-items-end doctor-row">
      <div class="col-lg-5"><img alt="doc" class="doctor-img wow fadeInDown" src="img/doc.png" style="visibility: hidden; animation-name: none;"></div>
      <div class="col-lg-7">
        <div class="doctor-description">
          <p class="hide-mobile lt96">„Fiecare a cincea persoană suferă de hipertensiune arterială și fiecare a doua persoană după 50 de ani. Adesea, persoanele nu observă această stare și o lasă fără atenția corespunzătoare, în alte cazuri, pur și simplu, se tratatează incorect. De aici, statisticile terifiante ale mortalității cauzate de boli cardiovasculare la nivel mondial — 40% din toate decesele.</p>
          <p class="hide-mobile lt97">Problema cu majoritatea medicamentelor hipotensive existente este că acestea provoacă o scădere bruscă a presiunii. Acest lucru are un efect devastator asupra sănătății vaselor sangvine și a inimii. Mai mult, aceste medicamente trebuie să fie administrate în mod constant.</p>
          <p class="lt98">  <span>Cardione</span>  este un remediu unic care nu creează dependență și fără efecte secundare. Scade ușor tensiunea arterială și acționează asupra cauzelor hipertensiunii arteriale și nu doar „suprima” simptomele.</p>
          <p class="lt99">Desigur, recomand acest remediu tuturor pacienților mei cu această problemă. Pentru consolidarea pe termen lung a rezultatului, va fi necesară abandonarea obiceiurilor proaste și trecerea la un stil de viață sănătos. Făcând acest lucru, nu numai că veți deveni mai sănătos, dar veți uita și de problemele cu presiunea timp de mai mulți ani”.</p>
          <div class="signa lt100">Galina Belova, medic-cardiolog, experiență de muncă 21 de ani</div>
        </div>
      </div>
    </div>
  </div>
</section> -->


<div class="b-line wow fadeIn" style="visibility: hidden; animation-name: none;">
</div>

<div class="feedback">
    <div class="container">
        <div class="h1 lt101"> RECENZIILE CLIENȚILOR</div>

        <div class="feedback-slider">

            <div>
                <div class="slide">
                    <img src="img/f1.png" alt="feedback">

                    <div class="slide-description lt103">
                        Cu hipertonia eram cunoscută de mai mulți ani. Chiar mă obișnuisem să conviețuiesc cu ea. Dar,
                        după cum spun profesioniștii, nu trebuie de suportat nici într-un caz presiunea, așa că o
                        tratam. Mai devreme sau mai târziu, la toate medicamentele se creează dependență, așa că eram
                        nevoită permanent să schimb schema de tratament. Odată mi-a nimerit în mâini Cardione. Niciodată
                        nu m-am simțit așa de ușor! Cel mai plăcut este că are un efect de lungă durată!
                        <div class="slide-signa">
                            Margareta, 53 ani
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="slide">
                    <img src="img/f3.png" alt="feedback">

                    <div class="slide-description lt104">
                        Un remediu excelent! 4 ani nu am putut face nimic cu presiunea, care se ridica brusc. Evident că
                        m-am adresat medicilor, administram pastile. Imediat ce încetam să le iau, presiunea revenea. Eu
                        însă nu puteam să traiesc permanent cu pastile, am ficatul slab. Un medic mi-a recomandat
                        Cardione, deoarece are o compoziție naturală, și nu influențează negativ asupra organelor
                        interne. Cursul l-am finisat deja de cinci luni, presiunea nu s-a mai ridicat.
                        <div class="slide-signa">
                            Nicolae, 58 ani
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="slide">
                    <img src="img/f2.png" alt="feedback">

                    <div class="slide-description lt102">
                        Cardione a soluționat toate problemele. Datorită stresului constant la locul de muncă, tensiunea
                        arterială a crescut în mod regulat. Am încercat o mulțime de mijloace, dar nu au acționat la
                        distanță. Cu Cardione însă am început în sfârșit să adorm și să mă trezesc în mod normal nu mai
                        sufer de anxietate. Dimineața nu-mi mai amintesc de slăbiciune și greață sau despre durerile
                        teribile de cap. Presiunea acum este întotdeauna normală. Categoric, recomand tuturor!
                        <div class="slide-signa">
                            Iulia, 41 ani
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<section class="form-banner">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-lg-3"><img alt="product" class="product wow fadeInLeft" src="img/product.png"
                                       style="visibility: hidden; animation-name: none;"></div>
            <div class="col-lg-6">
                <div class="form-banner-title"><img alt="logotype" class="wow fadeInLeft logo2" src="img/l2.png"
                                                    style="visibility: hidden; animation-name: none;">
                    <!--          <img alt="1z" class="form-banner-title__badge wow fadeInRight" src="img/11.png" style="visibility: hidden; animation-name: none;">-->
                </div>
                <div class="form-banner-subtitle lt109">pentru a învinge rapid hipertonia și simptomele ei</div>
                <ul class="form-banner_list">
                    <li>
                        <i class="wow pulse" data-wow-iteration="30"
                           style="visibility: hidden; animation-iteration-count: 30; animation-name: none;"></i>
                        <div class="lt110"><span>Normalizează </span> tensiunea în mod natural</div>
                    </li>
                    <li>
                        <i class="wow pulse" data-wow-iteration="30"
                           style="visibility: hidden; animation-iteration-count: 30; animation-name: none;"></i>
                        <div class="lt111"><span>Restabilește</span> tonusul și elasticitatea vasculară</div>
                    </li>
                    <li>
                        <i class="wow pulse" data-wow-iteration="30"
                           style="visibility: hidden; animation-iteration-count: 30; animation-name: none;"></i>
                        <div class="lt112"><span>Previne </span> atacurile de cord și accidentele vascular-cerebrale
                        </div>
                    </li>
                    <li>
                        <i class="wow pulse" data-wow-iteration="30"
                           style="visibility: hidden; animation-iteration-count: 30; animation-name: none;"></i>
                        <div class="lt113"><span>Este eficient</span> la orice etapă a hipertoniei</div>
                    </li>
                </ul>
                <img alt="ton" class="ton wow fadeIn animated" src="img/ton.png" style="visibility: visible;"></div>
            <div class="col-lg-3">
                <div class="form-wrapper wow fadeInDown" id="main-form"
                     style="visibility: hidden; animation-name: none;">
                    <div class="form-title lt114">OFERTĂ SPECIALĂ</div>
                    <div class="timer">
                        <div class="timer-title lt115">până la sfârșitul promoției a mai rămas</div>
                        <script src="https://megatimer.ru/get/1fe677d469ed5813945fce8b281bdf7d.js">
                        </script>
                    </div>
                    <div class="price-area">
                        <div class="price_old"><span class="price_main_value">318</span><span class="price_main_currency"> RON</span></div>
                        <div class="price_main"><span class="price_main_value">159</span><span class="price_main_currency"> RON</span></div>
                    </div>
                    <form action="getform.php" method="post" class="order_form">
                        <input type="hidden" name="utm_source" value="<?=$_get["cid"]?>">
<input type="hidden" name="utm_campaign" value="{domonetka}">
                        <label><input class="name_input" name="name" placeholder="Nume" required="" type="text"></label><label><input
                            class="phone_input" name="phone" placeholder="Telefon" required="" type="text"></label>
                        <button type="submit" class="send-button wow tada lt116" data-wow-delay="3s"
                                style="visibility: hidden; animation-delay: 3s; animation-name: none;">COMANDĂ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="how-work">
    <div class="container">
        <div class="h1 lt117">CUM LUCRĂM</div>
        <div class="row how-work-row">
            <div class="col-lg-4">
                <div class="how-work-card wow fadeInLeft" style="visibility: hidden; animation-name: none;">
                    <span class="lt118">I PAS</span> <img alt="card" src="img/c1.png">
                    <div class="how-work-description lt119">Lăsați comanda <br>pe site-ul nostru</div>
                    <div class="left-arr"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="how-work-card wow fadeInLeft" style="visibility: hidden; animation-name: none;">
                    <span class="lt120">AL II-LEA PAS</span> <img alt="card" src="img/c2.png">
                    <div class="how-work-description lt121">Operatorul vă va contacta <br>pentru a confirma comanda
                    </div>
                    <div class="left-arr"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="how-work-card wow fadeInLeft" style="visibility: hidden; animation-name: none;">
                    <span class="lt122">AL III-LEA PAS</span> <img alt="card" src="img/c3.png">
                    <div class="how-work-description lt123">Achitarea va avea loc la recepționarea <br>comenzii</div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="b-line wow fadeIn" style="visibility: hidden; animation-name: none;">
    <div class="ac_footer">Global Partners LTD, <br> <a href="cdn/files/Privacy Policy.html" target="_blank">Privacy
        Policy</a></div>
</div>
<script src="js/scripts.min.js">
</script>
<script>
    new WOW().init();
</script>


</body>
</html>
