 <?php
  
$to = 'support@bsuir.by';
//$to = 'specialist@bsuir.by';

$subject=null;
$userdisc=null;
$marker=null;
$ip=null;
$filter = array("<", ">", "%","&","#","{","}","[","]");

$t1="[CRDO] ";

$eol = "\r\n\r\n";

if ( isset( $_POST['sendMail1'] ) ) $marker="Form1";
if ( isset( $_POST['sendMail2'] ) ) $marker="Form2";
if (isset($_POST['g-recaptcha-response'])){ $captcha=$_POST['g-recaptcha-response'];    }


if(!$captcha)
		{ 
		echo "<script>alert(\"Пожалуйста, проверьте форму ввода капчи.\"); window.history.back();</script>";
        exit;
        }
		
$secretKey = "6LeSkb4dAAAAAD8OjN_y3ZOrkjIk2GlxalhVpGn0";
        
$client  = @$_SERVER['HTTP_CLIENT_IP'];
$forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
$remote  = @$_SERVER['REMOTE_ADDR'];
 
if(filter_var($client, FILTER_VALIDATE_IP)) $ip = $client;
elseif(filter_var($forward, FILTER_VALIDATE_IP)) $ip = $forward;
else $ip = $remote;
		
  $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
  $response = file_get_contents($url);
  $responseKeys = json_decode($response,true);

if($responseKeys["success"]) 

