class Wrapper {
  static wrap(userStr, colNum) {
    var wordArr = userStr.split(" ");
    var newStr = "";
    // variable to track column index
    var colIdx = 0; 
    // variable to track word index in word array
    var arrIdx = 0;

    function breakWord(colNum, colIdx, arrIdx, word = null) {
      // if word to parse is not passed in, set to first word in word array
      word = word || wordArr[arrIdx];

      // shortcut for word length
      if (word != null)  var wordLen = word.length;

      // check last char for existing /n char to avoid duplicates
      if (colIdx > colNum || (colIdx + wordLen) > colNum) {
        var testChar = newStr.slice(-1);
        if (testChar != '\n') newStr += '\n';
        colIdx = 0;
      }

      // parse and break words larger than specified column width
      if (wordLen > colNum) {
        // break word
        newStr += `${word.substring(0, colNum - 1)}-\n`;
        // set column index
        colIdx = word.substring(colNum - 1).length;
        // create new 'sub-word' from remaining characters
        word = word.substring(colNum - 1);
        // check for words smaller than column width
      } else if (wordLen <= colNum && word != undefined) {
        // add word to string and space to string, update col and arr index
        // set to next word
        newStr += `${word} `;
        colIdx += wordLen + 1;
        arrIdx++;
        word = wordArr[arrIdx];
      } else {
        // return blank string or end of word array
        return;
      }
      
      // continue parsing the word array recursively to the end
      if (arrIdx < wordArr.length) breakWord(colNum, colIdx, arrIdx, word);
    }

    // function call to nested function
    breakWord(colNum, colIdx, arrIdx);
    // output the result
    console.log(newStr);
  }  
}

module.exports = Wrapper;