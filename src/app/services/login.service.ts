import { Observable, Observer, Subject } from 'rxjs';

import { Constants } from './../util/constants';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSource = new Subject<boolean>();
  //login$ = this.loginSource.asObservable();

  constructor(private router: Router) {}

  login() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
    this.loginSource.next(true);
    this.router.navigate(['']);
  }

  logout() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
    this.loginSource.next(false);
    this.router.navigate(['']);
  }

  asObservable(): Observable<boolean> {
    return this.loginSource;
    //return this.loginSource.asObservable()
  }
}
