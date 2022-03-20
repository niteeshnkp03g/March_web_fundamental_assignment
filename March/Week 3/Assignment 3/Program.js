/*
    Program to write the first 10 numbers.
*/

for (var input = 1; input <= 10; input++) {
  console.log(input);
}

/*
    Program to calculate the sum of first 10 numbers
*/

let s = 0;
for (i = 1; i <= 10; i++) {
  s = s + i;
}
console.log("Sum of first 10 natural numbers:" + s);

/*
    Write a program to print day of week name using switch case
*/
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("The day is:", day);

/*
    Write a program print total number of days in a month using switch case.
*/

let year = 2022;
let month = 3;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // invalid month
}
console.log(dayCount);
