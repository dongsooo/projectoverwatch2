$(".real_menu").addClass("open");
$(".nav_close").click(function () {
  $(".real_menu").removeClass("open");
  $(this).hide();
});

$(".btn").click(function () {
  $(".real_menu").addClass("open");
  $(".nav_close").show();
});

$(".real_menu li > a").click(function () {
  $(".real_menu").addClass("open");
  $(".nav_close").show();
});
