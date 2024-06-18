$(".popup_cover").hide();

$(".video_btn").click(function () {
  $(".popup_cover").show();
  $("html, body").css("overflow", "hidden");
  $(".nav_close").hide();
  $(".game_characteristic_text1 > h5").hide();
  $(".text").hide();
});

$(".popup_close_btn").click(function () {
  $(".popup_cover").hide();
  $("html, body").css("overflow", "auto");
  $(".nav_close").show();
  $(".game_characteristic_text1 > h5").show();
  $(".text").show();
});
