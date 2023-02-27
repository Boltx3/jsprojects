const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence ( ) {
    var randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}

$("btn#randomChoseColour").css("background-color","green");