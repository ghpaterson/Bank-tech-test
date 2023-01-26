const Account = require("./account");

describe("Creates an Account Object", () => {
  it("creates an empty transactions array and a current balance of ZERO", () => {
    const account = new Account();
    expect(account.transactions).toEqual([]);
    expect(account.currentBalance).toEqual(0);
  });
});
