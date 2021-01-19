const ReadlineSync = require('readline-sync');
const Wrapper = require('./wrapper.js');
const { clear } = require("console");

// clear screen, add title and line break
clear();
console.log("**** KATA WORD WRAP NODE CLI ****\n");

do {
  // get user input column number - check input for valid positive integer
  var colNum = ReadlineSync.question('Please enter a column width (as a positive integer)? ');
  // use bitwise unsigned right shift operator and parseFloat to confirm positive integer
} while ((colNum >>> 0 === parseFloat(colNum)) == false);
do { 
  // get user input string - check input for valid string - ie at least one character
  var userStr = ReadlineSync.question('Please enter a string?  ');
} while (userStr == false);

Wrapper.wrap(userStr, colNum);

