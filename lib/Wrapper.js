class Wrapper {
  static wrap(userStr, colNum) {
    var wordArr = userStr.split(" ");
    var newStr = "";
    var colIdx = 0;
    var arrIdx = 0;

    function breakWord(colNum, colIdx, arrIdx, word = null) {
      word = word || wordArr[arrIdx];
      if (word != null) wordLen = word.length;

      if (colIdx > colNum || (colIdx + wordLen) > colNum) {
        var testChar = newStr.slice(-1);
        if (testChar != '\n') newStr += '\n';
        colIdx = 0;
      }

      if (wordLen >= colNum) {
        newStr += `${word.substring(0, colNum - 1)}-\n`;
        colIndex = word.substring(colNum - 1).length;
        word = word.substring(colNum - 1);
      } else if (wordLen <= colNum && word != undefined) {
        newStr += `${word} `;
        colIdx += wordLen + 1;
        arrIdx++;
        word = wordArr[arrIdx];
      }

      if (arrIdx < wordArr.length) breakWord(colNum, colIdx, arrIdx, word);
    }

    breakWord(colNum, colIdx, arrIdx);
    return newStr;
}

module.exports = Wrapper;

// TODO comment code, check module error msg