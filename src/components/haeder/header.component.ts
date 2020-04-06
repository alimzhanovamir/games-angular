import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  logoText = 'egaGames';

  navItems = [
    {
      title: 'Home',
      link: 'home'
    },
    {
      title: 'Games',
      link: 'games'
    },
    {
      title: 'Categories',
      link: 'categories'
    }
  ];

  constructor() {
    
  }
}