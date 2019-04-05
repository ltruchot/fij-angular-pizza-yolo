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
  getImage() {
    return '/assets/images/' + this.image;
  }
}
