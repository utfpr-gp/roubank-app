import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Shared } from './../util/shared';
import { Transaction } from './../model/transaction';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  value: number = 0;
  depositInvalid = false;
  depositMessage = '';

  constructor() {}

  ngOnInit(): void {
    this.depositMessage = '';
    Shared.initializeWebStorage();
  }

  onSubmit() {
    if (this.value < 5) {
      this.depositInvalid = true;
      this.depositMessage =
        'Opps!!! O valor precisa ser maior que ou igual a 5 Reais.';
      return;
    }

    const user = JSON.parse(localStorage.getItem(Constants.USERNAME_KEY)!);

    //tarifa de deposito
    let tax = this.value * Constants.TAX_DEPOSIT;
    let netValue = this.value - tax;
    //custos para visualização do saldo e extrato
    let cost = parseFloat(localStorage.getItem(Constants.COSTS_KEY)!);
    let costBefore = cost;
    if (netValue < cost) {
      cost -= netValue;
      tax += netValue;
      netValue = 0;
    } else {
      netValue = netValue - cost;
      tax += cost;
      cost = 0;
    }
    //persiste novamente o custo
    localStorage.setItem(Constants.COSTS_KEY, cost.toString());
    user.balance += netValue;
    let transaction = new Transaction(
      netValue,
      tax,
      Constants.DEPOSIT_TYPE,
      new Date()
    );
    user.transactions.push(transaction);
    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));

    this.depositInvalid = false;
    this.depositMessage = `Depósito de R$ ${netValue.toFixed(
      2
    )} efetuado com sucesso considerando a pequena taxa
      de ${Constants.TAX_DEPOSIT * 100}% e os pequenos custos acumulados
      de visualização de saldo e extrato no valor de R$ ${costBefore.toFixed(
        2
      )}!`;

    this.value = 0;
  }

  onResetClick() {
    this.value = 0;
  }
}
