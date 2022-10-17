<?php
 http_response_code(200);
 $Email = $_GET['email'];

 if(!empty($Email) && isset($Email) && 
 preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^",$Email)){
 echo 'Sent';
  
 /*  $to = "news@bimdaygva.ch"; */
 /* $to = "khelf_mohamed@yahoo.fr"; */
 $to = "contact@bimdaygva.ch";

 $subject = "NewsLetter inscription";
 $txt = "NewsLetter inscription \r\n"
 ."Email : ".$Email."\r\n";
 $headers = "For: webmaster@bimdaygva.ch";
     mail($to,$subject,$txt,$headers);
}else echo 'Error';
?>
