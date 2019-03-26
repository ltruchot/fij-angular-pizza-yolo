import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
	titre = 'Pizza YOLO';
  menu = ["Vegetariana", "Diavolo", "Parmeggiano", "Poulet", "4 fromages"];
  menuVisible = false;
  pristine = true
  nom = "";

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }
  changePristine () {
    this.pristine = false;
  }


}
