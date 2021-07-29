import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit, AfterViewInit {
  donationValue: number;
  constructor() {
    this.donationValue = 0;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onSelectChange(event: Event) {
    //alert((event.target as HTMLInputElement).value);
    this.donationValue = +(event.target as HTMLInputElement).value;
  }

  onButtonClick() {
    alert(`O valor doado é ${this.donationValue}`);
  }

  onButtonClickAgain() {
    alert('Muito obrigado!');
  }

  onEnterKey() {
    this.onButtonClick();
  }
}
