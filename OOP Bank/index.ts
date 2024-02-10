import chalk from "chalk";
import * as inquirer from "inquirer";

class Account {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        chalk.green(`Deposited: ${amount} - New Balance: ${this.balance}`)
      );
    } else {
      console.log(chalk.red("Invalid deposit amount."));
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        chalk.yellow(`Withdrawn: ${amount} - New Balance: ${this.balance}`)
      );
    } else {
      console.log(
        chalk.red("Invalid withdrawal amount or insufficient funds.")
      );
    }
  }
}

class Bank {
  private accounts: { [accountNumber: string]: Account };

  constructor() {
    this.accounts = {};
  }

  public createAccount(accountNumber: string, initialBalance: number): void {
    if (!this.accounts[accountNumber]) {
      const newAccount = new Account(initialBalance);
      this.accounts[accountNumber] = newAccount;
      console.log(
        chalk.green(`Account created successfully for ${accountNumber}.`)
      );
    } else {
      console.log(chalk.red("Account already exists."));
    }
  }

  public getAccount(accountNumber: string): Account | undefined {
    return this.accounts[accountNumber];
  }
}

const bank = new Bank();

function mainMenu(): void {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices: [
          "Create Account",
          "Deposit",
          "Withdraw",
          "Check Balance",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Create Account":
          createAccount();
          break;
        case "Deposit":
          performTransaction("deposit");
          break;
        case "Withdraw":
          performTransaction("withdraw");
          break;
        case "Check Balance":
          checkBalance();
          break;
        case "Exit":
          console.log(chalk.blue("Goodbye!"));
          break;
        default:
          console.log(chalk.red("Invalid action."));
          mainMenu();
      }
    });
}

function createAccount(): void {
  inquirer
    .prompt([
      {
        type: "input",
        name: "accountNumber",
        message: "Enter account number:",
        validate: (value) =>
          value.trim() !== "" ? true : "Please enter a valid account number.",
      },
      {
        type: "number",
        name: "initialBalance",
        message: "Enter initial balance:",
        validate: (value) =>
          value >= 0 ? true : "Please enter a valid initial balance.",
      },
    ])
    .then((answers) => {
      bank.createAccount(answers.accountNumber, answers.initialBalance);
      mainMenu();
    });
}

function performTransaction(transactionType: "deposit" | "withdraw"): void {
  inquirer
    .prompt([
      {
        type: "input",
        name: "accountNumber",
        message: "Enter account number:",
        validate: (value) =>
          value.trim() !== "" ? true : "Please enter a valid account number.",
      },
      {
        type: "number",
        name: "amount",
        message: `Enter ${
          transactionType === "deposit" ? "deposit" : "withdrawal"
        } amount:`,
        validate: (value) =>
          value > 0
            ? true
            : `Please enter a valid ${
                transactionType === "deposit" ? "deposit" : "withdrawal"
              } amount.`,
      },
    ])
    .then((answers) => {
      const account = bank.getAccount(answers.accountNumber);
      if (account) {
        if (transactionType === "deposit") {
          account.deposit(answers.amount);
        } else {
          account.withdraw(answers.amount);
        }
      } else {
        console.log(chalk.red("Account not found."));
      }
      mainMenu();
    });
}

function checkBalance(): void {
  inquirer
    .prompt([
      {
        type: "input",
        name: "accountNumber",
        message: "Enter account number:",
        validate: (value) =>
          value.trim() !== "" ? true : "Please enter a valid account number.",
      },
    ])
    .then((answers) => {
      const account = bank.getAccount(answers.accountNumber);
      if (account) {
        console.log(
          chalk.blue(
            `Current balance for ${
              answers.accountNumber
            }: ${account.getBalance()}`
          )
        );
      } else {
        console.log(chalk.red("Account not found."));
      }
      mainMenu();
    });
}

mainMenu();
