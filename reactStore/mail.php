<?php

  $key = $_POST['firstName'];

  echo $key;

  $to = "somebody@example.com";
  $subject = "My subject";
  $txt = "Hello world!";
  $headers = "From: webmaster@example.com" . "\r\n" .
  "CC: somebodyelse@example.com";

  mail($to,$subject,$txt,$headers);
?>