const Transaction = require("./transaction");

class Account {
  constructor() {
    this.transactions = [];
    this.currentBalance = 0;
  }

  addTransaction(transaction) {}
}

module.exports = Account;
