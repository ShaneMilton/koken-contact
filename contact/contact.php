<?php
/* Add you're own email address here!*/
define("WEBMASTER_EMAIL", 'name@email.com');
error_reporting (E_ALL ^ E_NOTICE);
  $name = stripslashes($_POST['name']);
  $email = trim($_POST['email']);
  $message = stripslashes($_POST['message']);
  $subject = stripslashes($_POST['subject']);
  $mail = mail(WEBMASTER_EMAIL, '[Koken] '.$subject, $message,
               "From: ".$name." <".$email.">\r\n"
              ."Reply-To: ".$email."\r\n"
              ."Content-Type: text/html; charset=UTF-8\r\n");
  if ($mail) {
    echo 'Thank You! Your Message Was Sent!';
  }
  else {
    echo 'Please Fill Out The Complete Form.';
  }

?>
