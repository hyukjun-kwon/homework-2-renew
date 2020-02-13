$(document).ready(function() {
  $("#contact").hide();
  $("#profile").hide();






  
  // Navbar Buttons: Hover Effects
  $(".nav-button").hover(function(event) {
    // handler-in
    $(this).animate({width: "+=42px"}, "fast")
  },function(event){
    // handler-out
    $(this).animate({width: "-=42px"}, "fast")
  }); // End of Navbar Buttons: Hover Effects

  // Navbar Buttons: Click Events
  $(".nav-button").on("click", function(event) {
    switch($(this).attr("data-page")) {
      case "profile":
        $("#profile").show();
        $("#portfolio").hide();
        $("#contact").hide();
        break;
      case "portfolio":
        $("#profile").hide();
        $("#portfolio").show();
        $("#contact").hide();
        break;
      case "contact":
        $("#profile").hide();
        $("#portfolio").hide();
        $("#contact").show();
        break;
    }
  }); // End of Navbar Buttons: Click Events

}); // End of $(document).ready()
