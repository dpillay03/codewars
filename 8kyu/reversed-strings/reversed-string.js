function reversedString(str) {
  // split the string by character
  var splitStr = str.split('');

  // reverse the string after it's split
  var reverseStr = splitStr.reverse();

  // join the string after it is reversed
  var newStr = reverseStr.join('');

  // return new reversed string
  return newStr;
}

module.exports = reversedString;
