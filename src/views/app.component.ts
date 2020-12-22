import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'views-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  navLinks: any[]
  activeLinkIndex = -1

  constructor(private router: Router) {
    this.navLinks = [
      {path: '/dashboard', label: 'DASHBOARD', index: 0},
      {path: '/heroes', label: "HEROES", index: 1}
    ]
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url))
    })
  }
}
