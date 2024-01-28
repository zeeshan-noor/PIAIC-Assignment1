"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
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
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getUserGuessNumber = () => __awaiter(void 0, void 0, void 0, function* () {
    const { userGuess } = yield inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: "Enter your guess:",
            validate: (input) => {
                const parsedInput = parseInt(input, 10);
                return !isNaN(parsedInput) || "Please enter a valid number.";
            },
        },
    ]);
    return userGuess;
});
const playNumberGuessingGame = () => __awaiter(void 0, void 0, void 0, function* () {
    const minNumber = 1;
    const maxNumber = 100;
    const targetNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;
    console.log("Welcome to the Number Guessing Game!");
    console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}.`);
    while (true) {
        const guess = yield getUserGuessNumber();
        attempts++;
        if (guess < targetNumber) {
            console.log("Too low! Try again.");
        }
        else if (guess > targetNumber) {
            console.log("Too high! Try again.");
        }
        else {
            console.log(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
            break;
        }
    }
});
playNumberGuessingGame();
