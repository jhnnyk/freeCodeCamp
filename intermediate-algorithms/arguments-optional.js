function addTogether(x) {
  var y = arguments[1];

  if (y !== undefined) {

    if (Number.isInteger(x) && Number.isInteger(y)) {
    	return x + y;
    } else {
    	return undefined;
    }

  } else {

  	if (Number.isInteger(x)) {
	    return function(y) {
	    	if (Number.isInteger(y)) {
	    		return x + y;
	    	} else {
	    		return undefined;
	    	}
	    };
  	} else {
  		return undefined;
  	}

  }
}

addTogether(2)([3]);
