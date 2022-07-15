import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { RoutesAPI } from '../../util/routes-api';
import { State } from 'src/app/model/state';

@Injectable()
export class StateService {
  URL = RoutesAPI.STATES;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  // states = [
  //   new State({ id: 1, name: 'Paraná', abbreviation: 'PR' }),
  //   new State({ id: 2, name: 'Santa Catarina', abbreviation: 'SC' }),
  // ];

  listStates(): Observable<State[]> {
    return this.httpClient.get<State[]>(`${this.URL}`);
  }

  getById(id: number): Observable<State> {
    return this.httpClient.get<State>(`${this.URL}/${id}`);
  }

  save(state: State): Observable<State> {
    return this.httpClient.post<State>(this.URL, state, this.httpOptions);
  }

  patch(state: State): Observable<State> {
    return this.httpClient.patch<State>(
      `${this.URL}/${state.id}`,
      state,
      this.httpOptions
    );
  }

  update(state: State): Observable<State> {
    return this.httpClient.put<State>(
      `${this.URL}/${state.id}`,
      state,
      this.httpOptions
    );
  }
}
