import { Component, OnInit } from '@angular/core';

import { Constants } from 'src/app/util/constants';
import { Donation } from './../../model/donation';
import { User } from './../../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-donation-statement',
  templateUrl: './donation-statement.component.html',
  styleUrls: ['./donation-statement.component.css'],
})
export class DonationStatementComponent implements OnInit {
  donations: Donation[] = [];
  constructor() {}

  ngOnInit(): void {
    this.donations = WebStorageUtil.get(Constants.DONATION_KEY) as Donation[];
  }
}
