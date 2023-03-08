var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var start = false;
var level = 0;


$(document).keypress(function ()  {
    //Check if that game has already started
    if (!start) {
    //if not start the game and change the title to level + current level
        $("#level-title").text("Level " + level);
        nextSequence();
        start = true;
    }
});

$('.btn').click(function( ){
    var userChosenColor = $(this).attr('id');
    //pushing it userClickedPattern
     userClickedPattern.push(userChosenColor);
     playSound(userChosenColor);
     animatePress(userChosenColor);
     checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length ){
            setTimeout( function () { 
                nextSequence();
            }, 1000);
        } 
        } else {
            gameOver();
        }
    }

function nextSequence ( ) {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    //button animation by ID selector
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    //playSound function
    playSound(randomChosenColor);

}

function playSound(name) {
    //play audio
    var audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {
    const delayMilliseconds = 100;
    //adding the class .press 
    $("#" + currentColor).addClass("pressed");
    //function to remove the class after 1000 milliseconds
    setTimeout( function ( ) {
        $("#" + currentColor).removeClass("pressed");
    }, delayMilliseconds);
}

function gameOver() {
    playSound("wrong")
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout( function ( ) {
        $("body").removeClass("game-over");
    }, 200);
    startOver();
}

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
}
