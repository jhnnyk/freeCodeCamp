function convertToRoman(num) {
  var romanArr = [];
  var romanThousands = ["", "M", "MM", "MMM"];
  var romanHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var romanOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  var thousands = Math.floor(num / 1000);
  var hundreds = Math.floor((num - (thousands * 1000)) / 100);
  var tens = Math.floor((num - (thousands * 1000) - (hundreds * 100)) / 10);
  var ones = num % 10;

  return romanThousands[thousands] + romanHundreds[hundreds] + romanTens[tens] + romanOnes[ones];
}

convertToRoman(1672);
