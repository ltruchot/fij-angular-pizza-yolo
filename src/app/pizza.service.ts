import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  panier = [];

  total() {
    let total = 0;
    for (let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].prix;
    }
    return total;
  }
}
