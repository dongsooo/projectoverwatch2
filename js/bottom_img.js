$(".inner_wrap").on("mousemove", function (e) {
  const width = $(window).width();

  const moveX = (e.pageX - width / 2) / width;

  const backMoveX = moveX * 30;

  $(".cha_img_box").css({
    transform: `translate(${backMoveX}px)`,
  });
});
