import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Transaction } from './../model/transaction';
import { TransactionPromiseService } from './../services/transaction-promise.service';
import { User } from './../model/user';
import { UserPromiseService } from '../services/user-promise.service';
import { WebStorageUtil } from './../util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  userWS: User;

  constructor(
    private userPromiseService: UserPromiseService,
    private transactionPromiseService: TransactionPromiseService
  ) {
    this.userWS = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  do(value: number, username: string): Promise<number> {
    const p = new Promise<number>((resolve, reject) => {
      if (value < 5) {
        reject('Opps!!! O valor precisa ser maior que ou igual a 5 Reais.');
      }

      //tarifa de deposito
      let tax = value * Constants.TAX_DEPOSIT;
      let netValue = value - tax;
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

      //cadastra a transação
      let user!: User;
      this.userPromiseService
        .getByUsername(username)
        .then((u: User[]) => {
          user = u[0];
          user.balance += netValue;

          let transaction = new Transaction(
            netValue,
            tax,
            Transaction.DEPOSIT_TYPE
          );
          transaction.userId = user.id;

          //salva também no WebStorage
          this.userWS = WebStorageUtil.get(Constants.USERNAME_KEY);
          this.userWS.transactions.push(transaction);
          this.userWS.balance += netValue;
          localStorage.setItem(
            Constants.USERNAME_KEY,
            JSON.stringify(this.userWS)
          );

          let p1 = this.userPromiseService.patch(user);
          let p2 = this.transactionPromiseService.save(transaction);
          Promise.all([p1, p2]).then((values) => {
            resolve(values[1].value);
          });
        })
        .catch((e) => {
          reject('Opps!!! O usuário não foi encontrado!');
        });
    });
    return p;
  }
}
