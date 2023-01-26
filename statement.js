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

  printStatement() {
    const formattedTransactions = this.formatTransactions();
    return this.getHeader() + formattedTransactions.reverse().join("\n");
  }
}

module.exports = Statement;
