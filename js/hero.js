// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

function SectionGroup__init() {
  $(".section-group--horizontal").each(function (index, node) {
    var $group = $(node);
    var $section = $group.find(" > .section");

    gsap.to($section, {
      xPercent: -100 * ($section.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: $group,
        start: "top top",
        end: "+=" + ($section.length - 1) + "00%",
        pin: true,
        scrub: true,
        markers: false,
      },
    });
  });
}

SectionGroup__init();

// $(window).on("wheel", function (e) {
//   if (e.originalEvent.deltaY > 0) {
//     if (scrollY >= titleTop) {
//       console.log("함수 실행");
//       $("#heroTextBox").css("position", "fixed");

//       $("#heroTextBox").css("z-index", "12");
//     }
//   }
// });

// 마우스 움직일때 이미지 이벤트

// $(".section11").on("mousemove", function (e) {
//   const width = $(window).width();
//   const height = $(window).height();

//   const moveX = (e.pageX - width / 2) / width;
//   const moveY = (e.pageY - height / 2) / height;

//   const backMoveX = moveX * 30;
//   const backMoveY = moveY * 10;

//   $(".section11_img_box").css({
//     transform: `translate(${backMoveX}px, ${backMoveY}px)`,
//   });
// });
