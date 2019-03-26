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
  menuComplet = [
    { 
      nom: "Vegetariana", 
      prix: 12, 
      ingredient: ["tomate", "courgette"], 
      image: "" 
    }, 
    { 
      nom: "Diavolo", 
      prix: 13, 
      ingredient: ["tomate", "chorizo"], 
      image: ""  
    },
    { nom: "Parmeggiano", prix: 9, ingredient: ["tomate", "parmesan"], image: "" }, 
    { nom: "Poulet", prix: 12, ingredient: ["tomate", "poulet"], image: ""  },  
    { nom: "4 fromages", prix: 14, ingredient: ["crème", "gorgonzola"], image: ""  }
  ];
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
