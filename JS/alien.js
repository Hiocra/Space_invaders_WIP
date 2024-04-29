var posAlienX = 0;
var posAlienY = 0;



function initAlien() {
    posAlienX = 0;
    posAlienY = 0;
    plateau[posAlienY][posAlienX].src = "img/invader.png";
    parcoursGrille();
}

function deplaceAlien(x, y) {
   
    plateau[posAlienY][posAlienX].src = "img/empty.png";

    posAlienX = x;
    posAlienY = y;

    plateau[posAlienY][posAlienX].src = "img/invader.png";

    setTimeout(function() {
        deplaceAlien(x, y);
    }, 500); 
}

var direction = "droite";

function parcoursGrille() {
    plateau[posAlienY][posAlienX].src = "img/empty.png";

    if (direction === "droite") {
        if (posAlienX < largeur - 1) {
            posAlienX++;
        } else if (posAlienY < hauteur - 1) {
            posAlienY++;
            direction = "gauche";
        } else {
            
            posAlienX = 0;
            posAlienY = 0;
            console.log("invader out");
        }
    } else if (direction === "gauche") {
        if (posAlienX > 0) {
            posAlienX--;
        } else if (posAlienY < hauteur - 1) {
            posAlienY++;
            direction = "droite";
        } else {
            posAlienX = 0; 
            posAlienY = 0;
            console.log("invader out");

        }
    }

    plateau[posAlienY][posAlienX].src = "img/invader.png";

    if (posShipY === posAlienY && posShipX === posAlienX) { //Check la collision
        console.log("boom");
        lancerPartie();
        
    }
    else {
    setTimeout(parcoursGrille, 500);//bawi, sinon il remonte pas
    }
}