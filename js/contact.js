function sendmessage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (!(this.response).includes("Error")) {
        //document.getElementById("form_category").value;
        document.getElementById("form_firstname").value = "";
        document.getElementById("form_lastname").value = "";
        document.getElementById("form_email").value = "";
        document.getElementById("form_message").value = "";
        document.getElementById("_sendmessagestatus").innerHTML = "Nous avons reçu votre message, merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.";
      } else { document.getElementById("_sendmessagestatus").innerHTML = "veuillez vérifier vos informations"; }
      document.getElementById("_sendmessage").disabled = false;
    }
  };
  xhttp.timeout = 5000;
  xhttp.ontimeout = function () {
    document.getElementById("_sendmessagestatus").innerHTML = "Veuillez réessayer ou vérifier votre connexion";
    document.getElementById("_sendmessage").disabled = false;
  };
  document.getElementById("_sendmessagestatus").innerHTML = "Envoi en cours...";
  var category = document.getElementById("form_category").value;
  var firstname = document.getElementById("form_firstname").value;
  var lastname = document.getElementById("form_lastname").value;
  var email = document.getElementById("form_email").value;
  var message = document.getElementById("form_message").value;
  var state = false;
  state = validateForm();
  if (state) {
    document.getElementById("_sendmessage").style.background = "#888888";
    var url = "contactus.php?category=" + encodeURIComponent(category) + "&firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
    document.getElementById("_sendmessage").disabled = true;
    xhttp.open("GET", url, true);
    xhttp.send();
  } else {
    document.getElementById("_sendmessagestatus").innerHTML = "Veuillez vérifier vos informations";
  }


}

function validateForm() {
  if (document.getElementById("form_firstname").value == "") return false;
  if (document.getElementById("form_lastname").value == "") return false;
  if (document.getElementById("form_message").value == "") return false;
  var email = document.getElementById("form_email").value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}