function sendform() {
  console.log("sending...")
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (!(this.response).includes("Error")) {
        document.getElementById("form_entreprise").value = "";
        document.getElementById("form_firstname").value = "";
        document.getElementById("form_lastname").value = "";
        document.getElementById("form_email").value = "";
        document.getElementById("form_phone").value = "";
        document.getElementById("objectif1").checked = false;
        document.getElementById("objectif2").checked = false;
        document.getElementById("objectif3").checked = false;
        document.getElementById("objectif4").checked = false;
        document.getElementById("terms").checked = false;
        document.getElementById("optin").checked = false;
        document.querySelector(".select-selected").innerHTML = "TAILLE DE L'ENTREPRISE: ";
        document.getElementById("_sendformstatus").innerHTML = "Nous avons reçu votre requete, merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.";
        document.getElementById("_sendform").disabled = true;
      } else { document.getElementById("_sendformstatus").innerHTML = "Veuillez vérifier vos informations."; }
      document.getElementById("_sendform").disabled = true;
    }
  };
  xhttp.timeout = 5000;
  xhttp.ontimeout = function () {
    document.getElementById("_sendformstatus").innerHTML = "Veuillez réessayer ou vérifier votre connexion.";
    document.getElementById("_sendform").disabled = true;
  };
  document.getElementById("_sendformstatus").innerHTML = "Envoi en cours...";
  var entreprise = document.getElementById("form_entreprise").value;
  var taille = document.getElementById("form_taille_entreprise").value;
  var firstname = document.getElementById("form_firstname").value;
  var lastname = document.getElementById("form_lastname").value;
  var email = document.getElementById("form_email").value;
  var phone = document.getElementById("form_phone").value;
  var newsletter = document.getElementById("optin").checked;
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
    document.getElementById("_sendform").style.background = "#319e6e";
    var url = "formulaire.php?entreprise=" + encodeURIComponent(entreprise) + "&taille=" + encodeURIComponent(taille) + "&firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone) + "&objectifs=" + encodeURIComponent(objectifs) + "&newsletter=" + encodeURIComponent(newsletter);
    xhttp.open("GET", url, true);
    xhttp.send();
    document.getElementById("_sendform").disabled = true;
  } else {
    document.getElementById("_sendformstatus").innerHTML = "Veuillez vérifier vos informations.";
    document.getElementById("_sendform").disabled = true;
  }
}

function _validateForm() {
  if (document.getElementById("form_entreprise").value == "") return false;
  if (document.getElementById("form_firstname").value == "") return false;
  if (document.getElementById("form_lastname").value == "") return false;
  if (document.getElementById("form_phone").value == "") return false;

  var email = document.getElementById("form_email").value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateForm() {
  console.log("validating...")
  var valid = true;
  valid &= document.getElementById("form_entreprise").value !== "";
  valid &= document.getElementById("form_firstname").value !== "";
  valid &= document.getElementById("form_lastname").value !== "";
  valid &= document.getElementById("form_phone").value !== "";
  var objectif1 = document.getElementById("objectif1").checked;
  var objectif2 = document.getElementById("objectif2").checked;
  var objectif3 = document.getElementById("objectif3").checked;
  var objectif4 = document.getElementById("objectif4").checked;
  var taille = document.getElementById("form_taille_entreprise").value;
  var terms = document.getElementById("terms").checked;

  valid &= (objectif1 || objectif2 || objectif3 || objectif4) && !!taille && terms;
  document.getElementById("_sendform").disabled = !valid;
  return valid
}