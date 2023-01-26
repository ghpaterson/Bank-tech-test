# Bank-tech-test

Simple Javascript banking application allowing users to make transactions and view bank statements

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Installation/Usage Instructions

To download and initialise the project:

```sh
$ git clone https://github.com/ChrisHutchinson1982/bank_tech_test.git
$ cd bank_tech_test
$ npm install

```

To run the code:

```js
// To launch the node REPL

$ node

// Step 1 - require Account class

$ const Account = require("./lib/account");

// Step 2 - create new instance of account

$ const account = new Account();

// Step 3 - require Transaction class

$ const Transaction = require("./lib/transaction");

// Step 4 - create new instance of Transaction(type, amount, date)
  // type should be either "credit" or "debit"
  // amount should be a positive number
  // date should be "dd/mm/yyyy" format

$ const transaction = new Transaction("credit", 1000, "10/01/2023");

// Step 5 - add transaction to account instance
  // note: will throw pre-built errors if type, amount, date formats are invalid

$ account.add(transaction);

// Repeat Steps 4 & 5 with new details as required

// Step 6 - console log to view statement

$ console.log(account.printStatement());

// To exit the node REPL

$ Ctrl+D

```

To run the tests:

```js
// run tests
$ jest
// run test and check coverage
$ jest --coverage

```
