var Wrapper = require("./Wrapper");
var readlineSync = require('readline-sync');
var colNum = readlineSync.question('Please column width? ');
var userStr = readlineSync.question('Please enter a string?  ');
Wrapper.wrap(userStr, colNum);