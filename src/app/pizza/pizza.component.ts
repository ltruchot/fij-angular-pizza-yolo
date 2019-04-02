import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  // ceci est la manière de donner des data via le HTML 
  @Input()
  pizzaInfo;
}
console.log(new PizzaComponent() instanceof PizzaComponent)