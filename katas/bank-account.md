# Bank account kata

## Requirements
Develop a simple bank application with the following features:
- Deposit money into the account.
- Withdraw money from the account.
- Print a bank statement with all transactions to the console.

## Constraints

1. You cannot change the signature of the public interface (the class AccountService).
```java
public class AccountService {
  public void deposit(int amount) {
  }

  public void withdraw(int amount) {
  }

  public void printStatement() {
  }
}
```

2. To keep it simple you can use strings and integers for dates and amounts.
3. Do not worry about spacing in the statement printed on the console.

## Acceptance test

```java
@Test
public void should_print_statement_containing_all_transactions() {
  account.deposit(1000);
  account.withdraw(100);
  account.deposit(500);

  account.printStatement();

  verify(console).printLine("DATE | AMOUNT | BALANCE");
  verify(console).printLine("10/04/2014 | 500 | 1400");
  verify(console).printLine("02/04/2014 | -100 | 900");
  verify(console).printLine("01/04/2014 | 1000 | 1000");
}
```

## Tip
Start writing the acceptance test but then move to unit tests, and at the end focus again on the acceptance test.
