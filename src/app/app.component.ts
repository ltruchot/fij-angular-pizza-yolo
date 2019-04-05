import { Component } from '@angular/core';
import { pizzas } from './data/pizzas';
import { PizzaService } from './pizza.service';

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

  constructor(public pizzaService: PizzaService) {}
  // méthodes
  voirMenu() {
    this.menuVisible = true;
  }

  supprimerItem(index) {
    // -- splice permet de supprimer un item à un index en parculier
    this.pizzaService.panier.splice(index, 1);
  }
}
