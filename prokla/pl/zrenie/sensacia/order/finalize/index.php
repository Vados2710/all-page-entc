<?php 
$paramArr = [
];
?>
<html>
<head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59D9Z98');</script>
<!-- End Google Tag Manager -->
	<meta charset="utf-8">
	<title>Thank you</title>
    <style>
		@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
		 body {
			 margin: 0;
			 background: #333;
		}
		 .order-signup-thankyou {
			 font-family: sans-serif;
			 display: flex;
			 justify-content: center;
			 align-items: center;
			 color: #fff;
			 background: #333;
			 padding: 10%;
		}
		 .order-signup-thankyou .content {
			 margin: auto;
			 max-width: 700px;
			 color: #333;
			 box-shadow: 0 3px 6px rgba(0, 0, 0, 0.55), 0 3px 6px rgba(0, 0, 0, 0.23);
			 background: url('../../img/paper-plane.gif') no-repeat #fff;
			 background-position: right 5px bottom 5px;
			 background-size: 10em;
			 text-align: center;
			 position: relative;
			 padding: 10%;
			 border-radius: 5px;
		}
		 .order-signup-thankyou .content .left-hole, .order-signup-thankyou .content .right-hole {
			 position: absolute;
			 width: 20px;
			 height: 20px;
			 background: #333;
			 border-radius: 50%;
			 top: 15px;
		}
		 .order-signup-thankyou .content .left-hole {
			 left: 15px;
			 top: 10px;
		}
		 .order-signup-thankyou .content .right-hole {
			 right: 15px;
			 top: 10px;
		}
		 .order-signup-thankyou .content h2, .order-signup-thankyou .content h3 {
			 text-align: left;
			 padding: 5% 5% 0% 3%;
			 color: #333;
			 font-weight: 900;
		}
		 .order-signup-thankyou .content .main-content > h1 {
			 color: #333;
			 text-transform: uppercase;
			 margin-top: -2%;
			 font-size: 2.5em;
			 font-weight: 900;
		}
 
    </style>
	
	<?php
	if(!empty($_GET['utmOTrack']) && array_key_exists($_GET['utmOTrack'], $paramArr))
	{
	echo <<<EOF
		    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133175478-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-133175478-1');
  gtag('config', 'AW-716915336');
</script>


EOF;
	}

	?>
		<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133175478-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-133175478-1');
  gtag('config', 'AW-716915336');
</script>

</head>

<body>
    <script>function getUclick_c(){var e=document.cookie.match(new RegExp("(?:^|; )"+"uclick"+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}function cnv_pixel(){var e="https://twoje-zdrowie.club/",n=document.createElement("img");"function"==typeof window.getUclick_c?n.src=e+"click.php?cnv_id=OPTIONAL&payout=OPTIONAL&uclick="+getUclick_c():n.src=e+"click.php?cnv_id=OPTIONAL&payout=OPTIONAL"}cnv_pixel();</script>

    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59D9Z98"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <div class="header-custom order-signup-thankyou">
        <div class="content">
            <div class="left-hole"></div>
            <div class="right-hole"></div>
            <div class="main-content">
                <h1>Dziękujemy za złożenie zamówienia!</h1>
                <p class="strong">Dziękujemy za zakup w naszym sklepie.Wkrótce skontakuje się z Tobą nasz konsultant w celu potwierdzenia zamówienia.</p>
                
            </div>

        </div>
    </div>
</body>
</html>
