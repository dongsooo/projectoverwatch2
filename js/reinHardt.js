let nth = 0;
let pos = 0;

$(".btn_>li").click(function () {
  nth = $(this).index();
  pos = -100 * nth + "%";
  $(".skill_vdo>ul").animate({ left: pos }, 500);
  return false;
});
