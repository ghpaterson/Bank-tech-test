const Transaction = require("./transaction");

describe("Creates a transaction object", () => {
  it("deposit, amount and transaction date", () => {
    const trans = new Transaction("credit", 1000, "10-01-2023");
    expect(trans.type).toBe("credit");
    expect(trans.amount).toBe(1000);
    expect(trans.date).toBe("10-01-2023");
  });

  it("withdrawal, amount and transaction date", () => {
    const trans = new Transaction("debit", 1000, "10-01-2023");
    expect(trans.type).toBe("debit");
    expect(trans.amount).toBe(1000);
    expect(trans.date).toBe("10-01-2023");
  });
});

describe("Is the transaction a deposit or a withdrawal", () => {
  it("Returns true if the transaction is a withdrawal", () => {
    const trans = new Transaction("debit", 1000, "10-01-2023");
    expect(trans.isDebit()).toBe(true);
  });

  it("Returns false if the transaction is a credit", () => {
    const trans = new Transaction("credit", 1000, "10-01-2023");
    expect(trans.isDebit()).toBe(false);
  });
});
