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

    var elementMonImage2 = document.createElement('div');
    var elementMonImage1 = document.createElement('a');
    var elementMonImage= document.createElement('img');
    elementMonImage1.href = "ficheIndex.html?paramIndice=" + [i];
    elementMonImage.src = catalogue[i].photo;
    elementMaThumbnail.appendChild(elementMonImage2);
    elementMonImage1.appendChild(elementMonImage);
    elementMonImage2.appendChild(elementMonImage1);

    var elementMaCaption= document.createElement('div');
    elementMaCaption.className = "caption";
    elementMaThumbnail.appendChild(elementMaCaption);

    var elementMonH3= document.createElement('h3');
    elementMonH3.innerHTML = catalogue[i].nom;
    elementMaCaption.appendChild(elementMonH3);
    elementMonH3.className = "center";

    var elementDesc= document.createElement('p');
    elementDesc.innerHTML = catalogue[i].description;
    elementMaCaption.appendChild(elementDesc);
    elementDesc.className = "center";


    var elementBoutons= document.createElement('div');

    var elementBouton1= document.createElement('span');
    elementBoutons.className = "center";
    elementBouton1.className = "prix";
    elementBouton1.innerHTML = catalogue[i].prix + " €uros";
    elementBoutons.appendChild(elementBouton1);
    elementMaCaption.appendChild(elementBoutons);
  }

}
