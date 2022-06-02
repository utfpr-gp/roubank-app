import { Observable, concat, forkJoin, from, throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Constants } from 'src/app/util/constants';
import { ErrorUtil } from './../util/error-util';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './../model/transaction';
import { TransactionService } from '../services/transaction.service';
import { User } from './../model/user';
import { UserService } from '../services/user.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class WithdrawService {
  user!: User;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private userService: UserService,
    private transactionService: TransactionService
  ) {
    //this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  do(value: number, username: string): Observable<any> {
    if (value < 10) {
      return throwError(
        Error('Opps!!! O valor precisa ser maior que ou igual a 10 Reais.')
      );
    }

    //busca o usuário no BD
    let result$ = this.userService.getByUsername(username).pipe(
      map((users) => users[0]),
      map((user) => {
        return (this.user = user);
      }),
      tap((user) => {
        //console.log(user);
      }),
      mergeMap((user: User) => {
        let tax = value * Constants.TAX_WITHDRAW;

        if (value + tax > this.user.balance) {
          return throwError(new Error('Opps!!! Saldo insuficiente!'));
        }

        this.user.balance -= value + tax;

        const transaction = new Transaction(
          value,
          tax,
          Transaction.WITHDRAW_TYPE
        );
        this.user.transactions?.push(transaction);
        WebStorageUtil.set(Constants.USERNAME_KEY, this.user);

        //atualiza o seu saldo e cadastra a transação
        const result$ = forkJoin([
          this.userService.patch(user),
          this.transactionService.save(transaction),
        ]);

        return result$;
      }),
      catchError(ErrorUtil.handleError)
    );

    // //busca o usuário no BD e então atualiza o seu saldo e cadastra transação
    // let result$ = this.userService.getByUsername(username).pipe(
    //   map((users) => users[0]),
    //   mergeMap((user: User) => {
    //     const result$ = concat(
    //       this.userService.patch(user),
    //       this.transactionService.save(transaction)
    //     );
    //     return result$;
    //   }),
    //   catchError(ErrorUtil.handleError)
    // );

    console.log(result$);
    return result$;
  }
}
