import { Injectable } from '@angular/core';
import { Pizza } from './class/Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  panier = [];

  get total() {
    let total = 0;
    for (let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].prix * this.panier[i].nb;
    }
    return total;
  }

  ajouterAuPanier(pizza: Pizza) {
    const pizzaIndex = this.getIndex(pizza);
    if (pizzaIndex === -1) {
      pizza.nb = 1;
      this.panier.push(pizza);
    } else {
      this.panier[pizzaIndex].nb++;
    }
  }

  supprimerDuPanier(pizza: Pizza) {
    const pizzaIndex = this.getIndex(pizza);

    if (pizzaIndex !== -1 && this.panier[pizzaIndex].nb > 1) {
      this.panier[pizzaIndex].nb--;
    } else {
      // -- splice permet de supprimer un item à un index en parculier
      this.panier.splice(pizzaIndex, 1);
    }
  }

  supprimerTout(pizza: Pizza) {
    const pizzaIndex = this.getIndex(pizza);
    this.panier.splice(pizzaIndex, 1);
  }

  getIndex(pizza: Pizza) {
    return this.panier.findIndex(item => item.id === pizza.id);
  }
}
