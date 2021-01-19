const ReadlineSync = require('readline-sync');
const Wrapper = require('./wrapper.js');
const { clear } = require("console");

// clear screen, add title and line break
clear();
console.log("**** KATA WORD WRAP NODE CLI ****\n");
// TODO add input validation - check input for valid positive integer
var colNum = ReadlineSync.question('Please column width? ');

var userStr = ReadlineSync.question('Please enter a string?  ');
// TODO add input validation - check input for valid string - ie at least one character
Wrapper.wrap(userStr, colNum);

