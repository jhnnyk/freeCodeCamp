function replacer(match) {
  return match.toUpperCase();
}

function titleCase(str) {
  var capStr = str.replace(/( [a-z])+/g, replacer);
  return capStr;
}

titleCase("I'm a little tea pot");
