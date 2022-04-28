import { Component, OnInit } from '@angular/core';

import { Shared } from './../util/shared';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent implements OnInit {
  imageURL: string = 'https://lorempixel.com/600/300/business/';
  isHidePanel = true;

  constructor() {}

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' +
        this.imageURL +
        ')',
    };
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
  }
}
