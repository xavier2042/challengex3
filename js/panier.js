function afficherPanier() {
  console.log(panier);
  panier = JSON.parse(sessionStorage.panierSauvegarde);
  for (var i = 0; i < panier.length; i++) {
    var elementPanier = document.getElementById("panier");
    var creationTr = document.createElement("tr");
    elementPanier.appendChild(creationTr);
    // image
    var creatrionTd = document.createElement("td");
    creationTr.appendChild(creatrionTd);
    var creationImg = document.createElement("img");
    creationTd.appendChild(creationImg);
    creationImg.src = ""; // soit panier soit catalogue
    // nom du livre
    var creatrionTd = document.createElement("td");
    creationTr.appendChild(creatrionTd);
    creationTd.innerHTML = "";
    // prix unitaire
    var creatrionTd = document.createElement("td");
    creationTr.appendChild(creatrionTd);
    creationTd.innerHTML = "";
    // nombre d'article
    var creatrionTd = document.createElement("td");
    creationTr.appendChild(creatrionTd);
    creationTd.innerHTML = "";
    // prix total
    var creatrionTd = document.createElement("td");
    creationTr.appendChild(creatrionTd);
    creationTd.innerHTML = "";

    creationTr.innerHTML = panier[i];
  }
}
