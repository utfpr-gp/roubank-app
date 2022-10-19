import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Shared } from './../util/shared';
import { User } from './../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  public user?: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.doBalance();
  }

  doBalance(): void {
    let totalCosts = +localStorage.getItem(Constants.COSTS_KEY)!;
    totalCosts += Constants.TAX_BALANCE;
    localStorage.setItem(Constants.COSTS_KEY, String(totalCosts));

    //this.user = JSON.parse(localStorage.getItem(Constants.USERNAME_KEY)!);

    this.userService.getByUsername(Constants.USERNAME_KEY).subscribe(
      (data: User[]) => {
        if (!data || data.length == 0) {
          alert('Nenhum resultado foi encontrado!');
        }
        this.user = data[0];
        console.log(this.user);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
  }
}
