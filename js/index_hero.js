gsap.registerPlugin(ScrollTrigger);

function SectionGroup__init() {
  $("#characterScroll").each(function (index, node) {
    var $group = $(node);
    var $section = $group.find(" > section");

    gsap.to($section, {
      xPercent: -100 * ($section.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: $group,
        start: "top top",
        end: "+=" + ($section.length - 1) + "00%",
        pin: true,
        scrub: true,
        // markers: true,
      },
    });
  });
}

SectionGroup__init();
