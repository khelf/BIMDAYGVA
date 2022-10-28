<?php
 $Entreprise =$_GET['entreprise'];
 $Firstname= $_GET['firstname'];
 $Lastname= $_GET['lastname'];
 $Email = $_GET['email'];
 $Phone = $_GET['phone'];
 $Taille = $_GET['taille'];
 $Objectifs = $_GET['objectifs'];
 $Newsletter = $_GET['newsletter'];

 $IP_Adress = $_SERVER['REMOTE_ADDR'];

// var_dump($_GET);

 if(!empty($Entreprise) && !empty($Firstname) && !empty($Lastname) 
 && !empty($Email) && !empty($Phone) && !empty($Taille) && !empty($Objectifs) && 
isset($Entreprise) && isset($Firstname) && isset($Lastname) && isset($Email) &&     
isset($Phone) && isset($Taille) && isset($Objectifs) && preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^",$Email)){
 echo 'Sent';
 
  $to = "maxime@bimdaygva.ch; audrey@bimdaygva.ch";
  $to = "khelf_mohamed@yahoo.fr"; 

 $subject = "Formulaire de participation au BIM DAY GVA";
 $txt = "Bonjour vous avez reçu un message depuis votre formulaire de participation au BIM DAY GVA \r\n"
 ."Email : ".$Email."\r\n"
 ."Entreprise: ".$Entreprise."\r\n"."Nom: ".$Lastname."\r\n"."Prénom: ".$Firstname."\r\n"."Téléphone: ".$Phone."\r\n"."Taille de l'entreprise: ".$Taille."\r\n"."Objectifs: ".$Objectifs."\r\n";
 $headers = "For: webmaster@bimdaygva.ch";
     mail($to,$subject,$txt,$headers);
}else echo 'Error';

if(!empty($Newsletter) && ($Newsletter == "true") &&
isset($Newsletter) &&
 !empty($Email) &&
  isset($Email) && 
  preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^",$Email)){
    // $to = "contact@bimdaygva.ch";
    $to = "khelf_mohamed@yahoo.fr";
    $subject = "NewsLetter inscription";
    $txt = "NewsLetter inscription \r\n"
    ."Email : ".$Email."\r\n";
    $headers = "For: webmaster@bimdaygva.ch";
        mail($to,$subject,$txt,$headers);
}

?>
