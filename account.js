const Transaction = require("./transaction");

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

    this.transactions.push({
      date: transaction.date,
      debit: transaction.isDebit() ? transaction.amount : "",
      credit: transaction.isDebit() ? "" : transaction.amount,
      balance: this.currentBalance,
    });
  }
}

module.exports = Account;
