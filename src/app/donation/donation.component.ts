import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { Donation } from './../model/donation';
import { DonationService } from './donation.service';
import { Shared } from './../util/shared';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  providers: [DonationService],
})
export class DonationComponent implements OnInit, AfterViewInit {
  donation!: Donation;
  totalDonations: number = 0;
  success = false;
  message = '';
  submitted = false;

  time = 0;

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    const user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.donation = new Donation(0, user.username);
    this.totalDonations = this.donationService.calculateTotalDonations();
  }

  onSubmit() {
    this.donationService
      .save(this.donation)
      .then(() => {
        this.success = true;
        this.message =
          'O valor foi doado com sucesso! Que este ato se torne um hábito na sua vida! Muito agradecidos!';
        this.submitted = true;
      })
      .then(() => {
        this.totalDonations = this.donationService.calculateTotalDonations();
      })
      .catch((e) => {
        this.success = false;
        this.message = e;
      })
      .finally(() => {
        console.log('A operação foi finalizada!');
      });

    setInterval(() => {
      this.time++;
    }, 1000);
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
}
