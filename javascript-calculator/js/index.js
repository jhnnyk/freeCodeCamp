$(document).ready(function() {
  var html = "";
  
  $(".calc").on("click", function() {
    html += $(this).html();
    $("#window").html(html);
  });
  
  $("#AC").on("click", function() {
    html = '';
    $("#window").html(html);
  });
  
  $("#CE").on("click", function() {
    html = $("#window").html();
    html = html.slice(0, -1);
    $("#window").html(html);
  });
  
  $("#calculate").on("click", function() {
    html = $("#window").html();
    html = eval(html);
    $("#window").html(html);
  });
});