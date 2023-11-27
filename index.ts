//Question#1
function calculatePercentage(part: number, whole: number): number {
    if (whole === 0) {
        throw new Error("Cannot calculate percentage when the denominator (whole) is zero.");
    }

    return (part / whole) * 100;
}

const part = 30;
const whole = 150;
const percentage = calculatePercentage(part, whole);

console.log(`The percentage is: ${percentage}%`);
console.log(`################################################################\n`);


//Question#2
function calculateDiscount(price: number): number {
  let discountPercentage = price > 100 ? 10 : 5;
  if (price > 100) {
    discountPercentage = 10;
  } else if (price < 100) {
    discountPercentage = 5;
  }

  const discount = (discountPercentage / 100) * price;
  return discount;
}

const productPrice = 80;
const discountAmount = calculateDiscount(productPrice);

console.log(`Original Price: $${productPrice}`);
console.log(`Discount Percentage: ${productPrice > 100 ? 10 : 5}%`);
console.log(`Discount Amount: $${discountAmount}`);
console.log(`Final Price: $${productPrice - discountAmount}`);
console.log(`################################################################\n`);

//Question#3

function determineAgeCategory(age: number): string {
    if (age >= 0 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

const userAge = 25;
const ageCategory = determineAgeCategory(userAge);

console.log(`User Age: ${userAge}`);
console.log(`Age Category: ${ageCategory}`);
console.log(`################################################################\n`);

//Question#4
function suggestClothingBasedOnTemperature(temperature: number): string {
    if (temperature < 10) {
        return "It's very cold. Please wear a heavy jacket.";
    } else if (temperature >= 10 && temperature < 20) {
        return "It's cool. A light jacket or sweater would be suitable.";
    } else if (temperature >= 20 && temperature < 30) {
        return "It's moderate. A T-shirt or a light sweater should be comfortable.";
    } else {
        return "It's warm. You can wear light and breathable clothes.";
    }
}

// Example usage:
const currentTemperature = 15;
const clothingSuggestion = suggestClothingBasedOnTemperature(currentTemperature);

console.log(`Current Temperature: ${currentTemperature}°C`);
console.log(`Clothing Suggestion: ${clothingSuggestion}`);
console.log(`################################################################\n`);

//Question#5

function checkDivisibility(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
        return `${number} is divisible by both 3 and 5.`;
    } else if (number % 3 === 0) {
        return `${number} is divisible by 3.`;
    } else if (number % 5 === 0) {
        return `${number} is divisible by 5.`;
    } else {
        return `${number} is not divisible by 3 or 5.`;
    }
}
const givenNumber = 15;
const result1 = checkDivisibility(givenNumber);

console.log(`Given Number: ${givenNumber}`);
console.log(`Result: ${result1}`);
console.log(`################################################################\n`);

//Question#6
function isLeapYear(year: number): boolean {
  // Leap years are divisible by 4
  // Exception: years divisible by 100 are not leap years, unless they are also divisible by 400
  return year % 4 === 0;
}

const givenYear = 2024;
const result2 = isLeapYear(givenYear);

console.log(`Given Year: ${givenYear}`);
console.log(`Is Leap Year? ${result2 ? "Yes" : "No"}`);
console.log(`################################################################\n`);

//Question#7
function getDayOfWeek(dayNumber: number): string {
  if (dayNumber >= 1 && dayNumber <= 7) {
    if (dayNumber === 1) {
        return "Monday";
    } else if (dayNumber === 2) {
        return "Tuesday";
    } else if (dayNumber === 3) {
        return "Wednesday";
    } else if (dayNumber === 4) {
        return "Thursday";
    } else if (dayNumber === 5) {
        return "Friday";
    } else if (dayNumber === 6) {
        return "Saturday";
    } else {
        return "Sunday";
    }
  } else {
    return "Invalid day number. Please enter a number between 1 and 7.";
  }
}

const userInput = 3;
const dayOfWeek = getDayOfWeek(userInput);

console.log(`User's Input: ${userInput}`);
console.log(`Day of the Week: ${dayOfWeek}`);
console.log(`################################################################\n`);

//Question#8
function calculateTotalCost(
  unitsConsumed: number,
  costPerUnit: number
): number {
  let baseCost: number;

  if (unitsConsumed <= 100) {
    baseCost = unitsConsumed * costPerUnit;
  } else if (unitsConsumed <= 200) {
    baseCost = unitsConsumed * costPerUnit + unitsConsumed * costPerUnit * 0.1;
  } else if (unitsConsumed <= 300) {
    baseCost = unitsConsumed * costPerUnit + unitsConsumed * costPerUnit * 0.15;
  } else if (unitsConsumed <= 500) {
    baseCost = unitsConsumed * costPerUnit + unitsConsumed * costPerUnit * 0.2;
  } else {
    baseCost = unitsConsumed * costPerUnit + unitsConsumed * costPerUnit * 0.25;
  }

  return baseCost;
}
const unitsConsumed = 250;
const costPerUnit = 1.5;
const totalCost = calculateTotalCost(unitsConsumed, costPerUnit);

console.log(`Units Consumed: ${unitsConsumed}`);
console.log(`Cost per Unit: $${costPerUnit.toFixed(2)}`);
console.log(`Total Cost: $${totalCost.toFixed(2)}`);
console.log(`################################################################\n`);

//Question#9
function evaluateStudentResult(attendance: number, practicalMarks: number, theoryMarks: number): string {
    const attendancePassThreshold = 75;
    const practicalPassThreshold = 50;
    const theoryPassThreshold = 45;

    if (attendance >= attendancePassThreshold && practicalMarks >= practicalPassThreshold && theoryMarks >= theoryPassThreshold) {
        const overallPercentage = (attendance + practicalMarks + theoryMarks) / 3;
        if (overallPercentage >= 80) {
            return "Pass - Grade A";
        } else if (overallPercentage >= 70) {
            return "Pass - Grade B";
        } else if (overallPercentage >= 60) {
            return "Pass - Grade C";
        } else if (overallPercentage >= 50) {
            return "Pass - Grade D";
        } else {
            return "Pass - Grade F";
        }
    } else {
        return "Fail";
    }
}

const studentAttendance = 80;
const studentPracticalMarks = 60;
const studentTheoryMarks = 55;

const result = evaluateStudentResult(studentAttendance, studentPracticalMarks, studentTheoryMarks);

console.log(`Attendance: ${studentAttendance}%`);
console.log(`Practical Marks: ${studentPracticalMarks}%`);
console.log(`Theory Marks: ${studentTheoryMarks}%`);
console.log(`Result: ${result}`);
console.log(`################################################################\n`);
