export class Donation {
  date: Date;
  constructor(public value: number, public username: string) {
    this.value = value;
    this.username = username;
    this.date = new Date();
  }
}
