export class Transaction {
  public date: Date;
  constructor(public value: number, public tax: number, public type: string) {
    this.value = value;
    this.tax = tax;
    this.type = type;
    this.date = new Date();
  }
}
