<?php
	// if ($_POST["tel"]) {
		$separator = md5(time());
		$eol = PHP_EOL;

		//mail
		$to = "a.makarova@elcode.ru,lead@elcode.ru,kazarina@elcode.ru,nischuk@elcode.ru,kuzmin@eltechn.ru,kazyukin@elcode.ru";
        //$to = "rollandgor@gmail.com";

		$subject = "Заявка с лендинга Обучение Госзакупкам";

        $header .= "Content-type: text/plain; charset=\"utf-8\"";
        $header .= "From: Zakup".$eol;
        $header .= "MIME-Version: 1.0".$eol;

        $message = '';

		if ($_POST['name']) { $message .= "Имя: " . $_POST['name'] . "\r\n"; }
		if ($_POST['tel']) { $message .= "Телефон: " . $_POST['tel'] . "\r\n"; }
		if ($_POST['mail']) { $message .= "Почта: " . $_POST['mail'] . "\r\n"; }
		if ($_POST['message']) { $message .= "Вопрос: " . $_POST['message'] . "\r\n"; }
		if ($_POST['formName']) { $message .= "Форма: " . $_POST['formName'] . "\r\n"; }

		if ($_POST['calcOption1']) { $message .= "Глубина: " . $_POST['calcOption1'] . "\r\n"; }
		if ($_POST['calcOption2']) { $message .= "Ширина: " . $_POST['calcOption2'] . "\r\n"; }
		if ($_POST['calcOption3']) { $message .= "Высота потолка: " . $_POST['calcOption3'] . "\r\n"; }
		if ($_POST['calcOption4']) { $message .= "С отделкой: " . $_POST['calcOption4'] . "\r\n"; }
		if ($_POST['calcOption5']) { $message .= "Душевая система: " . $_POST['calcOption5'] . "\r\n"; }
		if ($_POST['calcOption6']) { $message .= "Звездное небо: " . $_POST['calcOption6'] . "\r\n"; }
		if ($_POST['calcOption7']) { $message .= "Стеклянный фронт: " . $_POST['calcOption7'] . "\r\n"; }
 
		$message .=  "---------------------------------"  . "\r\n";
		//yandex
		if ($_POST["utm_source"]) { $message .= "Источник: " . $_POST["utm_source"] . "\r\n"; }
		if ($_POST["utm_medium"]) { $message .= "Канал: " . $_POST["utm_medium"] . "\r\n" ; }
		if ($_POST["utm_campaign"]) { $message .= "Название: " . $_POST["utm_campaign"] . "\r\n"; }
		if ($_POST["type"]) { $message .= "Тип площадки: " . $_POST["type"] . "\r\n"; }
		if ($_POST["source"]) { $message .= "Название площадки РСЯ: " . $_POST["source"] . "\r\n"; }
		if ($_POST["added"]) { $message .= "Инициирован ли этот показ: " . $_POST["added"] . "\r\n"; }
		if ($_POST["block"]) { $message .= "Тип блока: " . $_POST["block"] . "\r\n"; }
		if ($_POST["pos"]) { $message .= "Позиция в блоке: " . $_POST["pos"] . "\r\n"; }
		if ($_POST["key"]) { $message .= "Ключевая фраза: " . $_POST["key"] . "\r\n"; }
		if ($_POST["campaign"]) { $message .= "Номер (ID) кампании: " . $_POST["campaign"] . "\r\n"; }
		if ($_POST["ad"]) { $message .= "Номер (ID) объявления: " . $_POST["ad"] . "\r\n"; }
		if ($_POST["phrase"]) { $message .= "Номер (ID) ключевой фразы: " . $_POST["phrase"] . "\r\n"; }
 
		//google
		if ($_POST["utm_term"]) { $message .= "Ключевое слово: " . $_POST["utm_term"] . "\r\n"; }
		if ($_POST["utm_content"]) { $message .= "Содержание кампании: " . $_POST["utm_content"] . "\r\n"; }
		if ($_POST["network"]) { $message .= "Тип площадки: " . $_POST["network"] . "\r\n"; }
		if ($_POST["placement"]) { $message .= "Адрес площадки: " . $_POST["placement"] . "\r\n"; }
		if ($_POST["keyword"]) { $message .= "Ключевое слово: " . $_POST["keyword"] . "\r\n"; }


        if(!empty($_FILES['file']['tmp_name'])) {
            $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file']['tmp_name'])));
            $filename = $_FILES['file']['name'];
            $filetype = $_FILES['file']['type'];
            $un = strtoupper(uniqid(time()));
            $body = "------------".$un."\r\nContent-Type: text/html; charset='utf-8'\r\nContent-Transfer-Encoding: 8bit\r\n\r\n".nl2br($message)."\r\n------------".$un."\r\nContent-Type: application/octet-stream;name=\"$filename\"\r\nContent-Transfer-Encoding:base64\r\nContent-Disposition:attachment;filename=".$filename."\r\n\r\n".$attachment."\r\n";
            $headers = "From: New_PressV\r\nReply-To: New_PressV\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"----------".$un."\"\r\n";
            $send = mail($to, $subject, $body, $headers);

        }else {
            $send = mail($to, $subject, $message, $header);
        }
		// $send1 = mail($to1, $subject, $message, $header);
		// $send2 = mail($to2, $subject, $message, $header);

		if ($send) {
		// if ($send1 and $send2) {
			echo "<header class='modal-success_header'>Спасибо! Ваша заявка принята.</header><p class='modal-success_text'>Мы свяжемся с вами в ближайшее время.</p>";
		} else {
			echo "<header class='modal-success_header'>Ошибка!</header><p class='modal-success_text'>Перезагрузите страницу.</p>";
		}

	// }
?>