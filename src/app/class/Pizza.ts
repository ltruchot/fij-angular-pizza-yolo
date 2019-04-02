export class Pizza {
  // propriétés
  prix = 10;

  // constructeur
  constructor(public nom, public ingredients, public image, prix?) {
    if (prix) {
      this.prix = prix;
    }
  }

  // methods
  direNom() {
    console.log('je suis une pizza de type ' + this.nom);
  }
  getImage() {
    return '/assets/images/' + this.image + '.jpeg';
  }
}
