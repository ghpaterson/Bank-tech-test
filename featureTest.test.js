const Account = require("./account");
const Transaction = require("./transaction");

describe("Adds individual Transactions to the array of Transactions", () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  it("A deposit of 1000 made on 10-01-2023", () => {
    const trans = new Transaction("credit", 1000, "10-01-2023");
    account.addTransaction(trans);
    expect(account.transactions).toEqual([
      { date: "10-01-2023", debit: "", credit: 1000, balance: 1000 },
    ]);
  });

  it("A deposit of 1000 and 2000 made on 10-01-2023 and 13-01-2023", () => {
    const transOne = new Transaction("credit", 1000, "10-01-2023");
    const transTwo = new Transaction("credit", 2000, "13-01-2023");
    account.addTransaction(transOne);
    account.addTransaction(transTwo);
    expect(account.transactions).toEqual([
      { date: "10-01-2023", debit: "", credit: 1000, balance: 1000 },
      { date: "13-01-2023", debit: "", credit: 2000, balance: 3000 },
    ]);
  });

  it("A deposit of 1000 and 2000 made on 10-01-2023 and 13-01-2023, withdrawal of 500 on 14-01-2023", () => {
    const transOne = new Transaction("credit", 1000, "10-01-2023");
    const transTwo = new Transaction("credit", 2000, "13-01-2023");
    const transThree = new Transaction("debit", 500, "14-01-2023");
    account.addTransaction(transOne);
    account.addTransaction(transTwo);
    account.addTransaction(transThree);
    expect(account.transactions).toEqual([
      { date: "10-01-2023", debit: "", credit: 1000, balance: 1000 },
      { date: "13-01-2023", debit: "", credit: 2000, balance: 3000 },
      { date: "14-01-2023", debit: 500, credit: "", balance: 2500 },
    ]);
  });
});
