import chalk from "chalk";
import * as inquirer from "inquirer";



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

