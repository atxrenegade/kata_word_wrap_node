First thing I do is make sure I understand the questions. 
Are there any examples of desired output?

It says try to break lines at word boundaries, ** but you have to break words even if there isn't a word boundary, so what is the leeway on before the line break? 2-3 characters?  I going to go with three characters, if the word boundary is more than 3 characters from a line break I will break the word.
***
CORRECTION: No breaking words, only breaking lines unless word is larger than column length then break and add hyphen

input: string and column number
output: wrapped string

requirements: 
-class called Wrapper
-static method named wrap
-lines are NO LONGER than the column number

1st prop0sed solution:
get string and column number from user input or command line
split each string to words array
create a new empty string
create a line character counter
create a word counter

while linecounter + wordcounter + 1 is less than column number add word to new string, else break,

XXX  add in 3 character leeway

POSSIBLE SOLUTIONS:

1. implement as loop 
2. implement recursively
3. implement with regex?

***Is no punctuation a hint to use regex? 

Now I create a hardcoded example on a and play with it on a repl.it
Normally I would google most efficient
but for the sake of this challenge I use a repl to hard code and example.
I like repl.it because it's quick sandbox/env for pretty much every language I need. 

In the repl in code this:

var colNum = 8;
var userStr = "I'm baby echo park forage hell of woke deep v, ethical vegan dreamcatcher. Sriracha ethical offal tbh, af austin single-origin coffee chartreuse poke. Fanny pack blog everyday carry raclette, scenester 90's lo-fi thundercats green juice bespoke beard DIY. Hoodie 8-bit taiyaki marfa. Etsy roof party 8-bit VHS ugh, gentrify trust fund everyday carry slow-carb.";

var userStrArr = userStr.split(" ");
var newStr = "";
var colCount = 0;

for(let i = 0; i < userStrArr.length; i++){
    //console.log('start:' + colCount);
    let word = userStrArr[i];
    let wordLen = userStrArr[i].length;
    
    if ((wordLen + colCount) < colNum){
       newStr += `${word}`;
       colCount += (wordLen + 1)
       //console.log('true');
    } else if (wordLen > (colNum)) {
        newStr+= `\n${word.substring(0,colNum - 1)}-\n${word.substring(colNum - 1)} `;
        colCount = word.substring(colNum - 1).length; 
        //console.log(word.substring(colNum - 1));
        //console.log('break: ' + colCount); 
    } else {
        newStr += `\n${word} `;
        colCount = wordLen;
    }
    //console.log('end: ' + colCount);
}

console.log(newStr);

// corner cases - words larger than the column count
// don't forget to include hyphens in the column count

I'm pretty sure there is a more effective way to do this.

Time to google recursive and regex alternatives:

Hmmmm...okay, many proposed versions on stack overflow but when I actually test them
the don't work, or they are simplified but in my opinion harder to read.  Im far from a regex master so I think I will complete this exercise in revisit it in Ruby. 

In no way do I think that my solution is the most elegant but it's working.







