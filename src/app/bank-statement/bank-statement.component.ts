import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Transaction } from './../model/transaction';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.css'],
})
export class BankStatementComponent implements OnInit {
  user!: User;
  withdraw = true;
  deposit = true;
  transactions!: Transaction[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.tipo == 'saque') {
        this.withdraw = true;
        this.deposit = false;
      } else if (params['tipo'] == 'deposito') {
        this.withdraw = false;
        this.deposit = true;
      } else {
        this.withdraw = true;
        this.deposit = true;
      }
      this.doFilterTransactions(this.withdraw, this.deposit);
    });
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.transactions = this.user.transactions;

    this.doBankStatement();
    this.doFilterTransactions(this.withdraw, this.deposit);
  }

  doBankStatement() {
    let totalCosts = parseFloat(WebStorageUtil.get(Constants.COSTS_KEY));
    totalCosts += Constants.TAX_BANK_STATEMENT;
    WebStorageUtil.set(Constants.COSTS_KEY, totalCosts);
  }

  onFilterOperations(event: any, value: string) {
    if (value == 'WITHDRAW') {
      this.withdraw = event.target.checked ? true : false;
    } else if (value == 'DEPOSIT') {
      this.deposit = event.target.checked ? true : false;
    }
    this.doFilterTransactions(this.withdraw, this.deposit);
  }

  doFilterTransactions(withdraw: boolean, deposit: boolean) {
    this.transactions = this.user?.transactions;
    this.transactions = this.transactions?.filter(
      (t) =>
        (withdraw && t.type === Constants.WITHDRAW_TYPE) ||
        (deposit && t.type === Constants.DEPOSIT_TYPE)
    );
  }

  onClickItem(t: Transaction) {
    this.router.navigate(['/extrato/detalhes', t?.id]);
    //this.router.navigate(['/extrato/detalhes', { id: t?.id }]);
  }
}
