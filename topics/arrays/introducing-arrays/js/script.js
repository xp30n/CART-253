/**
 * Introducing Arrays
 * 
 * Aliyah R.W.
 */

let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

let emptyArray = []; 

// two different ways to declare arrays ^^

let firstDigitOfPi = piArray[0]; // if we want to assign the first digit of the array, we declare what position that first digit is in.

/**
 * Example:
 * 
 * 0 1 2 3 4 5 6 7 8 9 < These numbers are indexes. It's the position of each number
 * 3 1 4 1 5 9 2 6 5 3 < These numbers are elements. 
 * 
 * If we wanted to NOW the third digit of pi, in "piArray", we would put the number under 2, which is 4
 * 
 * THIS IS HOW ARRAYS ARE LAID OUT !! 
 */

// Changing the contents of arrays

piArray[5] = 8; // this tells us that the digit in position 5 is to be changed to 8 

let index = 7;
let eighthDigitOfPi = piArray[index]; // 6

let apple = 2;
let banana = 6;
let carrot = 4;
let nutritionalArray = [apple, banana, carrot]; // [2, 6, 4]

let numberOfDigitsOfPie = piArray.length; // length is a property of the array
// this will give us 10, meaning there are 10 digits

let numberOfSnacks = nutritionalArray.length; // this will give us 3