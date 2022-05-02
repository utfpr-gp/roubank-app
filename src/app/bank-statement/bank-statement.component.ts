import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.css'],
})
export class BankStatementComponent implements OnInit {
  user!: User;

  constructor() {}

  ngOnInit(): void {
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.doBankStatement();
  }

  doBankStatement() {
    let totalCosts = parseFloat(WebStorageUtil.get(Constants.COSTS_KEY));
    totalCosts += Constants.TAX_BANK_STATEMENT;
    WebStorageUtil.set(Constants.COSTS_KEY, totalCosts);
  }
}
