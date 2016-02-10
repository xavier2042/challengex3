function lireParametre(){
  var indiceLivre = urlParams.param_indice;
  var livre = catalogue[indiceLivre];
  var param_nom = document.getElementById('nom');
  param_nom.innerHTML = livre.nom;
  var param_des = document.getElementById('des');
  param_des.innerHTML = livre.description;
  var param_image = document.getElementById('imgsrc');
  param_image.src = livre.photo;
  var param_prix = document.getElementById('prix');
  param_prix.innerHTML = livre.prix;
}
//
//
// function ajouterPanier(){
//   var saisiequantite = document.getElementById('quantite');
//   var pecho = saisiequantite.value;
//   var elementPanier = document.getElementById('panier')
//   var listLi = document.createElement('li');
//   elementPanier.appendChild(listLi);
//   listLi.innerHTML = pecho;
//   panier.push(pecho);
//   console.log(panier);
//   sessionStorage.setItem("paniersauvegarde",JSON.stringify(panier));
// }
