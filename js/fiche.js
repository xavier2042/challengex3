function afficheFiche(){
  var indiceLivre = urlParams.paramIndice;
  var livre = catalogue[indiceLivre];

  var param_nom = document.getElementById('nom');
  var param_des = document.getElementById('des');
  var param_image = document.getElementById('imgsrc');
  var param_prix = document.getElementById('prix');


  param_nom.innerHTML = livre.nom;
  param_des.innerHTML = livre.description;
  param_image.src = livre.photo;
  param_prix.innerHTML = livre.prix;
}

var panier = [];
function ajouterPanier(){
  var saisieimg = document.getElementById('imgsrc');
  var pechoimg = saisieimg.src;
  var saisienom = document.getElementById('nom');
  var pechonom = saisienom.innerHTML;
  var saisieprix = document.getElementById('prix');
  var pechoprix = saisieprix.innerHTML;
  var saisiequantite = document.getElementById('quantite');
  var pechoquantite = saisiequantite.value;
  var lignePanier = {
    image: pechoimg,
    nom: pechonom,
    prix: pechoprix,
    quantite: pechoquantite,
  }
  panier.push(lignePanier);
  sessionStorage.setItem("paniersauvegarde",JSON.stringify(panier));
}
