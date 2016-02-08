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

    var elementMonImage= document.createElement('img');
    elementMonImage.src = catalogue[i].photo;
    elementMaThumbnail.appendChild(elementMonImage);

    var elementMaCaption= document.createElement('div');
    elementMaCaption.className = "caption";
    elementMaThumbnail.appendChild(elementMaCaption);

    var elementMonH3= document.createElement('h3');
    elementMonH3.innerHTML = "Image 1";
    elementMaCaption.appendChild(elementMonH3);

    var elementDesc= document.createElement('p');
    elementDesc.innerHTML = "Cras justo odio, dapibus ac facilisis in, egestas eget quam.";
    elementMaCaption.appendChild(elementDesc);

    var elementBoutons= document.createElement('div');
    var elementBouton1= document.createElement('a');
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