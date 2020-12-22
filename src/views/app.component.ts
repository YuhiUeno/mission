import { Component } from '@angular/core';

@Component({
  selector: 'views-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = ['/dashboard', '/heroes']
  activeLink = this.navLinks[0]
}
