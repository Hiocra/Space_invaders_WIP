var largeur = 9;
var hauteur = 5;
var plateau = [];

window.onload = initPlateau;

function initPlateau() {
    let ladiv = document.getElementById("contenu");
    let tableau = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let i = 0; i < hauteur; i++) {
        let ligne = document.createElement("tr");
        let newligne = [];
        for (let j = 0; j < largeur; j++) {
            let cell = document.createElement("td");
            cell.id = "cell" + i + j;

            let img = document.createElement("img");
            img.src = "../img/empty.png";

            cell.appendChild(img);
            ligne.appendChild(cell);
            newligne.push(img); 
        }
        plateau.push(newligne); 

        tbody.appendChild(ligne);
    }

    tableau.appendChild(tbody);
    ladiv.appendChild(tableau);
}