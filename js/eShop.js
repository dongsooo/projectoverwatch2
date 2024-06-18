function handleClick(event) {
  const boxNumber = $(this).data("box"); // Get the box number from the data attribute
  const randomNum = Math.random() * 5;
  const randomNumFloor = Math.floor(randomNum);
  console.log(randomNumFloor);

  $(`.eShop_textImg_box${boxNumber} > img`)
    .eq(randomNumFloor)
    .css("opacity", "100");
  setTimeout(function () {
    $(`.eShop_textImg_box${boxNumber} > img`)
      .eq(randomNumFloor)
      .css("opacity", "0");
  }, 700);
}

// Attach the click event handler to all .hiddenImg elements
$(".hiddenImg1, .hiddenImg2, .hiddenImg3, .hiddenImg4").click(handleClick);

// Set the data-box attribute for each .hiddenImg element
$(".hiddenImg1").data("box", 1);
$(".hiddenImg2").data("box", 2);
$(".hiddenImg3").data("box", 3);
$(".hiddenImg4").data("box", 4);

$(".hiddenImg5").click(function () {
  $(".hiddenImg5").css("opacity", "100");
  $(".eShop_textImg_box5 > img").css("opacity", "100");
  setTimeout(function () {
    $(".hiddenImg5").css("opacity", "0");
    $(".eShop_textImg_box5 > img").css("opacity", "0");
  }, 700);
});
