<?php 

$post_data['name'] = $_POST['name'];
$post_data['phone'] = preg_replace('/[^0-9]/', '', $_POST['phone']);

if (isset($post_data['phone']) and ($post_data['phone'] !== '') ) {

	$post  = [
		'flow_hash' => 'aBCk',
		'landing' => 'it.<span class="productName"></span>v.com',
		'referrer' => $_POST['referrer'],
		'country' => 'IT',
		'phone' => $post_data['phone'],
		'name' => $post_data['name'],
		'sub1' => $_POST['sub1'],
		'sub2' => $_SERVER["HTTP_CF_CONNECTING_IP"],
		'sub3' => $post_data['phone'],
	];

	$api_reqest = curl('http://wapi.leadbit.com/api/new-order/_5f882f4216815276528823', $post);
	$api_reqest = json_decode($api_reqest);

	if(@$api_reqest->status == 'success'){
		header('Location:https://shop.tokoproduktiens.com/thanks');
	}else{
		echo 'Ошибка 1!';
	}
} else {
	echo 'Ошибка 2!';
}

function curl($url, $post = null, $head=0){
	$ch = curl_init($url);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 60);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

	if($head){
		curl_setopt($ch,CURLOPT_HTTPHEADER, $head);
	}else{
		curl_setopt($ch,CURLOPT_HEADER, 0);
	}

	if($post){
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
	}
	$response = curl_exec($ch);
	$header_data = curl_getinfo($ch);
	curl_close($ch);
	return $response;

}