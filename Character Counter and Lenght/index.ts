import chalk from "chalk";
import * as inquirer from "inquirer";
// Count character and find length of character.

const countCharacterHandler = (character: string) => {
  let words = character.split(" ").length;
  let characterLength = character.trim().length;
  return { words, characterLength };
};

const countCharacter = async () => {
  const { characterValue } = await inquirer.prompt([
    {
      type: "input",
      name: "characterValue",
      message: "Enter character value to count character.",
    },
  ]);
  let { words, characterLength } = countCharacterHandler(characterValue);
  console.log(`Word count: ${words}`);
  console.log(`Character count: ${characterLength}`);
};

countCharacter();
