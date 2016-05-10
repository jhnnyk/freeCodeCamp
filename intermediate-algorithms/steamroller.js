
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattened = [];

  var flatten = function(element) {
    if (Array.isArray(element)) {
      for (var e in element) {
        flatten(element[e]);
      }
    } else {
      flattened.push(element);
    }
  };

  arr.forEach(flatten);

  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);

// I had to look at the full answer for this one in the
// FreeCodeCamp Wiki. I think I understood recursion, but
// I wasn't getting it with the 'for...in' statement.
// I'll have to study this one more.
