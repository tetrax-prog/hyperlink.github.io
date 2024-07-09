$(window).on("scroll load resize", function() {
    var startY = $(".transparent-navbar").height() * 2; // Adjust the scroll position where the change occurs
    if ($(window).scrollTop() > startY) {
      $(".transparent-navbar").addClass("scrolled");
    } else {
      $(".transparent-navbar").removeClass("scrolled");
    }
  });
  