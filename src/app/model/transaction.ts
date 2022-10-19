import { User } from './user';

export class Transaction {
  static readonly WITHDRAW_TYPE = 'withdraw';
  static readonly DEPOSIT_TYPE = 'deposit';
  public date: Date;
  public id: number;
  public userId!: string;
  constructor(public value: number, public tax: number, public type: string) {
    this.id = Math.round(Math.random() * 1000);
    this.value = value;
    this.tax = tax;
    this.type = type;
    this.date = new Date();
  }
}
