// Exercise 1: Temperature Check

// Using if else statements to check the temperature
let temperature = 18;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

// Using switch statement
switch (true) {
  case (temperature < 0):
    console.log("It's freezing!");
    break;
  case (temperature >= 0 && temperature <= 15):
    console.log("It's cold.");
    break;
  case (temperature >= 16 && temperature <= 25):
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}


// Exercise 2: Divisibility Check

const number = 18;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// Using switch statement
switch (true) {
  case (number % 2 === 0 && number % 3 === 0):
    console.log("Divisible by both.");
    break;
  case (number % 2 === 0):
    console.log("Divisible by 2.");
    break;
  case (number % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}


// Exercise 3: For Loops

// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // Print all even numbers between 1 and 20
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
  // Calculate the sum of all numbers from 1 to 100
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log("Sum from 1 to 100: " + sum);
  
  // Print each element of an array
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  
  // Find and print the largest number in an array
  const moreNumbers = [3, 7, 2, 5, 10, 6];
  let largest = moreNumbers[0];
  for (let i = 1; i < moreNumbers.length; i++) {
    if (moreNumbers[i] > largest) {
      largest = moreNumbers[i];
    }
  }
  console.log("Largest number: " + largest);

  
// Exercise 4: While Loops

// Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Print all even numbers between 1 and 20
i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// Calculate the sum of all numbers from 1 to 100
let sumWhile = 0;
i = 1;
while (i <= 100) {
  sumWhile += i;
  i++;
}
console.log("Sum from 1 to 100 (while): " + sumWhile);

// Print all multiples of 5 less than 50
i = 5;
while (i < 50) {
  console.log(i);
  i += 5;
}


