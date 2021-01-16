var Wrapper = require('./wrapper');
var ReadlineSync = require('readline-sync');
var colNum = ReadlineSync.question('Please column width? ');
var userStr = ReadlineSync.question('Please enter a string?  ');
Wrapper.wrap(userStr, colNum);