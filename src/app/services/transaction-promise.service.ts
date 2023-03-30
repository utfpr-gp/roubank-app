import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Transaction } from './../model/transaction';
import { User } from '../model/user';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root',
})
export class TransactionPromiseService {
  URL = RoutesAPI.TRANSACTIONS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Promise<Transaction> {
    return this.httpClient.get<Transaction>(`${this.URL}/${id}`).toPromise();
  }

  save(transaction: Transaction): Promise<Transaction> {
    return this.httpClient
      .post<Transaction>(
        this.URL,
        JSON.stringify(transaction),
        this.httpOptions
      )
      .toPromise();
  }

  patch(transaction: Transaction): Promise<Transaction> {
    return this.httpClient
      .patch<Transaction>(
        this.URL,
        JSON.stringify(transaction),
        this.httpOptions
      )
      .toPromise();
  }

  update(transaction: Transaction): Promise<Transaction> {
    return this.httpClient
      .put<Transaction>(this.URL, JSON.stringify(transaction), this.httpOptions)
      .toPromise();
  }
}
