
function binaryAgent(str) {
  var strArr = str.split(" ");
  strArr = strArr.map(function(str) {
    return parseInt(str, 2);
  });
  var letters = strArr.map(function(str) {
    return String.fromCharCode(str);
  });
  return letters.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
