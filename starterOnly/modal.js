function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function isDateValid(dateStr){
  // utilisation de la fonction standard JavaScript pour valider une date
  // En sortie du champ input type=date la date arrive sous format ISO YYYY-MM-DD
  if (isNaN(Date.parse(dateStr))){ // si isNaN => return False
    console.log("BirthDate : Date NaN pas OK");
    return false;
  } else {
    console.log("BirthDate : Date OK");
    return true;
  }
}

//================VALIDATION DU FORMULAIRE AVEC UN MESSAGE PERSONALISE==============================
function validate(name){
  messageSubmit.textContent = 'Merci ' + name  + ' ! Votre réservation a été reçue ';//Message personalisé
  messageSubmit.style.display = "block"; 
  modalbg.style.display = "none";  
  console.log("validate");
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
const eltDateNaissance = document.getElementById("birthdate");

// Selection des element pour afficher les messages d'erreurs
const formDataLocationTournois = document.getElementById("form-data-locationtournois");
const formDataFirst = document.getElementById("form-data-first"); 
const formDataLast = document.getElementById("form-data-last"); 
const formDataEmail = document.getElementById("form-data-email");
const formDataNombreTournois = document.getElementById("form-data-nombretournois");
const formConditionUtilisation = document.getElementById("form-data-condition-utilisation");// Form type "checkbox" 
const formDataDateNaissance = document.getElementById("form-data-datenaissance");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function launchModal() {//Declaration de la fonction "launchModal" qui a pour but l'affichage du formulaire
  modalbg.style.display = "block";
}

// fermeture modal
modalBtnclose.addEventListener("click", function(){// Ecoute de l'evenement de type "Click" qui donne lieu à la fermeture de la modale  
modalbg.style.display = "none";                                
});

// ___________________________AFFICHAGE MESSAGES D'ERREURS________________________________

// CHAMP PRENOM
 eltFirstName.addEventListener("input", function(event){ //Ecoute de l'evenement de type "input"
  if (event.target.value.length < 2){  // Verifie la longuer de la valeur du champ type input 
    formDataFirst.setAttribute("data-error-visible", "true"); // si la condition ne pas validée un message d'erreur est affiché
  } else{    
    formDataFirst.setAttribute("data-error-visible", "false");
  }
 });

//  -----------------------------------CHAMP NOM-----------------------------------
 eltLastName.addEventListener("input", function(event){//Ecoute de l'evenement de type "input"  
  if (event.target.value.length < 2){ // Verifie la longuer de la valeur du champ type input 
    formDataLast.setAttribute("data-error-visible", "true");//si la condition ne pas validée un message d'erreur est affiché 
  } else{    
    formDataLast.setAttribute("data-error-visible", "false");
  }
 });

//  ----------------------------------CHAPMS EMAIL------------------------------------------
eltEmail.addEventListener("input", function(event){ //Ecoute de un evenement de type input  
  let regexEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); 
  if (regexEmail.test(event.target.value)){// si la condition est validé(respet des caracteurs du regex)
    formDataEmail.setAttribute("data-error-visible", "false");//Ne pas afficher message d'erreur     
  } else{    
    formDataEmail.setAttribute("data-error-visible", "true");  //Afficher message d'erreur si les conditions ne sont pas reunis
  }
 });

 // -----------------------CHAMPS DATE De NAISSANCE ---------------------------------------
 eltDateNaissance.addEventListener("input",function(event){//Ecoute de unevenement de type input
   console.log("DateNaissance Input Event OK") 
    if(isDateValid(event.target.value)){    
      formDataDateNaissance.setAttribute("data-error-visible", "false");
    }else{
      formDataDateNaissance.setAttribute("data-error-visible", "true");
    }
  });  
 
//  --------------------------------NOMBRE DE TOURNOIS -------------------------------------
eltNombreTournois.addEventListener("input", function(event){ ///Ecoute d'un evenement de type input    
  if (isNaN(event.target.value)){ //Verifie si la valeur du champs est un "INT"(nombre)     
    formDataNombreTournois.setAttribute("data-error-visible", "true"); //Afficher message d'erreur 
  } else{    
    formDataNombreTournois.setAttribute("data-error-visible", "false"); //Ne pas afficher message d'erreur    
  }
 });
 
//  ----------------------------CHAMP SELECTION TOURNOIS ------------------------------------
for (let eltTournoisLocation of eltsTournoisLocation){//Cette boucle for permetde passer en revus chaque element (type=radio)
  eltTournoisLocation.addEventListener("click", function(event){//Ecoute d'un evenement de type "click" pour detecter si un elt a été selectioné
    formDataLocationTournois.setAttribute("data-error-visible", "false");//Ne pas afficher message d'erreur si un element a été seleccioné    
  });
}

//--------------------------------CHAMPS CONDITIONS D'UTILISATION----------------------------
 eltConditionUtilisation.addEventListener("click", function(event){  //Ecoute d'un evenement de type "click" pour detecteur si un element a été selectioné
  if (event.target.checked){//si un element a été selectioné(proprieté)
      console.log("cond util checked");
      formConditionUtilisation.setAttribute("data-error-visible", "false");//Ne pas afficher message d'erreur si les condition sont reunis             
    } else{    
      console.log("cond util UNchecked");
    formConditionUtilisation.setAttribute("data-error-visible", "true");//Afficher message d'erreur   
    }
  });

// --- Bouton SUBMIT --
  const formSubmit = document.querySelector("#formulaire");
  formSubmit.addEventListener("submit", function(event){// Ecoute d'un evenement de type "submit"

  event.preventDefault();// Utilisation de la methode "preventDefault" pour eviter la soumition du formulaire, 
  //si les condtions ci-dessous ne sont pas validés
  
    
    //champs input FirstName(Prenom)      
    if(eltFirstName.value.length == 0){// si la longuer de la valeur de l'element est egal à "0" alors
      formDataFirst.setAttribute("data-error-visible", "true");// afficher le message d'erreur de l'atribut "data-error-visible", "true" 
      //atravers de l'utilisation de la methode setAttribute.    
    }

    // champs input LastName(Nom)  
    if(eltLastName.value.length == 0){ //si la  longuer de la valeur du champs est egal 0 afficher message 
      formDataLast.setAttribute("data-error-visible", "true");
    }
    //Champs input email
    if(eltEmail.value.length == 0){
      formDataEmail.setAttribute("data-error-visible", "true");
    }
    // Champs input Birthdate
    if(isDateValid(eltDateNaissance.value)){
      console.log("BirthDate : set error true");
      formDataDateNaissance.setAttribute("data-error-visible", "false");
    }else{
      formDataDateNaissance.setAttribute("data-error-visible", "true");
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
// -------------------------------------------
  const messageErreurSubmit = document.querySelectorAll("[data-error-visible='true']"); 

  if (messageErreurSubmit.length > 0){//si l'attribut "data-error-visible='true" est superieur à 1 l'evenement preventDefault empêche 
  //la soumission de la page
    console.log("formulaire incomplet")   
  }else{
    validate(event.target[0].value)
  }  
});

