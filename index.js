"use strict";
// Question#1
const getDayOfWeek = (dayNumber) => {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Weekend";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
};
const dayNumber = 3;
const result = getDayOfWeek(dayNumber);
console.log(`For day number ${dayNumber}, the day of the week is: ${result}`);
console.log("/**********************************/\n");
// Question#2
const correctAccountNumber = 123456;
const correctPIN = 1234;
let accountBalance = 1000;
function withdraw(accountNumber, pin, amount) {
    if (accountNumber === correctAccountNumber) {
        if (pin === correctPIN) {
            if (amount <= accountBalance) {
                accountBalance -= amount;
                return `Withdrawal successful. Remaining balance: ${accountBalance}`;
            }
            else {
                return "Insufficient balance";
            }
        }
        else {
            return "Incorrect PIN";
        }
    }
    else {
        return "Incorrect account number";
    }
}
console.log(withdraw(123456, 1234, 500));
console.log(withdraw(654321, 1234, 500));
console.log(withdraw(123456, 4321, 500));
console.log(withdraw(123456, 1234, 1500));
console.log("/**********************************/\n");
// Question#3
function greetBasedOnTimeWithIfStatements(hours) {
    let greeting;
    if (hours >= 0 && hours < 12) {
        greeting = "Good Morning (If-Statements)";
    }
    else if (hours >= 12 && hours < 18) {
        greeting = "Good Afternoon (If-Statements)";
    }
    else if (hours >= 18 && hours <= 23) {
        greeting = "Good Evening (If-Statements)";
    }
    else {
        greeting = "Invalid time (If-Statements)";
    }
    return greeting;
}
function greetBasedOnTimeWithSwitchStatements(hours) {
    let greeting;
    switch (true) {
        case hours >= 0 && hours < 12:
            greeting = "Good Morning (Switch-Statement)";
            break;
        case hours >= 12 && hours < 18:
            greeting = "Good Afternoon (Switch-Statement)";
            break;
        case hours >= 18 && hours <= 23:
            greeting = "Good Evening (Switch-Statement)";
            break;
        default:
            greeting = "Invalid time (Switch-Statement)";
    }
    return greeting;
}
const currentHour = new Date().getHours();
console.log(`The greet Based On Time With If-statements is: ${greetBasedOnTimeWithIfStatements(currentHour)}`);
console.log(`The greet Based On Time With Switch-Statements is: ${greetBasedOnTimeWithSwitchStatements(currentHour)}`);
console.log("/**********************************/\n");
//Question#4
function getStudyLevelWithIfStatements(classNumber) {
    let studyLevel;
    // Using if-else if statements
    if (classNumber >= 1 && classNumber <= 5) {
        studyLevel = "Playgroup to Kindergarten (If-Statements)";
    }
    else if (classNumber >= 6 && classNumber <= 8) {
        studyLevel = "Middle School (If-Statements)";
    }
    else if (classNumber >= 9 && classNumber <= 10) {
        studyLevel = "Matriculation (If-Statements)";
    }
    else if (classNumber >= 11 && classNumber <= 12) {
        studyLevel = "Intermediate (If-Statements)";
    }
    else if (classNumber >= 13 && classNumber <= 16) {
        studyLevel = "Undergraduate to Master's (If-Statements)";
    }
    else if (classNumber >= 17 && classNumber <= 20) {
        studyLevel = "PhD (If-Statements)";
    }
    else {
        studyLevel = "Unknown (If-Statements)";
    }
    return studyLevel;
}
function getStudyLevelWithSwitchStatements(classNumber) {
    let studyLevel;
    // Using switch statement
    switch (classNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            studyLevel = "Playgroup to Kindergarten (Switch-Statement)";
            break;
        case 6:
        case 7:
        case 8:
            studyLevel = "Middle School (Switch-Statement)";
            break;
        case 9:
        case 10:
            studyLevel = "Matriculation (Switch-Statement)";
            break;
        case 11:
        case 12:
            studyLevel = "Intermediate (Switch-Statement)";
            break;
        case 13:
        case 14:
        case 15:
        case 16:
            studyLevel = "Undergraduate to Master's (Switch-Statement)";
            break;
        case 17:
        case 18:
        case 19:
        case 20:
            studyLevel = "PhD (Switch-Statement)";
            break;
        default:
            studyLevel = "Unknown (Switch-Statement)";
    }
    return studyLevel;
}
const classNumber = 12;
console.log(`For class ${classNumber}, the study level is: ${getStudyLevelWithIfStatements(classNumber)}`);
console.log(`For class ${classNumber}, the study level is: ${getStudyLevelWithSwitchStatements(classNumber)}`);
console.log("/**********************************/\n");
//Question#5
function checkNumberStatus(number) {
    if (number > 0) {
        return "Positive";
    }
    else if (number === 0) {
        return "Zero";
    }
    else {
        return "Negative";
    }
}
const testNumber = 42;
console.log(`The number ${testNumber} is: ${checkNumberStatus(testNumber)}`);
console.log("/**********************************/\n");
//Question#5
function findGreatestAndSmallest(a, b, c, d, e) {
    // Find the greatest number
    let greatest = a;
    if (b > greatest) {
        greatest = b;
    }
    if (c > greatest) {
        greatest = c;
    }
    if (d > greatest) {
        greatest = d;
    }
    if (e > greatest) {
        greatest = e;
    }
    // Find the smallest number
    let smallest = a;
    if (b < smallest) {
        smallest = b;
    }
    if (c < smallest) {
        smallest = c;
    }
    if (d < smallest) {
        smallest = d;
    }
    if (e < smallest) {
        smallest = e;
    }
    return { greatest, smallest };
}
// Example usage
const num1 = 15, num2 = 7, num3 = 22, num4 = 10, num5 = 35; // Change these numbers as needed
const { greatest, smallest } = findGreatestAndSmallest(num1, num2, num3, num4, num5);
console.log(`The greatest number is: ${greatest}`);
console.log(`The smallest number is: ${smallest}`);
console.log("/**********************************/\n");
