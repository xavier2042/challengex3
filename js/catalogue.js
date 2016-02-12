function initialiser() {
  var elementMonCatalogue= document.getElementById('catalogue');


  for (var i = 0; i < catalogue.length; i++) {
    if (i % 2 == 0) {
      var elementMaRow= document.createElement('div');
      elementMaRow.className = "row";
      elementMonCatalogue.appendChild(elementMaRow);
    }

    var elementMaCol6= document.createElement('div');
    elementMaCol6.className = "col-sm-6 col-xs-3";
    elementMaRow.appendChild(elementMaCol6);

    var elementMaThumbnail= document.createElement('div');
    elementMaThumbnail.className = "thumbnail";
    elementMaCol6.appendChild(elementMaThumbnail);

    var elementdivimg = document.createElement('div')
    elementMaThumbnail.appendChild(elementMonImage);

    var elementMonImage= document.createElement('img');
    elementMonImage.src = catalogue[i].photo;
    // elementMonImage.href = "ficheIndex.html?paramIndice=" + [i];
    // var elementlien= document.createElement('a');
    // elementMonImage.appendChild(elementlien);

    var elementMaCaption= document.createElement('div');
    elementMaCaption.className = "caption";
    elementMaThumbnail.appendChild(elementMaCaption);

    var elementMonH3= document.createElement('h3');
    elementMonH3.innerHTML = catalogue[i].nom;
    elementMaCaption.appendChild(elementMonH3);

    var elementDesc= document.createElement('p');
    elementDesc.innerHTML = catalogue[i].description;
    elementMaCaption.appendChild(elementDesc);

    var elementBoutons= document.createElement('div');
    var elementBouton1= document.createElement('a');
    // for (var j = 0; j < catalogue.length; j++)
    elementBouton1.href = "ficheIndex.html?paramIndice=" + [i];

    elementBouton1.className = "btn btn-primary";
    elementBouton1.innerHTML = catalogue[i].prix;
    var elementBouton2= document.createElement('a');
    elementBouton2.className = "btn btn-default";
    elementBouton2.innerHTML = "Panier";
    elementBoutons.appendChild(elementBouton1);
    elementBoutons.appendChild(elementBouton2);
    elementMaCaption.appendChild(elementBoutons);
  }

}
