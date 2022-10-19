import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { User } from './../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    let user: User = WebStorageUtil.get(Constants.USERNAME_KEY) as User;

    if (!user) {
      //redireciona para uma view para explicar o que aconteceu
      this.router.navigateByUrl('/nao-autorizado');
      return false;
    }

    if (!user.isAdmin) {
      //redireciona para uma view para explicar o que aconteceu
      this.router.navigateByUrl('/nao-autorizado');
      return false;
    }

    return true;
  }
}
