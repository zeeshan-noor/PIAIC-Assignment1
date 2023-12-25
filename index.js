"use strict";
// User Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array. in typescript
const insertValueAtIndex = (arr, index, value) => {
    arr.splice(index, 0, value);
    return arr;
};
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertValueAtIndex(originalArray, 2, 99);
console.log(modifiedArray);
console.log("/**********************************/\n");
//Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation in typescript
const shoppingCart = [];
const addItem = (item) => {
    shoppingCart.push(item);
    printCart();
};
const removeItem = (itemName) => {
    const index = shoppingCart.findIndex((item) => item.name === itemName);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        printCart();
    }
    else {
        console.log(`${itemName} not found in the cart.`);
    }
};
const updateQuantity = (itemName, newQuantity) => {
    const index = shoppingCart.findIndex((item) => item.name === itemName);
    if (index !== -1) {
        shoppingCart[index].quantity = newQuantity;
        printCart();
    }
    else {
        console.log(`${itemName} not found in the cart.`);
    }
};
const printCart = () => {
    console.log("Cart Contents:");
    shoppingCart.map((item) => {
        console.log(`${item.name} - Quantity: ${item.quantity} - Price: $${item.price}`);
    });
    console.log("----------");
};
addItem({ name: "ProductA", price: 10, quantity: 2 });
addItem({ name: "ProductB", price: 20, quantity: 1 });
removeItem("ProductA");
updateQuantity("ProductB", 3);
console.log("/**********************************/\n");
//Write a program that uses a while loop to print the first 25 integers.
let count = 1;
while (count <= 25) {
    console.log(count);
    count++;
}
console.log("/**********************************/\n");
// Write a program that uses a while loop to print the first 10 even numbers.
let count1 = 1;
let evenCount = 0;
while (evenCount < 10) {
    if (count1 % 2 === 0) {
        console.log(count1);
        evenCount++;
    }
    count1++;
}
console.log("/**********************************/\n");
//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
const calculateFactorial = (num) => {
    if (num < 0) {
        throw new Error("Please provide a positive integer.");
    }
    let factorial = 1;
    let currentNumber = 1;
    while (currentNumber <= num) {
        factorial *= currentNumber;
        currentNumber++;
    }
    return factorial;
};
const result = calculateFactorial(5);
console.log(`Factorial: ${result}`);
console.log("/**********************************/\n");
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
const removeNegativeNumbers = (numbers) => {
    const nonNegativeNumbers = numbers.filter((number) => number >= 0);
    return nonNegativeNumbers;
};
const originalArray1 = [1, -2, 3, -4, 5, -6];
const newArray1 = removeNegativeNumbers(originalArray1);
console.log("Original Array:", originalArray1);
console.log("Array without Negative Numbers:", newArray1);
console.log("/**********************************/\n");
//Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function calculateSum(numbers) {
    let sum = 0;
    let index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}
const numbersArray = [1, 2, 3, 4, 5];
const resultSum = calculateSum(numbersArray);
console.log("Array:", numbersArray);
console.log("Sum of Numbers:", resultSum);
console.log("/**********************************/\n");
//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};
const convertTemperatures = (celsiusTemperatures) => {
    const fahrenheitTemperatures = [];
    let i = 0;
    while (i < celsiusTemperatures.length) {
        const fahrenheit = celsiusToFahrenheit(celsiusTemperatures[i]);
        fahrenheitTemperatures.push(fahrenheit);
        i++;
    }
    return fahrenheitTemperatures;
};
const inputTemperatures = [20, 25, 30, 35];
const convertedTemperatures = convertTemperatures(inputTemperatures);
console.log("Celsius Temperatures:", inputTemperatures);
console.log("Converted Temperatures in Fahrenheit:", convertedTemperatures);
console.log("/**********************************/\n");
// Write a program to remove all the odd numbers from an array.
const removeOddNumbers = (numbers) => {
    const evenNumbers = numbers.filter((number) => number % 2 === 0);
    return evenNumbers;
};
const originalArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray2 = removeOddNumbers(originalArray2);
console.log("Original Array:", originalArray2);
console.log("Array without Odd Numbers:", newArray2);
console.log("/**********************************/\n");
