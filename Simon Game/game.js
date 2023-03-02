const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];


$("document").on('keypress', nextSequence());

$('.btn').click(function( ){
    var userChosenColor = $(this).attr('id');
    //pushing it userClickedPattern
     userClickedPattern.push(userChosenColor);
     playSound(userChosenColor);
     animatePress(userChosenColor);
});

function nextSequence ( ) {
    var randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    var level = 0;
    gamePattern.push(randomChosenColor);
    //button animation by ID selector
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    //playSound function
    playSound(randomChosenColor);

    level += 1;
    $("#level-title").change("level " + level);
}

function playSound(name) {
    //play audio
    var audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {
    var delayMilliseconds = 1000;
    //adding the class .press 
    $("#" + currentColor).addClass("pressed");
    //function to remove the class after 1000 milliseconds
    setTimeout( function ( ) {
        $("#" + currentColor).removeClass("pressed");
    }, delayMilliseconds);
}
