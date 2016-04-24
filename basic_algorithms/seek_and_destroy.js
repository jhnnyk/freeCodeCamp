function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  var destroyedArr = arr.filter(function(item) {
    if (args.includes(item)) {
      return false;
    } else {
      return item;
    }
  });
  return destroyedArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
