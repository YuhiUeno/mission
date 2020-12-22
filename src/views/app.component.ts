import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'views-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mission'
  navLinks = [
      {path: '/dashboard', label: 'DASHBOARD', index: 0},
      {path: '/heroes', label: "HEROES", index: 1}
  ]
}
