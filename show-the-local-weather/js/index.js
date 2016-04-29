$(document).ready(function() {
  var lat = '';
  var long = '';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=30e7e28dcfa1f826ea830f5795656148&units=imperial", function(json) {
        var icon = json.weather[0]["icon"];
        $("#weatherIcon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
        $("#weatherIcon").attr("alt", json.weather[0]["descripton"]);
        $("#city").html(json.name);
        $("#temp").html(Math.floor(json.main["temp"]));
        $("#desc").html(json.weather[0]["description"]);
      });
    });
  }
  
  $("#units").on("click", function() {
    if ($("#units").text() == 'F') {
      var fah = $("#temp").text();
      var cel = Math.round((fah - 32) * 5 / 9);
      $("#temp").html(cel);
      $("#units").text('C'); 
    } else if ($("#units").text() == 'C') {
      cel = $("#temp").text();
      fah = Math.round((cel * 9 / 5) + 32);
      $("#temp").html(fah);
      $("#units").text('F');
    }
  });
  
});