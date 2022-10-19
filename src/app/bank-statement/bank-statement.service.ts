import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ErrorUtil } from './../util/error-util';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from './../util/routes-api';
import { Transaction } from './../model/transaction';
import { User } from './../model/user';
import { UserService } from './../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class BankStatementService {
  transactions = [];
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  getTransactions(username: string): Observable<Transaction[]> {
    return this.userService.getByUsername(username).pipe(
      map((users: User[]) => users[0]),
      map((user: User) => user.id),
      switchMap((id: string) => {
        return this.userService.listTransactionsByUser(id);
      }),
      catchError(ErrorUtil.handleError)
    );
  }
}
