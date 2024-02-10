import chalk from "chalk";
import * as inquirer from "inquirer";

// ATM - PROGRAM
interface Account {
  balance: number;
}

const displayBalance = (account: Account): void => {
  console.log(
    `Your current balance is ${chalk.yellow(account.balance.toFixed(2))}`
  );
};

const withdrawMoney = async (account: Account): Promise<void> => {
  const { amount } = await inquirer.prompt([
    {
      type: "input",
      name: "amount",
      message: "Enter the amount to withdraw:",
      validate: (input: string) => {
        const parsedInput = parseFloat(input);
        return (
          (!isNaN(parsedInput) &&
            parsedInput > 0 &&
            parsedInput <= account.balance) ||
          "Invalid amount"
        );
      },
    },
  ]);

  const withdrawalAmount = parseFloat(amount);
  account.balance -= withdrawalAmount;

  console.log(
    `You have successfully withdrawn $${withdrawalAmount.toFixed(2)}`
  );
  displayBalance(account);
};

const depositMoney = async (account: Account): Promise<void> => {
  const { amount } = await inquirer.prompt([
    {
      type: "input",
      name: "amount",
      message: "Enter the amount to deposit:",
      validate: (input: string) => {
        const parsedInput = parseFloat(input);
        return (!isNaN(parsedInput) && parsedInput > 0) || "Invalid amount";
      },
    },
  ]);

  const depositAmount = parseFloat(amount);
  account.balance += depositAmount;

  console.log(`You have successfully deposited $${depositAmount.toFixed(2)}`);
  displayBalance(account);
};

const mainFunction = async (): Promise<void> => {
  const account: Account = {
    balance: 1000,
  };

  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Check Balance", "Withdraw Money", "Deposit Money", "Exit"],
      },
    ]);

    switch (choice) {
      case "Check Balance":
        displayBalance(account);
        break;

      case "Withdraw Money":
        await withdrawMoney(account);
        break;

      case "Deposit Money":
        await depositMoney(account);
        break;

      case "Exit":
        console.log("Thank you for using the ATM. Have a great day!");
        return;

      default:
        console.log("Invalid choice. Please try again.");
    }
  }
};

mainFunction();
