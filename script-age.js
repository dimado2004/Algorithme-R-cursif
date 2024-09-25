// Demander à l'utilisateur de saisir son âge
let age = prompt("Veuillez entrer votre âge :");

// Convertir l'entrée en un nombre entier
age = parseInt(age);

// Déterminer le prix du billet en fonction de l'âge
let prixBillet;

if (age <= 12) {
  prixBillet = 10;
} else if (age >= 13 && age <= 17) {
  prixBillet = 15;
} else if (age >= 18) {
  prixBillet = 20;
} else {
  prixBillet = "Invalide";
}

// Afficher le prix du billet
if (prixBillet !== "Invalide") {
  alert("Le prix de votre billet est de " + prixBillet + " $.");
} else {
  alert("Âge invalide. Veuillez entrer un âge valide.");
}