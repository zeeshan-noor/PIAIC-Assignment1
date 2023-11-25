"use strict";
//Calculate your age based on the current year and your birth year.
const currentYear = 2023;
const birthYear = 1997;
const age = currentYear - birthYear;
console.log(`I'm ${age} years old`);
//Write a program that calculates the area of a rectangle using length and width variables.
const lengthOfRectangle = 10;
const widthOfRectangle = 5;
const areaOfRectangle = lengthOfRectangle * widthOfRectangle;
console.log(`Area of a rectangle ${areaOfRectangle}`);
//Write a program that calculates the area of a circle.
const radius = 5;
const areaOfCircle = Math.PI * radius * radius;
console.log(`area of a circle ${areaOfCircle}`);
//Write a program that calculates the area of the cube.
const lengthOfCube = 10;
const areaOfCube = lengthOfCube ** 3;
console.log(`Area of a cube ${areaOfCube}`);
//Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
const fahrenheit = 30;
const celsius = 0;
const fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
const celsiusToFahrenheit = (celsius * 9) / 5 + 32;
console.log(`Temperature in Celsius: ${fahrenheitToCelsius}`);
console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit}`);
// Convert a given number of seconds into minutes and seconds using variables.
const seconds = 60;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;
const weeks = days / 7;
const months = days / 30;
console.log(`Seconds into minutes: ${minutes}`);
//Write a program that calculates the percentage.
const marks = 90;
const percentage = marks / 100;
console.log(`Percentage: ${percentage}`);
//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
const daysIn = 35;
const weeksIn = daysIn / 7;
console.log(`Days in weeks: ${weeksIn}`);
//Increment and Decrement Operator:
// - Q1:
let a = 2;
let b = ++a * 2;
console.log("Q#1", b);
//- Q2
let x = 5;
let y = x-- + 2;
console.log("Q#2", y);
// - Q3
let i = 3;
let j = ++i + i++ + ++i;
console.log("Q#3", j);
// - Q4
let m = 2;
let n = ++m * m++ * --m;
console.log("Q#4", n);
// - Q5
let q = 3;
let w = 5;
let result = ++q + w-- - q++ + --w;
console.log("Q#5", result);
// - Q6
let e = 2;
let r = 4;
let p = e++ + ++r - --e + r--;
console.log("Q#6", e, r, p);
//  - Q7
let t = 5;
let g = 3;
let c = 2;
let d = 7;
let result1 = (++t * (g-- + c)) / --d;
console.log("Q#7", t, g, c, d, result1);
//  - Q8
let l = 2;
let k = 3;
let o = 4;
let result3 = (l++ * (--k + l)) / (o-- - k);
console.log("Q#7", l, k, o, result3);
