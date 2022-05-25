// increase font size
let x = 1;
const makeTextBigger = (ev) => {
  var size = parseInt($("body").css("font-size"));
  size += x;
  let newfontSize = `${size}px`;
  console.log(newfontSize);
  $("*").css("font-size", newfontSize);
};

// decrease font size
let count = 1;
const decreaseFont = (ev) => {
  var size = parseInt($("body").css("font-size"));
  size -= count;
  if (size > 11) {
    var newfontSize = `${size}px`;
  }
  console.log(newfontSize);
  $("*").css("font-size", newfontSize);
};

const highContrastify = (event) => {
  console.log($("body").css("background-color"));

  let white = "rgba(0, 0, 0, 0)";
  let black = "rgb(0, 0, 0)";
  let current_color = $("body").css("background-color");

  if (current_color == white) {
    // body
    $("body").css({ "background-color": black, color: "white" });

    // newcards
    $(".newsCard").css({
      "background-color": black,
      color: "white",
    });

    // border to carousel, recent news, finalcard
    $(".carousel").css({ "border-top": "1px solid white" });
    $(".logo-section").css({ "border-top": "1px solid white" });
    $(".what-we-do").css({ "border-top": "1px solid white" });
    $(".recent-news").css({ "border-top": "1px solid white" });
    $(".final").css({ "border-top": "1px solid white" });
    $(".footer").css({ "border-top": "1px solid white" });
    $(".logo img").css({ "margin-right": "10px" });
    return;
  } else {
    $("body").css({ "background-color": white, color: black });
    $(".newsCard").css({
      "background-color": "lightgray",
      color: "black",
    });
    return;
  }
};
