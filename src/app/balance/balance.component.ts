import { Component, OnInit } from '@angular/core';

import { Shared } from './../util/shared';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Shared.initializeUsers();
  }
}
