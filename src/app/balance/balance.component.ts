import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Shared } from './../util/shared';
import { User } from './../model/user';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  public user?: User;

  constructor() {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.doBalance();
  }

  doBalance(): void {
    let totalCosts = +localStorage.getItem(Constants.COSTS_KEY)!;
    totalCosts += Constants.TAX_BALANCE;
    localStorage.setItem(Constants.COSTS_KEY, String(totalCosts));

    this.user = JSON.parse(localStorage.getItem(Constants.USERNAME_KEY)!);
  }
}
