function affichePanier() {

  var panier = JSON.parse(sessionStorage.paniersauvegarde);

  for (var i = 0; i < panier.length; i++) {

    var elementPanier = document.getElementById("panier");
    var creationTr = document.createElement("tr");
    elementPanier.appendChild(creationTr);

    // image
    var creationTd1 = document.createElement("td");
    var creationImg = document.createElement("img");
    creationTr.appendChild(creationTd1);
    creationImg.src = panier[i].image;
    creationTd1.appendChild(creationImg);

    // nom du livre
    var creationTd2 = document.createElement("td");
    creationTr.appendChild(creationTd2);
    creationTd2.innerHTML = panier[i].nom;
    creationTd2.style.lineHeight = 10;
    creationTd2.style.fontWeight = "bold";

    // prix unitaire
    var creationTd3 = document.createElement("td");
    creationTr.appendChild(creationTd3);
    creationTd3.innerHTML = panier[i].prix + " Euros";
    creationTd3.style.lineHeight = 10;
    creationTd3.style.fontWeight = "bold";

    // nombre d'article
    var creationTd4 = document.createElement("td");
    creationTr.appendChild(creationTd4);
    creationTd4.innerHTML = panier[i].quantite;
    creationTd4.style.lineHeight = 10;
    creationTd4.style.fontWeight = "bold";

    // prix total
    var creationTd5 = document.createElement("td");
    creationTr.appendChild(creationTd5);
    creationTd5.innerHTML = (panier[i].prix * panier[i].quantite) + " Euros";
    creationTd5.style.lineHeight = 10;
    creationTd5.style.fontWeight = "bold";
    }

}
