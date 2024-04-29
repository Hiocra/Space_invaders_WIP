var posShipY = hauteur - 1;
var posShipX = ((largeur - 1) / 2); 

function effaceShip() {
    plateau[posShipY][posShipX].src = "../img/empty.png";
}

function afficheShip() {
    plateau[posShipY][posShipX].src = "../img/thor.gif";
}

function lancerPartie() {
    afficheShip();
    initAlien(); 
}

document.getElementById("jouer").addEventListener("click", lancerPartie);

function deplacerVaisseau(event) {

    switch (event.code) {
        case "ArrowUp":
            pewPew();
            break;
        case "ArrowLeft":
            if (posShipX > 0) {
                effaceShip();
                posShipX--;
                afficheShip();
            }
            break;
        case "ArrowRight":
            if (posShipX < largeur - 1) {
                effaceShip();
                posShipX++;
                afficheShip();
            }
            break;
    }
    
}

window.addEventListener("keydown", deplacerVaisseau);


// la structure de contrôle switch est utilisée pour effectuer 
// différentes actions en fonction de la valeur d'une 
// expression. Chaque cas dans un bloc switch représente 
// une valeur possible de l'expression.
// il est important d'ajouter l'instruction break pour 
// sortir de la structure switch, sinon le code continuera à s'exécuter
// dans les cas suivants, ce qui peut entraîner un comportement inattendu.
