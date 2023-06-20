<!DOCTYPE html>
<html>
<head>
    <!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '<?php echo htmlspecialchars($_GET['fbpix'], ENT_QUOTES, 'UTF-8'); ?>');
  fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"/></noscript>
<!-- End Facebook Pixel Code -->
    <meta >
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover,shrink-to-fit=no">
    <meta charset="utf-8">
    <title>Merci!</title>
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
</head>
<body>
 <div>
     <h1 style="">Merci!</h1>
     <h2 style="margin-top: -35px">Votre commande est acceptée !</h2>
     <p>Notre spécialiste vous appellera pour confirmer votre commande.</p>
     <p>La livraison est effectuée par coursier à domicile.</p>
     <p>Tous les détails mettront à jour l'opérateur.</p>
     <p>Le paiement est effectué à la livraison.</p>
     <br>
     <button class="btn-grad" onclick="history.back();">Ritorno</button>
 </div>
</body>
</html>