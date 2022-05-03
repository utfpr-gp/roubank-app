import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/util/constants';
import { Transaction } from './../model/transaction';
import { User } from './../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css'],
})
export class OperationDetailComponent implements OnInit {
  transaction!: Transaction;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
      let transactions = user.transactions;
      let idParam = params['id'];
      transactions = transactions.filter((t) => {
        return t.id == idParam;
      });

      if (transactions.length == 0) {
        alert('Oppsss! A transação não foi encontrada!');
      }

      this.transaction = transactions[0];
    });
  }
}
