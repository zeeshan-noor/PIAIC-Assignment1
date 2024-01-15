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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// Function to perform arithmetic operations
const performOperation = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            throw new Error("Invalid operator");
    }
};
// Function to display result with colored output
const displayResult = (result, operator) => {
    let color = chalk_1.default.greenBright;
    switch (operator) {
        case "+":
            color = chalk_1.default.green;
            break;
        case "-":
            color = chalk_1.default.red;
            break;
        case "*":
            color = chalk_1.default.yellow;
            break;
        case "/":
            color = chalk_1.default.blue;
            break;
    }
    console.log(color(`Result: ${result}`));
};
// Main calculator function
const calculator = () => __awaiter(void 0, void 0, void 0, function* () {
    const questions = [
        {
            type: "input",
            name: "num1",
            message: "Enter the first number:",
            validate: (value) => !isNaN(Number(value)) || "Please enter a valid number",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the second number:",
            validate: (value) => !isNaN(Number(value)) || "Please enter a valid number",
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operation:",
            choices: ["+", "-", "*", "/"],
            // loop: true,
        },
    ];
    try {
        inquirer
            .prompt(questions)
            .then((answers) => {
            const { num1, num2, operator } = answers;
            // console.log("answer", answers);
            const result = performOperation(parseFloat(num1), parseFloat(num2), operator);
            displayResult(result, operator);
        })
            .catch((err) => console.error(chalk_1.default.yellowBright("Error:", err.message)));
    }
    catch (error) {
        console.error(chalk_1.default.red("Error:", error.message));
    }
});
// Run the calculator
calculator();
