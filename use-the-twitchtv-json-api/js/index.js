$(document).ready(function() {
  var html = "";
  var html2 = "";
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "Monstercat"];
  
  function printOfflineUser(user) {
    $.getJSON("https://api.twitch.tv/kraken/channels/" + user + "?callback=?", function(data) {
      html2 = "";
      html2 += "<li id='" + data["display_name"] + "'";
      html2 += " class='offline'>"
      html2 += "<img src='" + data["logo"];
      html2 += "' class='logo img-circle' alt='";
      html2 += data["display_name"] + " logo'>";
      html2 += data["display_name"] + "<br>";
      html2 += "is offline"
      html2 += "</li>";
      $("#streamers").append(html2);
    });

  }
  
  users.forEach(function(user) {
    
    $.getJSON("https://api.twitch.tv/kraken/streams/" + user + "?callback=?", function(data) {
      
      if (data["stream"] !== null) {
        
        html = "";
        html += "<li id='" + data["stream"]["channel"]["display_name"] + "' class='online'>";
        html += "<a href='" + data["stream"]["channel"]["url"] + "'>";
        html += "<img src='" + data["stream"]["channel"]["logo"];
        html += "' class='logo img-circle' alt='";
        html += data["stream"]["channel"]["display_name"] + " logo'>";
        html += data["stream"]["channel"]["display_name"] + "</a>";
        html += " is online"
        html += "</li>";
        
      } else if (data["stream"] === null) {
        printOfflineUser(user);
      }
      $("#streamers").html(html);
    });
    
  });
  
});