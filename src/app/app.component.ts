import { Component } from '@angular/core';
import { pizzas } from './data/pizzas';

import { Pizza } from './class/Pizza';

const vege = new Pizza('végétarienne', ['tomate', 'courgette'], 'vegetariana');
console.log(vege);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
  menuComplet = pizzas;
  menuVisible = true;
  nom = '';
  panier = [];

  // -- ceci est une propriété qui demande un calcul avant d'être montrée
  get total() {
    let total = 0;
    for (let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].prix;
    }
    return total;
  }

  // méthodes
  voirMenu() {
    this.menuVisible = true;
  }

  ajouterAuPanier(pizza) {
    this.panier.push(pizza);
  }

  supprimerItem(index) {
    // -- splice permet de supprimer un item à un index en parculier
    this.panier.splice(index, 1);
  }
}
