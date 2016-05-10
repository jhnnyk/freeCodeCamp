function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var scmArr = [];

  for (var i = min; i <= max; i++) {
    scmArr.push(i);
  }

  checkMultiple: for (var loop = 1; loop > 0; loop++) {
  	var multiple = scmArr[scmArr.length - 1] * scmArr[scmArr.length - 2] * loop;
  	for (var index = 0; index < scmArr.length; index++) {
  		if (multiple % scmArr[index] !== 0) {
  			continue checkMultiple;
  		}
  	}
  	return multiple;
  }

}


smallestCommons([1,13]);
