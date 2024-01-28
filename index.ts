import chalk from "chalk";
import * as inquirer from "inquirer";

//This program will take an amount in one currency and convert it to another currency based on a predefined exchange rate.
type ExchangeRates = Record<string, number>;

const exchangeRates: ExchangeRates = {
  USD: 1, // US Dollar
  EUR: 0.85, // Euro
  PKR: 280, // Pakistan Rupee
};

const promptCurrencyValue = async (): Promise<void> => {
  const questions = [
    {
      type: "input",
      name: "amount",
      message: "Enter the amount to convert:",
      validate: (value: string) => {
        const isValidNumber = !isNaN(parseFloat(value));
        return isValidNumber || "Please enter a valid number";
      },
    },
    {
      type: "input",
      name: "fromCurrency",
      message: "Enter the source currency code(e.g., USD):",
    },
    {
      type: "input",
      name: "toCurrency",
      message: "Enter the target currency code(e.g., PKR):",
    },
  ];

  const answers = await inquirer.prompt(questions);

  try {
    const amount = parseFloat(answers.amount);
    const convertedAmount = convert(
      amount,
      answers.fromCurrency.toUpperCase(),
      answers.toCurrency.toUpperCase()
    );
    console.log(convertedAmount);
  } catch (error: any) {
    console.error(error.message);
  }
};

function convert(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): string {
  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    throw new Error("Invalid currency code");
  }

  const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  return `${chalk.yellow(amount + " " + fromCurrency)} is ${chalk.red(
    (amount * rate).toFixed(2) + toCurrency
  )}`;
}

promptCurrencyValue();
