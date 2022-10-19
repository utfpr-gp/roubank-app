import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from './../util/routes-api';
import { Transaction } from './../model/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  URL = RoutesAPI.TRANSACTIONS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Transaction> {
    return this.httpClient.get<Transaction>(`${this.URL}/${id}`);
  }

  save(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(
      this.URL,
      transaction,
      this.httpOptions
    );
  }

  patch(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.patch<Transaction>(
      this.URL,
      transaction,
      this.httpOptions
    );
  }

  update(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.put<Transaction>(
      this.URL,
      transaction,
      this.httpOptions
    );
  }
}
