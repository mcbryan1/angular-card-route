import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  page?: string;

  constructor() { }

  ngOnInit(): void {
    this.page = window.location.pathname;
  }

}
