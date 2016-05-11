
function truthCheck(collection, pre) {
  // Is everyone being true?
  var truthy = collection.map(function(obj) {
  	if (obj[pre]) {
  		return true;
  	} else {
  		return false;
  	}
  });

  if (truthy.includes(false)) {
  	return false;
  } else {
  	return true;
  }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
