import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
	titre = 'Pizza YOLO';
  menuComplet = [
    { 
      nom: "Vegetariana", 
      prix: 12, 
      ingredients: ["tomate", "courgette"], 
      image: "vegetariana.jpeg" 
    }, 
    { 
      nom: "Diavolo", 
      prix: 13, 
      ingredients: ["tomate", "chorizo"], 
      image: "diavolo.jpeg"  
    },
    { 
      nom: "Parmeggiano", 
      prix: 9, 
      ingredients: ["tomate", "parmesan"], 
      image: "parmegiano.jpeg" 
    }, 
    { 
        nom: "4 fromages", 
      prix: 14, 
      ingredients: ["crème", "gorgonzola"], 
      image: "4f.jpeg"  
    },   
    { 
      nom: "Poulet", 
      prix: 13, 
      ingredients: ["tomate", "courgette"], 
      image: "poulet.jpeg" 
    }
  ];
  menuVisible = true;
  nom = "";
  panier = [];

  get total () {
    let total = 0;
    for(let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].prix;
    }
    return total;
    // return this.panier.reduce((acc, cur) => acc + cur.prix, 0);
  }

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }
  ajouterAuPanier (pizza) {
    this.panier.push(pizza);
  }
  supprimerItem(index) {
    this.panier.splice(index, 1)
  }

}
