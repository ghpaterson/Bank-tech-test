const Statement = require("./statement");

describe("formatting the statement", () => {
  it("prints a formatted header", () => {
    const statement = new Statement();
    expect(statement.getHeader()).toEqual(
      "date || credit || debit || balance\n"
    );
  });
});
