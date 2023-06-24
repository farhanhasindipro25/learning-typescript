class BankAccount1 {
  constructor(
    readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  // getter
  private getBalance(): number {
    return this._balance;
  }

  get balance(): number {
    return this.getBalance();
  }
  // setter
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount1 = new BankAccount1(2, "Farhan", 30);
console.log(myAccount1.balance);
myAccount1.deposit = 40;
console.log(myAccount1.balance);
