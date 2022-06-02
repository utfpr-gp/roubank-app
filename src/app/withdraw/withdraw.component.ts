import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Shared } from './../util/shared';
import { Transaction } from './../model/transaction';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';
import { WithdrawService } from './withdraw.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  value: number = 0;
  success = false;
  message = '';
  constructor(private withdrawService: WithdrawService) {}

  ngOnInit(): void {
    this.message = '';
    Shared.initializeWebStorage();
  }

  onSubmit() {
    this.withdrawService.do(this.value, Constants.USERNAME_KEY).subscribe(
      (data) => {
        let value = this.value;
        this.success = true;
        console.log(data);
        this.message = `Saque de R$ ${value.toFixed(2)} realizado com sucesso
    com uma pequena taxa de R$ ${(value * Constants.TAX_WITHDRAW).toFixed(2)}`;
        this.value = 0;
      },
      (error) => {
        this.success = false;
        this.message = error.message;
      }
    );
  }
}
