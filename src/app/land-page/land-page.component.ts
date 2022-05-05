import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { Router } from '@angular/router';
import { Shared } from './../util/shared';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent implements OnInit {
  imageURL: string = '/assets/resources/images/tarifas.jpg';
  loggedIn = false;

  constructor(private router: Router) {}

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

  onDepositClick() {
    this.router.navigate(['/extrato'], { queryParams: { tipo: 'deposito' } });
  }
}
