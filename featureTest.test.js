const Account = require("./account");
const Transaction = require("./transaction");
const Statement = require("./statement");

describe("Adds individual Transactions to the array of Transactions", () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });
  let statement;
  beforeEach(() => {
    statement = new Statement(account.transactions);
  });

  it("A deposit of 1000 made on 10-01-2023", () => {
    const trans = new Transaction("credit", 1000, "10-01-2023");
    account.addTransaction(trans);
    expect(statement.formatTransactions()).toEqual([
      "10-01-2023 || 1000 ||  || 1000",
    ]);
  });

  it("A deposit of 1000 and 2000 made on 10-01-2023 and 13-01-2023", () => {
    const transOne = new Transaction("credit", 1000, "10-01-2023");
    const transTwo = new Transaction("credit", 2000, "13-01-2023");
    account.addTransaction(transOne);
    account.addTransaction(transTwo);
    expect(statement.formatTransactions()).toEqual([
      "10-01-2023 || 1000 ||  || 1000",
      "13-01-2023 || 2000 ||  || 3000",
    ]);
  });

  it("A deposit of 1000 and 2000 made on 10-01-2023 and 13-01-2023, withdrawal of 500 on 14-01-2023", () => {
    const transOne = new Transaction("credit", 1000, "10-01-2023");
    const transTwo = new Transaction("credit", 2000, "13-01-2023");
    const transThree = new Transaction("debit", 500, "14-01-2023");
    account.addTransaction(transOne);
    account.addTransaction(transTwo);
    account.addTransaction(transThree);
    expect(statement.formatTransactions()).toEqual([
      "10-01-2023 || 1000 ||  || 1000",
      "13-01-2023 || 2000 ||  || 3000",
      "14-01-2023 ||  || 500 || 2500",
    ]);
  });
});
