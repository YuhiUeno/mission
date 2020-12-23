import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'views-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  work = {
    title: "Starting over at 8",
    tags: ["isekai", "tensei", "political", "magic", "majin"],
    author: "Yushi",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    fund: 1234567
  }

  constructor() { }

  ngOnInit(): void {
  }

}
