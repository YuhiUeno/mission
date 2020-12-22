import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'views-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mission'
  navLinks = [
      {path: '/cover', label: 'Cover'},
      {path: '/heroes', label: "Heroes"}
  ]
}
