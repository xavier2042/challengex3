function lireParametre(){
  // console.log(urlParams)
  // var elementNom= document.getElementById("nom");
  // elementNom.innerHTML= urlParams.nom;
  // var elementDesc= document.getElementById("description");
  // elementDesc.innerHTML= urlParams.description;
var indiceStagiaire=urlParams.paramIndice;
var stagiaire= promo[indiceStagiaire];
// indiceStagiaire.innerHTML=urlParams.paramIndice;

// var elementNom= document.getElementById("nom");
nom.innerHTML= stagiaire.nom;
// var elementDesc= document.getElementById("description");
elementDesc.innerHTML= stagiaire.description;
}
