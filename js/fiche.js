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
  var saisiequantite = document.getElementById('quantite');
  var pecho = saisiequantite.value;
  console.log(quantite);
  // var elementPanier = document.getElementById('panier')
  // var listLi = document.createElement('li');
  // elementPanier.appendChild(listLi);
  // listLi.innerHTML = pecho;
  panier.push(pecho);
  // console.log(panier);
  sessionStorage.setItem("paniersauvegarde",JSON.stringify(panier));
}

// function initialiser() {
//   var elementMonCatalogue= document.getElementById('catalogue');
//
//
//   for (var i = 0; i < catalogue.length; i++) {
//     if (i % 2 == 0) {
//       var elementMaRow= document.createElement('div');
//       elementMaRow.className = "row";
//       elementMonCatalogue.appendChild(elementMaRow);
//     }
//
//     var elementMaCol6= document.createElement('div');
//     elementMaCol6.className = "col-sm-6 col-xs-3";
//     elementMaRow.appendChild(elementMaCol6);
//
//     var elementMaThumbnail= document.createElement('div');
//     elementMaThumbnail.className = "thumbnail";
//     elementMaCol6.appendChild(elementMaThumbnail);
//
//     var elementMonImage= document.createElement('img');
//     elementMonImage.src = catalogue[i].photo;
//     elementMaThumbnail.appendChild(elementMonImage);
//
//     var elementMaCaption= document.createElement('div');
//     elementMaCaption.className = "caption";
//     elementMaThumbnail.appendChild(elementMaCaption);
//
//     var elementMonH3= document.createElement('h3');
//     elementMonH3.innerHTML = catalogue[i].nom;
//     elementMaCaption.appendChild(elementMonH3);
//
//     var elementDesc= document.createElement('p');
//     elementDesc.innerHTML = catalogue[i].description;
//     elementMaCaption.appendChild(elementDesc);
//
//     var elementBoutons= document.createElement('div');
//     var elementBouton1= document.createElement('a');
//     // for (var j = 0; j < catalogue.length; j++)
//     elementBouton1.href = "ficheIndex.html?cle=" + [i];
//
//     elementBouton1.className = "btn btn-primary";
//     elementBouton1.innerHTML = catalogue[i].prix;
//     var elementBouton2= document.createElement('a');
//     elementBouton2.className = "btn btn-default";
//     elementBouton2.innerHTML = "Panier";
//     elementBoutons.appendChild(elementBouton1);
//     elementBoutons.appendChild(elementBouton2);
//     elementMaCaption.appendChild(elementBoutons);
//   }
//
// }
