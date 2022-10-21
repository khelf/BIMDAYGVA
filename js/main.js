(function ($) {
  "use strict";

  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    var wScroll = $(this).scrollTop();
    if (scroll > 100) {
      $("#navbar").removeClass("bg-transparent").css("background-color", "#020d1f");
    } else {
      $("#navbar").addClass("bg-transparent")
    }
    if (scroll < 400) {
      $('#back-top').fadeIn(500);
    } else {
      $('#back-top').fadeIn(500);
    }
    // Back To Top Appear
    wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
  });

  if ($(window).width() < 992) {
    $("#logo").css("width", "60px")
  }

  $(document).ready(function () {

    $('#back-to-top').on('click', function () {
      $('body,html').animate({
        scrollTop: 0
      }, 600);
    });
  });

  $(".navbar-toggler").click(function () {
    $('body').toggleClass('modal-open');
  });
})(jQuery);

/* Newsletter */
function subscribetonewsletter() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState == 4) {
      if (!(this.response).includes("Error")) {
        document.getElementById("newsletter_email").value = "";
        document.getElementById("_subscribetonewsletterstatus").innerHTML = "Merci de vous êtes inscrit à notre newsletter.";
      } else { document.getElementById("_subscribetonewsletterstatus").innerHTML = "Veuillez vérifier vos informations"; }
    }
  };
  xhttp.timeout = 5000;
  xhttp.ontimeout = function () {
    document.getElementById("_subscribetonewsletterstatus").innerHTML = "Veuillez réessayer ou vérfier votre connexion";
  };
  document.getElementById("_subscribetonewsletterstatus").innerHTML = "Envoi en cours...";
  var email = document.getElementById("newsletter_email").value;
  var state = false;
  state = validateEmail(email);
  if (state) {
    var url = "newsletter.php?&email=" + encodeURIComponent(email);
    xhttp.open("GET", url, true);
    xhttp.send();
  } else {
    document.getElementById("_subscribetonewsletterstatus").innerHTML = "Veuillez vérifier vos informations";
  }

}
/* Devenir exposant */
function devenirexposant() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState == 4) {
      if (!(this.response).includes("Error")) {
        document.getElementById("exposant_email").value = "";
        document.getElementById("_devenirexposantstatus").innerHTML = "Merci de vous êtes inscrit pour devenir exposant.";
      } else { document.getElementById("_devenirexposantstatus").innerHTML = "Veuillez vérifier vos informations"; }
    }
  };
  xhttp.timeout = 5000;
  xhttp.ontimeout = function () {
    document.getElementById("_devenirexposantstatus").innerHTML = "Veuillez réessayer ou vérfier votre connexion";
  };
  document.getElementById("_devenirexposantstatus").innerHTML = "Envoi en cours...";
  var email = document.getElementById("exposant_email").value;
  var state = false;
  state = validateEmail(email);
  if (state) {
    var url = "exposant.php?&email=" + encodeURIComponent(email);
    xhttp.open("GET", url, true);
    xhttp.send();
  } else {
    document.getElementById("_devenirexposantstatus").innerHTML = "Veuillez vérifier vos informations";
  }

}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}