import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'views-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  cardList = [
    {title: "abc", description: "defghij"},
    {title: "klm", description: "nopqrst"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
