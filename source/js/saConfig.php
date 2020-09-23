<?php
// Smart Ajax Configuration File

// Parameters
// List of types:
// all : Everything and anything
// telephone : Telephone number
// number : Integer
// float : Fractional number
// notempty : Everything and anything, but not empty
// email : Email
$VALUES = array(
    "name" => "notempty",
    "tel" => "notempty",
    "formName" => "notempty",
);
$HTML = 'Имя: %name%<br/> 
Телефон: %tel%<br/> 
Форма: %formName%<br/> 
';

// Recipients
// Supports one or more recipient separated by comma
$to = "pozharskaya@elcode.ru,
zolotova@elcode.ru,
holin@elcode.ru,
ignatov@elcode.ru,
kazyukin@elcode.ru,
volnukhina@elcode.ru
";

// Subject of mail
$subject = "Заявка с лендинга Консультант Плюс";

// Success message
// If set to "", script will return empty response
$successMessage = "<header class='modal-success_header'>Спасибо! Ваша заявка принята.</header><p class='modal-success_text'>Мы свяжемся с вами в ближайшее время.</p>";

// Fail message
// If set to "", script will return json error response
$failMessage = "<header class='modal-success_header'>Ошибка!</header><p class='modal-success_text'>Перезагрузите страницу.</p>";

?>