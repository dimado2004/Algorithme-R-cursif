function puissance(base, exposant) {
    // Cas de base : toute base élevée à la puissance 0 est 1
    if (exposant === 0) {
      return 1;
    }
  
    // Si l'exposant est négatif, on utilise la récursion pour calculer
    // la puissance inverse et on inverse le résultat
    if (exposant < 0) {
      return 1 / puissance(base, -exposant);
    }
  
    // Appel récursif en multipliant la base par elle-même
    return base * puissance(base, exposant - 1);
  }
  
  // Exemple d'utilisation
  console.log(puissance(2, 3)); // Affiche 8
  console.log(puissance(5, -2)); // Affiche 0.04
  console.log(puissance(7, 0)); // Affiche 1