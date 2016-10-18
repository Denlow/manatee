$(document).ready(function() {
  $(".clickable").click(function() {
    $("#manatee-showing").toggle();
    $("#manatee-hidden").toggle();
  });
  $("p").click(function() {
    $("img").show();
  });
});
