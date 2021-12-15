// Déclaration des tableaux


const nomObjet = ["Banane", "Fleur", "Manteau", "Chariot", "Slip" ];

const imageObjet = ["banane.jpg", "fleur.jpg", "manteau.jpg", "chariot.jpg", "slip.jpg"];


// Déclaration des variables

let prixPropose;
let prix;
let nbreRamdom;
let compteur;
let image = document.getElementById('objet');
let nomImage = document.getElementById('nom-objet');
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

let affichageTentative = document.getElementById('nbre-tentative');

function genererUnChiffre(valeurMax) {
    return Math.floor(Math.random() * Math.floor(valeurMax));
}

prix = genererUnChiffre(100) + 1;
nbreAleatoire = genererUnChiffre(5);

function afficherImage(valeur){
    return '<img src="assets/img/justeprix/' + valeur + '" class="img-fluid" width"30%" alt="Responsive image">'; 
}

image.innerHTML = afficherImage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire]; 
compteur = 10;
affichageTentative.innerHTML = "Il vous reste " + compteur + " tentatives...";

function verifierProposition(){
    prixPropose = document.getElementById('prix-propose').value;
    if(compteur == 0){
        affichageTentative.innerHTML = "Il vous reste " + compteur + " tentatives...";
        message.innerHTML = "Désolé, vous avez perdu !<br> Le juste prix était de " + prix + " euros";
        bouton.disabled = true;
    }else{
        if(prixPropose > prix){
            message.innerHTML = "c'est moins !";
            compteur--;
            affichageTentative.innerHTML = "IL vous reste " + compteur + " tentatives...";
        }
        if(prixPropose < prix){
            message.innerHTML = "c'est plus !";
            compteur--;
            affichageTentative.innerHTML= "Il vous reste " + compteur + "tentatives...";
        }
        if(prixPropose == prix){
            message.innerHTML = "Bravo vous avez gagné !";
            affichageTentative.innerHTML = "En "+ compteur + "tentatives..."; 
            bouton.disabled = true;
        }
    }
}

bouton.addEventListener('click', verifierProposition, false);
