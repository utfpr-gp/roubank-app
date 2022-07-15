import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { City } from './../../model/city';
import { Injectable } from '@angular/core';
import { RoutesAPI } from './../../util/routes-api';
import { State } from 'src/app/model/state';

@Injectable()
export class CityService {
  URL = RoutesAPI.CITIES;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  listCities(): Observable<City[]> {
    return this.httpClient.get<State[]>(`${this.URL}`);
  }

  getById(id: number): Observable<City> {
    return this.httpClient.get<City>(`${this.URL}/${id}`);
  }

  save(city: City): Observable<City> {
    return this.httpClient.post<City>(this.URL, city, this.httpOptions);
  }

  saveOrUpdate(city: City): Observable<City> {
    if (city.id) {
      return this.update(city);
    } else {
      return this.save(city);
    }
  }

  patch(city: City): Observable<City> {
    return this.httpClient.patch<City>(
      `${this.URL}/${city.id}`,
      city,
      this.httpOptions
    );
  }

  update(city: City): Observable<City> {
    return this.httpClient.put<City>(
      `${this.URL}/${city.id}`,
      city,
      this.httpOptions
    );
  }
}
