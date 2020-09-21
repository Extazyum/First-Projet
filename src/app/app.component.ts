import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Project';
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

  constructor() {
    setTimeout(() => { this.isAuth = true }, 4000)
  };

  onAllume() {
    console.log("Allumer");
  }
}
