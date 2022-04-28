import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Donation } from './../model/donation';
import { Shared } from './../util/shared';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit, AfterViewInit {
  donation!: Donation;
  totalDonations: number = 0;
  success = false;
  message = '';
  submitted = false;

  constructor() {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    const user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.donation = new Donation(0, user.username);
    this.totalDonations = this.calculateTotalDonations();
  }

  onSubmit() {
    if (this.donation.value < 0) {
      this.success = false;
      this.message = 'Caro cliente, nos ajude, o valor precisa ser positivo!';
      return;
    }
    if (this.donation.value < 10) {
      this.success = false;
      this.message =
        'Caro cliente, você pode mais do que isso! O mínimo para doação é R$ 10,00!';
      return;
    }

    const donations = WebStorageUtil.get(Constants.DONATION_KEY);
    donations.push(this.donation);
    WebStorageUtil.set(Constants.DONATION_KEY, donations);
    this.success = true;
    this.message =
      'O valor foi doado com sucesso! Que este ato se torne um hábito na sua vida! Muito agradecidos!';
    this.submitted = true;
    this.totalDonations = this.calculateTotalDonations();
  }

  ngAfterViewInit() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onSelectChange(event: Event) {
    this.donation.value = +(event.target as HTMLInputElement).value;
    alert(`O valor a ser doado é ${this.donation.value}`);
  }

  onButtonClick() {
    console.log(`O valor a ser doado é ${this.donation.value}`);
  }

  onButtonClickAgain() {
    console.log('Muito obrigado!');
  }

  onEnterKey() {
    this.onButtonClick();
  }

  onClickResetForm() {
    this.donation = new Donation(0, '');
    this.success = false;
    this.message = '';
    window.alert('Que ótimo! Doe de novo! Doe o seu melhor!');
  }

  calculateTotalDonations(): number {
    //contabiliza o total
    const donations = JSON.parse(localStorage.getItem(Constants.DONATION_KEY)!);
    return donations.reduce((total: number, donation: Donation) => {
      return total + donation.value;
    }, 0);
  }
}
