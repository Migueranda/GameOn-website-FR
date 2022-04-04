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
const form = document.querySelector("form");
const messageSubmit = document.getElementById("message_submit");

//selection des champs des formulaire
const eltFirstName = document.getElementById("first");
const eltLastName = document.getElementById("last");
const eltEmail = document.getElementById("email");
const eltNombreTournois = document.getElementById("quantity");
const eltsTournoisLocation = document.getElementsByName("location");
const eltConditionUtilisation = document.getElementById("checkbox1");

// Selection des element pour afficher les messages d'erreurs
const formDataLocationTournois = document.getElementById("form-data-locationtournois");//Form  type "radio" location des tournois
const formDataFirst = document.getElementById("form-data-first"); //Form type "input" lastname(prenom)
const formDataLast = document.getElementById("form-data-last"); // Form type "input" firstname(nom)
const formDataEmail = document.getElementById("form-data-email");//Form type "email"
const formDataNombreTournois = document.getElementById("form-data-nombretournois");//Form type "number"
const formConditionUtilisation = document.getElementById("form-data-condition-utilisation");// Form type "checkbox" 

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

// -------AFFICHAGE MESSAGE D'ERREURS----------------------------------------------------
//  -------CHAMP PRENOM------------------------------------------------------------------ 

 eltFirstName.addEventListener("input", function(event){    
  if (event.target.value.length < 2){     
    formDataFirst.setAttribute("data-error-visible", "true");    
  } else{    
    formDataFirst.setAttribute("data-error-visible", "false");
  }
 });

//  ----------------------------------------------------------------------------------------
//  --------------CHAMP NOM----------------------------------------------------------------
 eltLastName.addEventListener("input", function(event){    
  if (event.target.value.length < 2){     
    formDataLast.setAttribute("data-error-visible", "true");    
  } else{    
    formDataLast.setAttribute("data-error-visible", "false");
  }
 });

 //  ---------------------------------------------------------------------------------------
//  --------------CHAPMS EMAIL--------------------------------------------------------------
eltEmail.addEventListener("input", function(event){  
  let regexEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); 
  if (regexEmail.test(event.target.value)){     
    formDataEmail.setAttribute("data-error-visible", "false");     
  } else{    
    formDataEmail.setAttribute("data-error-visible", "true");   
  }
 });
 
 //  ---------------------------------------------------------------------------------------
//  --------------NOMBRE DE TOURNOIS -------------------------------------------------------
eltNombreTournois.addEventListener("input", function(event){     
  if (isNaN(event.target.value)){  
    console.log('NaN not est number');   
    formDataNombreTournois.setAttribute("data-error-visible", "true");    
  } else{    
    formDataNombreTournois.setAttribute("data-error-visible", "false");
    console.log('NaN is a number'); 
  }
 });

 //  ----------------------------------------------------------------------------------------
//  --------------CHAMP SELECTION TOURNOIS --------------------------------------------------
for (let eltTournoisLocation of eltsTournoisLocation){
  eltTournoisLocation.addEventListener("click", function(event){
    formDataLocationTournois.setAttribute("data-error-visible", "false");
  });
}

//-------------------------------------------------------------------------------------------
//--------------------CHAMPS CONDITIONS D'UTILISATION----------------------------------------
 eltConditionUtilisation.addEventListener("click", function(event){  
    if (event.target.checked){
      console.log("cond util checked");
      formConditionUtilisation.setAttribute("data-error-visible", "false");
          
    } else{    
      console.log("cond util UNchecked");
    formConditionUtilisation.setAttribute("data-error-visible", "true");
    }
  });

const buttonSubmit = document.querySelector(".btn-submit");
  buttonSubmit.addEventListener("click", function(event){

    // champs input FirstName(Prenom)      
    if(eltFirstName.value.length == 0){
      console.log("je passe")
      formDataFirst.setAttribute("data-error-visible", "true");      
    }

    // champs input LastName(Nom)  
    if(eltLastName.value.length == 0){
      formDataLast.setAttribute("data-error-visible", "true");
    }
    //Chapms input email
    if(eltEmail.value.length == 0){
      formDataEmail.setAttribute("data-error-visible", "true");
    }
    //Chapms number nombre de tournois
    if(eltNombreTournois.value.length == 0){
      formDataNombreTournois.setAttribute("data-error-visible", "true");
    }  

  // Champs location tournois
  //Boucle "for" pour faire appel à chaque element "radio" et verifie si une ville du tournois(location) à été choisi
  let locationTournois = false;
  for (let eltTournoisLocation of eltsTournoisLocation){
    if (eltTournoisLocation.checked){ // tournois selectionné  
      locationTournois = true;     
    }
  }

  if(!locationTournois){// si la variable location tournois n'est pas "true" afficher un message d'erreur.
    formDataLocationTournois.setAttribute("data-error-visible", "true");    
  }else{
    formDataLocationTournois.setAttribute("data-error-visible", "false");
  } 

  const messageErreurSubmit = document.querySelectorAll("[data-error-visible='true']"); 

  if (messageErreurSubmit.length > 0){//si l'attribut "data-error-visible='true" est superieru à 1 l'evenement preventDefault empêche 
  //la soumission de la page
    console.log("prevent default")
    event.preventDefault();
  }  
});

// ================VALIDATION DU FORMULAIRE AVEC UN MESSAGE PERSONALISE==============================
function validate(event){
  messageSubmit.textContent = 'Merci ' + event.target[0].value  + ' ! Votre réservation a été reçue ';
  messageSubmit.style.display = "block"; 
  modalbg.style.display = "none";
  event.preventDefault();
  console.log("validate");
}