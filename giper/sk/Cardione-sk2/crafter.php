<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CrafterScript Sample Page</title>
</head>
<body>
	
<h1> Привет тебе из <span class="js-city"></span>
<h1> Сегодня у нас <span class="js-date"></span>
<!-- Контент -->

<!-- Метрика -->


<script>window.jQuery || document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"><\/script>')</script>

<script>
    var vitrina = 'http://hotinfo24.eversmi.com'; // <-- ссылка на витрину 
    var msgText = 'Для Вас специальное предложение!'; // <-- Заголовок Попап
    var lnkUrl = '<?php echo ot_add_params("out.php");?>'; //<-- Ссылка Попап
    var lnkTxt = 'Получите Номидол за 1 рубль!';// <-- Текст ссылки
</script>

<script src="crafterscript.js"></script>

</body>
</html>