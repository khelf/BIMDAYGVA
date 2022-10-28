function sendform() {
  console.log("sending...")
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (!(this.response).includes("Error")) {
        //document.getElementById("form_category").value;
        document.getElementById("form_entreprise").value = "";
        document.getElementById("form_firstname").value = "";
        document.getElementById("form_lastname").value = "";
        document.getElementById("form_email").value = "";
        document.getElementById("form_phone").value = "";
        document.getElementById("objectif1").checked = false;
        document.getElementById("objectif2").checked = false;
        document.getElementById("objectif3").checked = false;
        document.getElementById("objectif4").checked = false;
        document.getElementById("form_taille_entreprise").value = "";
        document.getElementById("_sendformstatus").innerHTML = "Nous avons reçu votre requete, merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.";
      } else { document.getElementById("_sendformstatus").innerHTML = "veuillez vérifier vos informations"; }
      document.getElementById("_sendform").disabled = false;
    }
  };
  xhttp.timeout = 5000;
  xhttp.ontimeout = function () {
    document.getElementById("_sendformstatus").innerHTML = "Veuillez réessayer ou vérifier votre connexion";
    document.getElementById("_sendform").disabled = false;
  };
  document.getElementById("_sendformstatus").innerHTML = "Envoi en cours...";
  var entreprise = document.getElementById("form_entreprise").value;
  var taille = document.getElementById("form_taille_entreprise").value;
  var firstname = document.getElementById("form_firstname").value;
  var lastname = document.getElementById("form_lastname").value;
  var email = document.getElementById("form_email").value;
  var phone = document.getElementById("form_phone").value;
  var _objectifs = [];
  if (document.getElementById("objectif1").checked) _objectifs.push("Apporter de la visibilité à votre service/produit");
  if (document.getElementById("objectif2").checked) _objectifs.push("Assurer le développement de votre entreprise");
  if (document.getElementById("objectif3").checked) _objectifs.push("Renforcer votre image d'expert");
  if (document.getElementById("objectif4").checked) _objectifs.push("S'exprimer sur vos réalisationss d'envergures");
var objectifs = _objectifs.join(', ');
console.log("objectifs", _objectifs)
  var state = false;
  state = validateForm();
  if (state) {
    document.getElementById("_sendform").style.background = "#888888";
    var url = "formulaire.php?entreprise=" + encodeURIComponent(entreprise) + "&taille=" + encodeURIComponent(taille) + "&firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone) + "&objectifs=" + encodeURIComponent(objectifs);
    document.getElementById("_sendform").disabled = true;
    xhttp.open("GET", url, true);
    xhttp.send();
  } else {
    document.getElementById("_sendformstatus").innerHTML = "Veuillez vérifier vos informations";
  }


}

function _validateForm() {
  if (document.getElementById("form_entreprise").value == "") return false;
  if (document.getElementById("form_firstname").value == "") return false;
  if (document.getElementById("form_lastname").value == "") return false;
  if (document.getElementById("form_phone").value == "") return false;
  if (document.getElementById("form_taille_entreprise").value == "") return false;

  var email = document.getElementById("form_email").value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateForm () {
  console.log("validating...")
  var valid = true;
  console.log("valid", valid)
  valid &= document.getElementById("form_entreprise").value !== "";
  console.log("valid", valid)

  valid &= document.getElementById("form_firstname").value !== "";
  valid &= document.getElementById("form_lastname").value !== "";
  valid &= document.getElementById("form_phone").value !== "";
  var objectif1 = document.getElementById("objectif1").checked;
  var objectif2 = document.getElementById("objectif2").checked;
  var objectif3 = document.getElementById("objectif3").checked;
  var objectif4 = document.getElementById("objectif4").checked;
  var taille = document.getElementById("form_taille_entreprise").value;
  valid &= (objectif1 || objectif2 || objectif3 || objectif4) && !!taille;
  document.getElementById("_sendform").disabled = !valid;
  return valid
}