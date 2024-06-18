let posNum = -200;
console.log(posNum);
$(".left_btn").click(function () {
  let newPos = posNum + 100;
  if (newPos > 0) {
    return false;
  } else {
    console.log(newPos);
    let pos = newPos + "%"; //-100%
    console.log(pos);

    $(".map_content_box > ul").css("left", pos);
    posNum = newPos;
  }
});

console.log(posNum);
$(".right_btn").click(function () {
  let newPos = posNum - 100;
  if (newPos < -400) {
    return false;
  } else {
    console.log(newPos);
    let pos = newPos + "%"; //-100%
    console.log(pos);

    $(".map_content_box > ul").css("left", pos);
    posNum = newPos;
  }
});
