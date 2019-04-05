import { Component, Input } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  // ceci est la manière de donner des data via le HTML
  @Input()
  pizzaInfo;

  constructor(public pizzaService: PizzaService) {}

  ajouterAuPanier(pizza) {
    this.pizzaService.panier.push(pizza);
  }
}
