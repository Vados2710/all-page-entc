<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

function send_to_Keitaro($post) // передаем ФИО и тел в свой-же трекер
{
    $params = [
        'extra_param_1' => $_REQUEST['name'],
        'extra_param_2' => $_REQUEST['full_phone'],
        'subid' => $_REQUEST['sub1'],
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_MAXREDIRS, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);

    $query = http_build_query($params);
    curl_setopt($ch, CURLOPT_URL, "https://skykt.space/ee151bc/postback?" . $query . "&payout=0&status=lead&from=order.php");

    $output = curl_exec($ch);
    curl_close($ch);
}
send_to_Keitaro($_REQUEST);

//отправляем заявку в скайлид
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://skyteam.cash/api/wm/push.json?id='.$_POST['key'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => array(
        'flow' => $_POST['flow'],
        'offer' => $_POST['offer'],
        'country' => $_POST['geo'],
        'ip' => $_POST['ip'],
        'us' => $_POST['sub1'],
        'name' => $_POST['name'],
        'phone' => $_POST['full_phone']
    ),
));
$response = curl_exec($curl);
curl_close($curl);

//записываем информацию о заказе + ответ сервера в файл log.txt
$log = date("D M j G:i:s T Y") ."\nIP: ".$_POST['ip']."\nОффер: ".$_POST['offer']. "\nПоток: ".$_POST['flow']. "\nТелефон: ".$_POST['full_phone']. "\nИмя: ".$_POST['name']."\n".$response."\n\n";
$file = fopen("log.txt", "a");
fwrite($file, $log);
fclose($file);

//отправляем на страницу спасибо
header("Location: thankyou/".$_POST['geo'].".php?fbpix=".$_POST['fbpix']);