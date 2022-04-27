import { Transaction } from './transaction';

export class User {
  username: string;
  password: string;
  balance: number;
  transactions: Transaction[];
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.balance = 0;
    this.transactions = [];
  }
}
