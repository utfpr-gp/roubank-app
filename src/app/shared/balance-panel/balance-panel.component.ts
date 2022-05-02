import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-balance-panel',
  templateUrl: './balance-panel.component.html',
  styleUrls: ['./balance-panel.component.css'],
})
export class BalancePanelComponent implements OnInit, OnChanges {
  @Input() value: number = 0;
  @Output() donationEvent = new EventEmitter<string>();
  backgroundColor = 'amber';

  constructor() {}

  ngOnChanges(): void {
    if (this.value > 10000)
      setTimeout(() => {
        this.donationEvent
          .emit(`Você já tem muito dinheiro, já pensou em doar um pouco?
    Venha conhecer a nossa seção de doação e doe com o coração!`);
      }, 3000);
  }

  ngOnInit(): void {}

  onDblClickBalance(color: string) {
    this.backgroundColor = color;
  }

  getBackgroundColor() {
    return this.backgroundColor;
  }
}
