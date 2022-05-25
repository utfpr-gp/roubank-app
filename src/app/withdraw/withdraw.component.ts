import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Shared } from './../util/shared';
import { Transaction } from './../model/transaction';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  value: number = 0;
  success = false;
  message = '';
  constructor() {}

  ngOnInit(): void {
    this.message = '';
    Shared.initializeWebStorage();
  }

  onSubmit() {
    if (this.value < 10) {
      this.success = false;
      this.message =
        'Opps!!! O valor precisa ser maior que ou igual a 10 Reais.';
      return;
    }
    const user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;

    let tax = this.value * Constants.TAX_WITHDRAW;

    if (this.value + tax > user.balance) {
      this.success = false;
      this.message = 'Opps!!! Saldo insuficiente!';
      return;
    }

    user.balance -= this.value + tax;

    const transaction = new Transaction(
      this.value,
      tax,
      Transaction.WITHDRAW_TYPE
    );
    user.transactions.push(transaction);
    WebStorageUtil.set(Constants.USERNAME_KEY, user);

    this.success = true;
    this.message = `Saque de R$ ${this.value.toFixed(2)} realizado com sucesso
    com uma pequena taxa de R$ ${tax.toFixed(2)}`;

    this.value = 0;
  }
}
