const Transaction = require("./transaction");
const Statement = require("./statement");

class Account {
  constructor() {
    this.transactions = [];
    this.currentBalance = 0;
  }

  updateBalance(amount, isDebit) {
    this.currentBalance += isDebit ? -amount : amount;
    return this.currentBalance;
  }

  addTransaction(transaction) {
    this.updateBalance(transaction.amount, transaction.isDebit());

    transaction.amount = parseFloat(transaction.amount).toFixed(2);

    this.transactions.push({
      date: transaction.date,
      debit: transaction.isDebit() ? transaction.amount : "",
      credit: transaction.isDebit() ? "" : transaction.amount,
      balance: parseFloat(this.currentBalance).toFixed(2),
    });
  }
}
const account = new Account();
const transOne = new Transaction("credit", 1000, "10-01-2023");
const transTwo = new Transaction("credit", 2000, "13-01-2023");
const transThree = new Transaction("debit", 500, "14-01-2023");
account.addTransaction(transOne);
account.addTransaction(transTwo);
account.addTransaction(transThree);
const statement = new Statement(account.transactions);
console.log(statement.printStatement());

module.exports = Account;
