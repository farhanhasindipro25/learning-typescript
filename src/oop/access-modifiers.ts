// class BankAccount {
//   constructor(
//     readonly id: number,
//     public name: string,
//     protected _balance: number
//   ) {}

//   getBalance() {
//     console.log(`My current balance is ${this._balance} TK.`);
//   }
//   addDeposit(amount: number) {
//     this._balance = this._balance + amount;
//   }
// }

// class StudentAccount extends BankAccount {
//   test() {
//     const test = this._balance;
//   }
// }

// const myAccount = new BankAccount(2, "Farhan", 30);

// // Child classes cannot inherit private variables but can inherit protected variables.
