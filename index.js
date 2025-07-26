var win = 0;
var lose = 0;
var draw = 0;

function bindClick() {
  $(".items").off("click").on("click", function () {
    // ✅ Move bot logic here
    var randomNumber = Math.floor(Math.random() * 3);
    var possibleOutputs = ["stone", "paper", "scissor"];
    var botOutput = possibleOutputs[randomNumber];

    var userInput = this.className.split(" ")[0];
    $(".inner-heading").hide();
    $(".fix img").attr("src", "./images/stone.png");
    $(".paper").html('<img src="./images/vs.png" alt="VS">');
    $(".fix img").addClass("grow-shake");

    // Disable further clicks
    $(".items").off("click");

    setTimeout(function () {
      $(".fix img").removeClass("grow-shake");

      $(".stone img").attr("src", "./images/" + userInput + ".png");
      $(".scissor img").attr("src", "./images/" + botOutput + ".png");

      $(".paper").html("<h2>" + whoWin(botOutput, userInput) + "</h2>");
      $(".paper h2").addClass("h2j");
      $(".win").text("Win : " + win);
      $(".lose").text("Lose : " + lose);
      $(".draw").text("Draw : " + draw);

      // ✅ Show restart button and bind handler once
      $(".restart").css("display", "inline-block").off("click").on("click", function () {

        $(".inner-heading").show();
        $(".stone img").attr("src", "./images/stone.png");
        $(".scissor img").attr("src", "./images/scissor.png");
        $(".paper").html('');
        $('<img>', {
          src: './images/paper.png',
          alt: 'Paper'
        }).appendTo(".paper");

        $(this).hide();
        bindClick(); // Re-enable clicks
      });
    }, 2000);
  });
}

bindClick(); // Initial bind

function whoWin(bot, user) {
  let result = "";
  if (user == 'stone' && bot == "scissor" ||
      user == 'paper' && bot == "stone" ||
      user == 'scissor' && bot == "paper") {
    result = "You Won!";
    win += 1;
  } else if (user == bot) {
    result = "Draw!";
    draw += 1;
  } else {
    result = "You Lose!";
    lose += 1;
  }
  return result;
}

