$(document).ready(function() {//after doc is ready, function runs.


  $(".clickable1").click(function() {//click method runs a new function.
    $("#manatee-showing").slideToggle();//manatee toggles
    $("#manatee-hidden").slideToggle();
  });

  $("p").click(function() {//p tags clickable
    $("img").show();// clickable shows image
  });
  $("h4").click(function() {//p tags clickable
    $("h5").show();// clickable shows image
  });

  $(".clickable2").click(function() { //.click method runs a new function on Supermanatee,
    $(".supermanatee-showing").fadeToggle();//superManatee toggles
    $(".supermanatee-hidden").fadeToggle();
  });

  $(".clickable3").click(function() { //.click method runs a new function on Supermanatee,
    $(".content-showing").fadeToggle();//superManatee toggles
    $(".content-hidden").fadeToggle();
  });


});

//
// $(document).ready(function() {//after doc is ready, function runs.
//
//
//   $(".clickable1").click(function() {//click method runs a new function.
//     $("#manatee-showing").slideToggle();//manatee toggles
//     $("#manatee-hidden").slideToggle();
//   });
//
//   $("p").click(function() {//p tags clickable
//     $("img").show();// clickable shows image
//   });
//   $("h4").click(function() {//p tags clickable
//     $("h5").show();// clickable shows image
//   });
//
//   $(".clickable2").click(name() { //.click method runs a new function on Supermanatee,
//     $(".supermanatee-showing").fadeToggle();//superManatee toggles, (method + function)
//     $(".supermanatee-hidden").fadeToggle();
//   });
//
//   $(".clickable3").click(name() { //.click method runs a new function on Supermanatee, method
//
//   });
//
//   function name() {
//     $(".content-showing").fadeToggle();//superManatee toggles, function
//     $(".content-hidden").fadeToggle();
//   });
//
//



});
