import chalk from "chalk";
import * as inquirer from "inquirer";

// //This program will take an amount in one currency and convert it to another currency based on a predefined exchange rate.
// type ExchangeRates = Record<string, number>;

// const exchangeRates: ExchangeRates = {
//   USD: 1, // US Dollar
//   EUR: 0.85, // Euro
//   PKR: 280, // Pakistan Rupee
// };

// const promptCurrencyValue = async (): Promise<void> => {
//   const questions = [
//     {
//       type: "input",
//       name: "amount",
//       message: "Enter the amount to convert:",
//       validate: (value: string) => {
//         const isValidNumber = !isNaN(parseFloat(value));
//         return isValidNumber || "Please enter a valid number";
//       },
//     },
//     {
//       type: "input",
//       name: "fromCurrency",
//       message: "Enter the source currency code(e.g., USD):",
//     },
//     {
//       type: "input",
//       name: "toCurrency",
//       message: "Enter the target currency code(e.g., PKR):",
//     },
//   ];

//   const answers = await inquirer.prompt(questions);

//   try {
//     const amount = parseFloat(answers.amount);
//     const convertedAmount = convert(
//       amount,
//       answers.fromCurrency.toUpperCase(),
//       answers.toCurrency.toUpperCase()
//     );
//     console.log(convertedAmount);
//   } catch (error: any) {
//     console.error(error.message);
//   }
// };

// function convert(
//   amount: number,
//   fromCurrency: string,
//   toCurrency: string
// ): string {
//   if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
//     throw new Error("Invalid currency code");
//   }

//   const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
//   return `${chalk.yellow(amount + " " + fromCurrency)} is ${chalk.red(
//     (amount * rate).toFixed(2) + toCurrency
//   )}`;
// }

// promptCurrencyValue();

// Number Guessing Game
const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getUserGuessNumber = async (): Promise<number> => {
  const { userGuess } = await inquirer.prompt([
    {
      type: "input",
      name: "userGuess",
      message: "Enter your guess:",
      validate: (input: string) => {
        const parsedInput = parseInt(input, 10);
        return !isNaN(parsedInput) || "Please enter a valid number.";
      },
    },
  ]);

  return userGuess
};
const playNumberGuessingGame = async (): Promise<void> => {
  const minNumber = 1;
  const maxNumber = 100;
  const targetNumber = generateRandomNumber(minNumber, maxNumber);
  let attempts = 0;

  console.log("Welcome to the Number Guessing Game!");
  console.log(
    `I'm thinking of a number between ${minNumber} and ${maxNumber}.`
  );

  while (true) {
    const guess = await getUserGuessNumber();
    attempts++;

    if (guess < targetNumber) {
      console.log("Too low! Try again.");
    } else if (guess > targetNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(
        `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`
      );
      break;
    }
  }
};

playNumberGuessingGame();
