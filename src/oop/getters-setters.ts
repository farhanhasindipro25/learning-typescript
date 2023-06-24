class BankAccount {
  constructor(
    readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  // getter
  get balance() {
    return this._balance;
  }
  // setter
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(2, "Farhan", 30);
console.log(myAccount.balance);
myAccount.deposit = 40;
console.log(myAccount.balance);
