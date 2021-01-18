var Wrapper = require('./wrapper');
var ReadlineSync = require('readline-sync');
// TODO add title and line break
var colNum = ReadlineSync.question('Please column width? ');
// TODO add input validation - check input for valid positive integer
var userStr = ReadlineSync.question('Please enter a string?  ');
// TODO add input validation - check input for valid string - ie at least one character
Wrapper.wrap(userStr, colNum);

