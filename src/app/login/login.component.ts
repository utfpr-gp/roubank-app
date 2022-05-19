import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginUser = new User('', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onLogin() {
    if (
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password
    ) {
      WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
      this.loginService.login();
      this.router.navigate(['']);
    } else {
      alert(
        'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }
}
