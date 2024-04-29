var posMissileX;
var posMissileY;
var pointsPlayer = 0;



function pewPew() {
    posMissileX = posShipX;
    posMissileY = posShipY - 1;

    plateau[posMissileY][posMissileX].src = "../img/lazerbeam.png";
    deplacementMissile(posMissileY, posMissileX);
}

function deplacementMissile(y, x) {
    if (y < 0) return; // si missile sort, pu de missile 

    
    if (y === posAlienY && x === posAlienX) { //Check la collision
        console.log("KABOOM!");
        
        plateau[y][x].src = "../img/empty.png";
        pointsPlayer ++;
        document.getElementById("pts").textContent = "Points : " + pointsPlayer;

        
    } else {
        plateau[y][x].src = "../img/lazerbeam.png";

        setTimeout(function() {
            plateau[y][x].src = "../img/empty.png";
            
            deplacementMissile(y - 1, x);
        }, 200);
    }
}