class Wrapper {
  static wrap(userStr, colNum) {
    var userStrArr = userStr.split(" ");
    var newStr = "";
    var colCount = 0;

    for (let i = 0; i < userStrArr.length; i++) {
      let word = userStrArr[i];
      let wordLen = userStrArr[i].length;
      // if word fits in column at current index without exceeding limit 
      // add word and update column index count    
      if ((wordLen + colCount) < colNum) {
        newStr += `${word}`;
        colCount += (wordLen + 1)
        // if word exceeds column limit, break word on final index
        // add remaining word portion to new column, update column index count
      } else if (wordLen > (colNum)) {
        newStr += `\n${word.substring(0, colNum - 1)}-\n${word.substring(colNum - 1)} `;
        colCount = word.substring(colNum - 1).length;
        // else add line break then word, update column index count   
      } else {
        newStr += `\n${word} `;
        colCount = wordLen;
      }
    }
    console.log(newStr);
  }
}

module.exports = Wrapper;