function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnclose = document.querySelector(".close"); // Selection element span pour fermeture modal

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture modal
modalBtnclose.addEventListener("click", function(){
  modalbg.style.display = "none";
});

// Validation de formulaire - sans l'attribut novalidate dans la balise form
function validate(){
const isValidFirstName = document.getElementById("first").checkValidity();
const isValidLastName = document.getElementById("last").checkValidity();
const isValidEmail = document.getElementById("email").checkValidity();
const isValidTournament = document.getElementById("quantity").checkValidity();
const isValidLocation = document.getElementsByName("location").checkValidity();
const isValidConditions = document.getElementById("checkbox1").checkValidity();

  // Validation globale 
  if (isValidFirstName && isValidLastName && isValidEmail 
    && isValidTournament && isValidLocation && isValidConditions){
    return true;
  }

 return false; // stop la soumission du formulaire et empêche ainsi un nouveau chargement de page
}