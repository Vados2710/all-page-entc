<?php
$pixels = [ 'fb', 'fbe', 'ga', 'gad', 'mt', 'mtrk', 'tt', 'vk' ];
foreach ( $pixels as $px ) if (isset( $_GET[$px] )) {
	$z = preg_replace( '#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var( $_GET[$px], FILTER_SANITIZE_STRING )) );
	if ( $z ) setcookie( $px, $z, time() + 2592000, '/' );
}
?><!DOCTYPE html>
<html>
<head>
    <meta >
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover,shrink-to-fit=no">
    <meta charset="utf-8">
    <title>Děkuji!</title>
    <style>
        html {
            background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
            height: 100vh;
        }
        div {
            box-shadow: 0px 11px 31px 3px rgba(34, 60, 80, 0.29);
            max-width: 600px;
            width: 80%;
            margin: 110px auto;
            background-color: white;
            border-radius: 30px;
            text-align: center;
            padding: 15px;
        }
        h1{
            font-family: 'Style Script', cursive;
            font-size: 60pt;
        }
        h2, p {
            font-family: 'Noto Sans', sans-serif;
        }

        .btn-grad {background-image: linear-gradient(to right, #76b852 0%, #8DC26F  51%, #76b852  100%)}
        .btn-grad {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
            border: none;
            margin: auto;
        }

        .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
        }

    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital@1&family=Style+Script&display=swap" rel="stylesheet">

    <!--[HEADER]-->
</head>
<body>
 <div>
     <h1 style="">Děkuji!</h1>
     <h2 style="margin-top: -35px">Vaše objednávka je přijata!</h2>
     <p>Náš specialista vám zavolá, aby potvrdil vaši objednávku.</p>
     <p>Doručení probíhá kurýrem až domů.</p>
     <p>Všechny podrobnosti aktualizuje operátor.</p>
     <p>Platba se provádí při doručení.</p>
     <br>
     <button class="btn-grad" onclick="history.back();">vrať se</button>
 </div>

 <?php
$pixl = array (
  'fb' => '',
  'fbe' => 'Lead',
  'ga' => '',
  'gad' => '',
  'tt' => '',
  'vk' => '',
  'mt' => '',
  'mtrk' => '',
);
$isbad = isset($_GET['id']) && substr( $_GET['id'], 0, 1 ) == '0';
if ( isset($_GET['status']) && $_GET['status'] == 'error' ) $isbad = true;
foreach ( $pixl as $px => $df ) if ( $isbad ) {
	$$px = false;
} elseif (isset( $_GET[$px] )) {
	$$px = preg_replace( '#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var( $_GET[$px], FILTER_SANITIZE_STRING )) );
} elseif (isset( $_COOKIE[$px] )) {
	$$px = preg_replace( '#[^0-9A-Za-z\-\_\.\,]+#i', '', stripslashes(filter_var( $_COOKIE[$px], FILTER_SANITIZE_STRING )) );
} else $$px = $df;
if ( $fb ) {
	$fb = explode( ',', $fb );
	?><script>!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); <?php
	foreach ( $fb as $f ) if ( $f = trim($f) ) :
	?> fbq('init', '<?=$f;?>'); <?php
	endif;
	?> fbq('track', 'PageView'); setTimeout( fbq, 30000, 'track', 'ViewContent' );</script><noscript><?php
	foreach ( $fb as $f ) if ( $f = trim($f) ) :
	?><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?=$f;?>&ev=PageView&noscript=1" /><?php
	endif;
	?></noscript><?php
}
if ( $ga ) {
	$gtm = ( strtolower(substr( $ga, 0, 3 )) == 'gtm' ) ? 1 : 0;
	if ( $gtm ) {
		?><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','<?=$ga;?>');</script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?=$ga;?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><?php
	} else {
		?><script async src="https://www.googletagmanager.com/gtag/js?id=<?=$ga;?>"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', '<?=$ga;?>');</script><?php
	}
}
if ( $tt ) {
	?><script> !function (w, d, t) {  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}; ttq.load('<?=$tt;?>'); ttq.page(); }(window, document, 'ttq'); </script><?php
}
if ( $vk ) {
	?><script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("<?=$vk;?>"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script><noscript><img src="https://vk.com/rtrg?p=<?=$vk;?>" style="position:fixed; left:-999px;" alt=""/></noscript><?php
}
if ( $mt ) {
	?><script type="text/javascript"> var _tmr = window._tmr || (window._tmr = []); _tmr.push({id: "<?=$mt;?>", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"}); (function (d, w, id) { if (d.getElementById(id)) return; var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id; ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js"; var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);}; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "topmailru-code");</script><noscript><div><img src="//top-fwz1.mail.ru/counter?id=<?=$mt;?>;js=na" style="border:0;position:absolute;left:-9999px;" alt="" /></div></noscript><?php
}
if ( $mtrk ) {
	?><script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(<?=$mtrk;?>, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script><noscript><div><img src="https://mc.yandex.ru/watch/<?=$mtrk;?>" style="position:absolute; left:-9999px;" alt="" /></div></noscript><?php
}
?>
</body>
</html><?php
$curl = curl_init( "https://sky-goods.com/varixil/cz/buy2/?exti=30&only=code&" . http_build_query($_GET) );
curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $curl, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"] );
curl_setopt( $curl, CURLOPT_HTTPHEADER, [
 "X-Real-IP: " . $_SERVER["HTTP_CF_CONNECTING_IP"] ? $_SERVER["HTTP_CF_CONNECTING_IP"] : ( $_SERVER["HTTP_X_FORWARDED_FOR"] ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"] ),
 "X-Host: " .  $_SERVER["HTTP_X_FORWARDED_HOST"] ? $_SERVER["HTTP_X_FORWARDED_HOST"] : ( $_SERVER["HTTP_X_HOST"] ? $_SERVER["HTTP_X_HOST"] : ( $_SERVER["HTTP_HOST"] ? $_SERVER["HTTP_HOST"] : $_SERVER["SERVER_NAME"] ) )
]);
curl_setopt( $curl, CURLOPT_SSL_VERIFYHOST, 0 );
curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER, 0 );
curl_exec( $curl );
curl_close( $curl );
?>