<?php
 $Category =$_GET['category'];
 $Firstname= $_GET['firstname'];
 $Lastname= $_GET['lastname'];
 $Email = $_GET['email'];
 $Message = $_GET['message'];
 $IP_Adress = $_SERVER['REMOTE_ADDR'];

 if(!empty($Category) && !empty($Firstname) && !empty($Lastname) 
 && !empty($Email) && !empty($Message) &&
isset($Category) && isset($Firstname) && isset($Lastname) && isset($Email) &&     
isset($Message) && preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^",$Email)){
 echo 'Sent';
 
 /* $to = "khelf_mohamed@yahoo.fr"; */
 $to = "maxime@bimdaygva.ch";
 if(strcmp($Category, "Partenaire") == 0 || strcmp($Category, "Exposant") == 0){
    $to = "maxime@bimdaygva.ch";
    $to = "audrey@bimdaygva.ch";
  /* $to="khelf_mohamed@yahoo.fr"; */
 }                                      
 $subject = "Formulaire de contact (site)";
 $txt = "Bonjour vous avez reçu un message depuis votre formulaire de contact \r\n"
 ."Email : ".$Email."\r\n"
 ."Catégorie: ".$Category."\r\n"."Nom: ".$Lastname."\r\n"."Prénom: ".$Firstname."\r\n"."Message: ".$Message."\r\n";
 $headers = "For: webmaster@bimdaygva.ch";
     mail($to,$subject,$txt,$headers);
}else echo 'Error';
?>
