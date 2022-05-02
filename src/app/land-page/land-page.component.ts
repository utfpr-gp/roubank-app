import { Component, OnInit } from '@angular/core';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';

import { Shared } from './../util/shared';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent implements OnInit {
  imageURL: string = '/assets/resources/images/tarifas.jpg';
  loggedIn = false;

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
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
  }
}
