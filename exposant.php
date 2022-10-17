<?php
 http_response_code(200);
 $Email = $_GET['email'];

 if(!empty($Email) && isset($Email) && 
 preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^",$Email)){
 echo 'Sent';
  
 $to="audrey@bimdaygva.ch";
 /* $to = "khelf_mohamed@yahoo.fr"; */

 $subject = "Exposant inscription";
 $txt = "Exposant inscription \r\n"
 ."Email : ".$Email."\r\n";
 $headers = "For: webmaster@bimdaygva.ch";
     mail($to,$subject,$txt,$headers);
}else echo 'Error';
?>
