
function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length > 0) {
    if (func(arr[0]) === false) {
      arr.shift();
    } else {
      break;
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
