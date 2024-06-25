// 스크롤 트리거 플러그인 활성화
// gsap.registerPlugin(ScrollTrigger);

// function SectionGroup__init() {
//   $(".section-group--horizontal").each(function (index, node) {
//     var $group = $(node);
//     var $section = $group.find(" > .section");

//     gsap.to($section, {
//       xPercent: -100 * ($section.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: $group,
//         start: "top top",
//         end: "+=" + ($section.length - 1) + "00%",
//         pin: true,
//         scrub: true,
//         markers: false,
//       },
//     });
//   });
// }

// SectionGroup__init();

$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Scroll Animation
  gsap.to("#characterScroll", {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero-group",
      pin: true,
      scrub: 1,
      end: "+=3000",
    },
  });

  // CircleType Text Animation
  new CircleType(document.getElementById("heroTextBox")).radius(120);
});
