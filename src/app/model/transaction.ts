export class Transaction {
  constructor(
    public value: number,
    public tax: number,
    public type: string,
    public date: Date
  ) {
    this.value = value;
    this.tax = tax;
    this.type = type;
    this.date = date;
  }
}
