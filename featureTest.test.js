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
    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance\n10-01-2023 || 1000.00 ||  || 1000.00"
    );
  });

  it("A deposit of 1000 and 2000 made on 10-01-2023 and 13-01-2023", () => {
    const transOne = new Transaction("credit", 1000, "10-01-2023");
    const transTwo = new Transaction("credit", 2000, "13-01-2023");
    account.addTransaction(transOne);
    account.addTransaction(transTwo);
    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance\n13-01-2023 || 2000.00 ||  || 3000.00\n10-01-2023 || 1000.00 ||  || 1000.00"
    );
  });

  it("A deposit of 1000 and 2000 made on 10-01-2023 and 13-01-2023, withdrawal of 500 on 14-01-2023", () => {
    const transOne = new Transaction("credit", 1000, "10-01-2023");
    const transTwo = new Transaction("credit", 2000, "13-01-2023");
    const transThree = new Transaction("debit", 500, "14-01-2023");
    account.addTransaction(transOne);
    account.addTransaction(transTwo);
    account.addTransaction(transThree);
    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance\n14-01-2023 ||  || 500.00 || 2500.00\n13-01-2023 || 2000.00 ||  || 3000.00\n10-01-2023 || 1000.00 ||  || 1000.00"
    );
  });
});

describe("Error Handling for missing transaction inputs", () => {
  it("when transaction type is missing", () => {
    const account = new Account();
    const deposit = new Transaction(100, "09-01-2023");

    try {
      account.addTransaction(deposit);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "Invalid Transaction: Missing type, amount, date"
      );
    }
  });

  it("when transaction amount is missing", () => {
    const account = new Account();
    const deposit = new Transaction("credit", "09-01-2023");

    try {
      account.addTransaction(deposit);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "Invalid Transaction: Missing type, amount, date"
      );
    }
  });

  it("when transaction date is missing", () => {
    const account = new Account();
    const deposit = new Transaction("credit", 1000);

    try {
      account.addTransaction(deposit);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "Invalid Transaction: Missing type, amount, date"
      );
    }
  });
});

describe("Error Handling for account balance", () => {
  it("when withdrawal exceeds the current balance", () => {
    const account = new Account();
    const deposit = new Transaction("credit", 100, "09-01-2023");
    const withdrawal = new Transaction("debit", 500, "10-01-2023");

    try {
      account.addTransaction(withdrawal);
      account.addTransaction(deposit);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Insufficient funds");
    }
  });
});
