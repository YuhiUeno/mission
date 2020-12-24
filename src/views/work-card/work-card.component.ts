import { Component, OnInit } from '@angular/core';
import { getAllJSDocTags } from 'typescript';

@Component({
  selector: 'views-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  work = {
    title: "Starting over at 8",
    tags: [
      {name:"isekai", type:"required"},
      {name: "tensei", type:"required"},
      {name: "political", type: "optional"},
      {name: "magic", type: "optional"},
      {name: "majin", type: "optional"},
      ],
    author: "Yushi",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    fund: 1234567
  }

  constructor() { }

  ngOnInit(): void { }

}
