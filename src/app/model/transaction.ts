export class Transaction {
  public date: Date;
  public id: number;
  constructor(public value: number, public tax: number, public type: string) {
    this.id = Math.round(Math.random() * 1000);
    this.value = value;
    this.tax = tax;
    this.type = type;
    this.date = new Date();
  }
}
