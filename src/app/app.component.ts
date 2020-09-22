import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Project';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  

  posts = [
    {
      title: 'Mon premier post',
      content : 'Lorem ipsum dolor si amet',
      loveIts : 0 ,
      created_at : new Date()
  },
  {
    title: 'Mon deuxièmes post',
    content : 'Lorem ipsum dolor si amet',
    loveIts : 0 ,
    created_at : new Date()
},
{
  title: 'Mon troisièmes post',
  content : 'Lorem ipsum dolor si amet',
  loveIts : 0 ,
  created_at : new Date()
}
  ]

  constructor() {
    setTimeout(() => { this.isAuth = true }, 4000)
  };

  onAllume() {
    console.log("Allumer");
  }
}
