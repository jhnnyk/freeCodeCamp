
function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);

  collection.forEach(function(obj) {
  	keys.forEach(function(key) {
  		if (obj[key] != source[key]) {
  			obj.false = 1;
  		}
  	});
  });

  collection.forEach(function(obj) {
  	if (!obj.hasOwnProperty("false")) {
  		arr.push(obj);
  	}
  });
  // Only change code above this line
  return arr;
}


whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
