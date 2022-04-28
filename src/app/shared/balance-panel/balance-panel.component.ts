import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-panel',
  templateUrl: './balance-panel.component.html',
  styleUrls: ['./balance-panel.component.css'],
})
export class BalancePanelComponent implements OnInit {
  @Input() value: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
