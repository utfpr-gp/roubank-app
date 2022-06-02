import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ErrorUtil } from './../util/error-util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from './../util/routes-api';
import { Transaction } from './../model/transaction';
import { User } from './../model/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getByUsername(username: string): Observable<User[]> {
    const query: HttpParams = new HttpParams().set('username', username);
    const options = username ? { params: query } : {};

    return this.httpClient
      .get<User[]>(`${RoutesAPI.USERS}`, options)
      .pipe(catchError(ErrorUtil.handleError));
  }

  /**
   * Lista as transações de um dado usuário.
   * @param id
   * @returns
   */
  listTransactionsByUser(id: string): Observable<Transaction[]> {
    return this.httpClient
      .get<Transaction[]>(`${RoutesAPI.TRANSACTIONS}/${id}/transactions`)
      .pipe(catchError(ErrorUtil.handleError));
  }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${RoutesAPI.USERS}`,
      user,
      this.httpOptions
    );
  }

  patch(user: User): Observable<User> {
    return this.httpClient.patch<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );
  }
}
