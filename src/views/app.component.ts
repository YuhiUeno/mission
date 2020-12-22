import { Component } from '@angular/core';

@Component({
  selector: 'views-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = ['/dashboard', '/heroes']
  activeLink = this.links[0]
}
