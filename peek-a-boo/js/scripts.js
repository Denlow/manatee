$(document).ready(function() {//after doc is ready, function runs.
  $(".clickable1").click(function() {//click method runs a new function.
    $("#manatee-showing").slideToggle();//manatee toggles
    $("#manatee-hidden").slideToggle();

  });

  $("p").click(function() {//p tags clickable
    $("img").show();// clickable shows image
  });

  $(".clickable2").click(function() { //.click method runs a new function on Supermanatee,
    $("#supermanatee-showing").fadeToggle();//superManatee toggles
    $("#supermanatee-hidden").fadeToggle();
  });
});
