$(".inner_wrap").on("mousemove", function (e) {
  const width = $(window).width();
  const height = $(window).height();

  const moveX = (e.pageX - width / 2) / width;
  const moveY = (e.pageY - height / 2) / height;

  const backMoveX = moveX * 30;
  const backMoveY = moveY * 10;

  $(".cha_img_box").css({
    transform: `translate(${backMoveX}px, ${backMoveY}px)`,
  });
});