{

if ($marker == null) echo "<script>alert(\"Ошибка получения данных! Сообщение не отправлено.\"); window.history.back();</script>";

else {

    $name  = trim(substr( $_POST['from_name'], 0, 250 )); 
    $email = trim(substr( $_POST['from_email'], 0, 250 ));
	$spam=strripos($email, "email.tst");

	if( !empty($spam)) { echo "Неверный домен электронной почты";  exit;  }

		
	if (isset($_POST['authRadio'])) 
	{
		if ($_POST['authRadio'] == 1) $usertype ="Обучающийся";
		else $usertype ="Сотрудник университета";
	}
	
	$studgrp = trim(substr($_POST['stGroup'], 0, 100 ));
	$studblt = trim(substr($_POST['stBilet'], 0, 100 ));
	
	if (isset($_POST['opt_help'])) 
	{ 
		if ($_POST['opt_help'] == 1) 
		{
				if (($_POST['numRadio'] == 1) && ($_POST['authRadio'] == 1  )) $subject = $t1."Сброс пароля "; 
				else if(($_POST['numRadio'] == 1) && ($_POST['authRadio'] == 2  )) $subject = "[CRDO-empl-password] Восстановление доступа (смена пароля) к СЭО";
				else $subject = $t1."Проблемы с авторизацией"; 
		}	
		else if($_POST['opt_help'] == 2) $subject = $t1."Доступ к материалам дисциплин";
		else if($_POST['opt_help'] == 3) $subject = $t1."Ошибки в учебных материалах";
		else if($_POST['opt_help'] == 4) $subject = $t1."Взаимодействие с преподавателем";
		else if($_POST['opt_help'] == 5) $subject = $t1."Предложения по улучшению";
		else $subject = $t1."Другое";
	}
	
	if (isset($_POST['Check_EOR']) == 1 ) $subject = $t1."Заявка на создание шаблона ЭОР"; 
	if (isset($_POST['eor_f_name'])) $eor_f_name = trim(substr( $_POST['eor_f_name'], 0, 1000 ));
	if (isset($_POST['eor_s_name'])) $eor_s_name = trim(substr( $_POST['eor_s_name'], 0, 200 ));
	if (isset($_POST['eor_step'])) $eor_step = trim(substr( $_POST['eor_step'], 0, 100 ));
	if (isset($_POST['eor_kaf'])) $eor_kaf = trim(substr( $_POST['eor_kaf'], 0, 500 ));
	if (isset($_POST['eor_author'])) $eor_author = trim(substr( $_POST['eor_author'], 0, 10000 ));
	
	
	if (isset($_POST['opt_help1'])) 
	{ 
		if ($_POST['opt_help1'] == 1)$subject = $t1."Продолжение обучения"; 
		else if($_POST['opt_help1'] == 2) $subject = $t1."Дополнительное обучение";
		else  $subject = $t1."Ликвидация расхождения в учебных планах";
	}
	if ( isset( $_POST['ddate'] ) ) $ddate = trim(substr($_POST['ddate'], 0, 50 ));
	else $ddate=null;
	
	if ( isset( $_POST['pass1'] ) ) $password1 = trim(substr($_POST['pass1'], 0, 250 ));
	else $password1=null;
		if ( isset( $_POST['pass2'] ) ) $password2 = trim(substr($_POST['pass2'], 0, 50 ));
	else $password2=null;
	
	$agreement = isset($_POST['agreement']) ? "Подтверждено" : "НЕТ";
	
	if (isset($_POST['mess'])) $message = trim(substr( $_POST['mess'], 0, 20000 ));
	if (isset($_POST['course']))$namecourse = trim(substr( $_POST['course'], 0, 10000 )); 
    if (isset($_POST['cost']))$curcost = trim(substr( $_POST['cost'], 0, 10000 ));  	
	
	if (isset($_POST['disc1'])) { if ($userdisc==null){ $userdisc.="АСОИ"; } else {$userdisc.=", АСОИ";} }
	if (isset($_POST['disc2'])) { if ($userdisc==null){ $userdisc .="ИПОИТ";} else {$userdisc.=", ИПОИТ";} }
	if (isset($_POST['disc3'])) { if ($userdisc==null){ $userdisc .="ИСиТ (БМ)" ;} else {$userdisc.=", ИСиТ (БМ)";} }
	if (isset($_POST['disc4'])) { if ($userdisc==null){ $userdisc .="ИСиТ (ОПБ)";} else {$userdisc.=", ИСиТ (ОПБ)";} }
	if (isset($_POST['disc5'])) { if ($userdisc==null){ $userdisc .="ИСиТ (Э)";} else {$userdisc.=", ИСиТ (Э)";} }
	if (isset($_POST['disc6'])) { if ($userdisc==null){ $userdisc .="ИиТП";} else {$userdisc.=", ИиТП";} }
	if (isset($_POST['disc7'])) { if ($userdisc==null){ $userdisc .="ПМС";} else {$userdisc.=", ПМС";} }
	if (isset($_POST['disc8'])) { if ($userdisc==null){ $userdisc .="ПОИТ";} else {$userdisc.=", ПОИТ";} }
	if (isset($_POST['disc9'])) { if ($userdisc==null){ $userdisc .="ЭМ";} else {$userdisc.=", ЭМ";} }
	if (isset($_POST['disc0'])) { if ($userdisc==null){ $userdisc .="ЭЭБ"; } else {$userdisc.=", ЭЭБ";} }	
	
	if ( isset( $_POST['authRadio2'] ) ) 
	{ 
		if ($_POST['authRadio2'] == 1) $dtype ="Квитанции об оплате";
		else $dtype ="Квитанция не требуется";
	}
	
	
	
  if ( !empty( $_FILES['xfile']['tmp_name'] ) and $_FILES['xfile']['error'] == 0 ) 
  {
    $filepath = $_FILES['xfile']['tmp_name'];
    $filename = $_FILES['xfile']['name'];
  } 
  else {      $filepath = null;   $filename = null;  }

	$body  = "Ф.И.О:\t".str_replace ($filter, "|", $name).$eol;	
	$body .= "Согласие на обработку ПД: ".$agreement.$eol;
	$body .= "Email:\t".str_replace ($filter, "|", $email).$eol;
	if (!empty($usertype))$body .= "Роль:\t".$usertype.$eol;	
	
	if (!empty($eor_f_name) ) $body .= "Полное название дисциплины:\t".str_replace ($filter, "|", $eor_f_name).$eol;
	if (!empty($eor_s_name)) $body .= "Сокращённое название дисциплины:\t".str_replace ($filter, "|", $eor_s_name).$eol;
	if (!empty($eor_step)) $body .= "Ступень обучения:\t".str_replace ($filter, "|", $eor_step).$eol;
	if (!empty($eor_kaf)) $body .= "Подразделение:\t".str_replace ($filter, "|", $eor_kaf).$eol;
	if (!empty($eor_author)) $body .= "ФИО разработчиков / наличие учетных записей в СЭО:".$eol.str_replace ($filter, "|", $eor_author).$eol;
	if ($studgrp != null) $body .= "Учебная группа:\t".str_replace ($filter, "|", $studgrp).$eol;
	if ($studblt != null) $body .= "Номер студенческого билета:\t".str_replace ($filter, "|", $studblt).$eol;
	if ($password1 != null) $body .= "Подразделение:\t".str_replace ($filter, "|", $password1).$eol;
	if ($password2 != null) $body .= "Рабочий номер телефона:\t".str_replace ($filter, "|", $password2)."\r\n".$eol;
    if ($ddate != null) $body .= "Дата окончания действия договора:\t".$ddate.$eol;
    if ($userdisc != null) $body .= "Специальность, указанная в договоре:\t".str_replace ($filter, "|", $userdisc).$eol;
	if (!empty($namecourse)) $body .= "Необходимые дисциплины:".$eol.str_replace ($filter, "|", $namecourse).$eol;
	if (!empty($dtype)) $body .= "Доступ на основании:\t".str_replace ($filter, "|", $dtype).$eol;
	if (!empty($curcost)) $body .= "Причина:".$eol.str_replace ($filter, "|", $curcost).$eol;
    if (!empty($message)) $body .= "Описание проблемы:".$eol.str_replace ($filter, "|", $message).$eol;
    if (!empty($ip)) $body .= $marker." IP адрес: ".$ip;


	$name = "=?UTF-8?B?".base64_encode(str_replace ($filter, "|", $name))."?=";
	$subject = "=?UTF-8?B?".base64_encode($subject)."?=";
	  
	  $boundary = "--".md5(uniqid(time())); 
	  $headers = "From: $name <$email>\r\n";
	  $headers .= "MIME-Version: 1.0\r\n";
	  $multipart = "--".$boundary."\r\n";
	  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
	  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

	  $body = $body.$eol;	 
	  $multipart .= $body;  
  	  
  if ( empty( $filepath ) and empty( $filename )  )  
  {
	  $headers .="Content-type: multipart/alternative; boundary=\"".$boundary."\"\r\n";
  }
  else 
  {
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
   
  $file = null;
  
  if ( !empty( $filepath ) ) 
  {
    $fp = fopen($filepath, "r");
    if ( $fp ) 
	{
      $content = fread($fp, filesize($filepath));
      fclose($fp);
      $file .= "--".$boundary."\r\n";
      $file .= "Content-Type: application/octet-stream\r\n";
      $file .= "Content-Transfer-Encoding: base64\r\n";
      $file .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
      $file .= chunk_split(base64_encode($content))."\r\n";
    }
  }  
  
  $multipart .= $file."--".$boundary."--\r\n";	
  
  }
  
		if (  mail($to, $subject, $multipart, $headers))  
		{
			if (isset($filepath)) unlink($filepath); 		
			echo "<script>alert(\"Сообщение отправлено успешно.\");window.history.go(-2);</script>";
		}
		else 
		{
		if (isset($filepath))unlink($filepath); 	
	    echo "<script>alert(\"Ошибка отправки сообщения! Попробуйте ещё раз.\"); window.history.back();</script>";
		}
}    	
				
}
else 
{
	echo 'Hack Attack';exit; 
}
 
?>