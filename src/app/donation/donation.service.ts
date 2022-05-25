import { Constants } from 'src/app/util/constants';
import { Donation } from './../model/donation';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from './../util/web-storage-util';

@Injectable()
export class DonationService {
  constructor() {}

  save(donation: Donation): Promise<Donation> {
    const p = new Promise<Donation>((resolve, reject) => {
      if (donation.value < 0) {
        reject('Caro cliente, nos ajude, o valor precisa ser positivo!');
      }
      if (donation.value < 10) {
        reject(
          'Caro cliente, você pode mais do que isso! O mínimo para doação é R$ 10,00!'
        );
      }
      setTimeout(() => {
        const donations = WebStorageUtil.get(Constants.DONATION_KEY);
        donations.push(donation);
        WebStorageUtil.set(Constants.DONATION_KEY, donations);
        resolve(donation);
      }, 5000);
    });
    return p;
  }

  calculateTotalDonations(): number {
    //contabiliza o total
    const donations = JSON.parse(localStorage.getItem(Constants.DONATION_KEY)!);
    return donations.reduce((total: number, donation: Donation) => {
      return total + donation.value;
    }, 0);
  }
}
