$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
  $("button#hotpink").click(function() {//This function removes color of "gray-box"
    $("body #gray-box").removeClass();
    $("body").addClass("hotpink-background");
  });
  $("button#black").click(function() {
    $("#gray-box").removeClass();
    $("#gray-box").addClass("black-background");
  });

});
