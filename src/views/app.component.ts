import { Component } from '@angular/core';

@Component({
  selector: 'views-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    {path: '/dashboard', label: 'DASHBOARD'},
    {path: '/heroes', label: "HEROES"}
  ]
  activeLink = this.navLinks[0]
}
