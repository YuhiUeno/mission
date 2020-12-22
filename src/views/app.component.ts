import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'views-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
      {path: '/dashboard', label: 'DASHBOARD', index: 0},
      {path: '/heroes', label: "HEROES", index: 1}
  ]

  constructor(private router: Router) {

  }

  onTabChanged(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0:
        this.router.navigate([this.navLinks[0].path])
        break
      case 1:
        this.router.navigate([this.navLinks[1].path])
        break
    }
  }
}
