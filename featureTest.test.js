const Account = require("./account");
const Transaction = require("./transaction");

describe("Prints a formatted bank statement", () => {
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
});
