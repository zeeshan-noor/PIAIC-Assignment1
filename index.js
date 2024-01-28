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
const chalk_1 = __importDefault(require("chalk"));
const inquirer = __importStar(require("inquirer"));
const displayBalance = (account) => {
    console.log(`Your current balance is ${chalk_1.default.yellow(account.balance.toFixed(2))}`);
};
const withdrawMoney = (account) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = yield inquirer.prompt([
        {
            type: "input",
            name: "amount",
            message: "Enter the amount to withdraw:",
            validate: (input) => {
                const parsedInput = parseFloat(input);
                return ((!isNaN(parsedInput) &&
                    parsedInput > 0 &&
                    parsedInput <= account.balance) ||
                    "Invalid amount");
            },
        },
    ]);
    const withdrawalAmount = parseFloat(amount);
    account.balance -= withdrawalAmount;
    console.log(`You have successfully withdrawn $${withdrawalAmount.toFixed(2)}`);
    displayBalance(account);
});
const depositMoney = (account) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = yield inquirer.prompt([
        {
            type: "input",
            name: "amount",
            message: "Enter the amount to deposit:",
            validate: (input) => {
                const parsedInput = parseFloat(input);
                return (!isNaN(parsedInput) && parsedInput > 0) || "Invalid amount";
            },
        },
    ]);
    const depositAmount = parseFloat(amount);
    account.balance += depositAmount;
    console.log(`You have successfully deposited $${depositAmount.toFixed(2)}`);
    displayBalance(account);
});
const mainFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    const account = {
        balance: 1000,
    };
    while (true) {
        const { choice } = yield inquirer.prompt([
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
                yield withdrawMoney(account);
                break;
            case "Deposit Money":
                yield depositMoney(account);
                break;
            case "Exit":
                console.log("Thank you for using the ATM. Have a great day!");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
});
mainFunction();
