import { Component } from '@angular/core';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  // propriété
  nom = '';

  // constructor
  constructor(public pizzaService: PizzaService) {}
}
