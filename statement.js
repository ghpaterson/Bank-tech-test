class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  getHeader() {
    return "date || credit || debit || balance\n";
  }

  formatTransactions() {
    return this.transactions.map(
      (statement) =>
        `${statement.date} || ${statement.credit} || ${statement.debit} || ${statement.balance}`
    );
  }
}

module.exports = Statement;
