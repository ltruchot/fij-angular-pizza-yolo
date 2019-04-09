import { Component, OnInit } from '@angular/core';
// import { pizzas } from './../../data/pizzas';
import { PizzaService } from './../../pizza.service';
import { HttpClient } from '@angular/common/http';
import { Pizza } from 'src/app/class/Pizza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // propriétés
  menuComplet;
  menuVisible = true;
  totalPizza;

  // constructor
  constructor(
    public pizzaService: PizzaService,
    public httpClient: HttpClient
  ) {}

  // méthodes
  ngOnInit() {
    this.httpClient.get('/assets/pizzas.json').subscribe((data: any) => {
      const pizzas = [];
      data.forEach(element => {
        pizzas.push(
          new Pizza(
            element.id,
            element.nom,
            element.ingredients,
            element.image,
            element.prix
          )
        );
      });
      this.menuComplet = pizzas;
    });
  }
  voirMenu() {
    this.menuVisible = true;
  }
}
