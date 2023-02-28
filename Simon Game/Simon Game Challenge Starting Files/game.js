const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

$('.btn').click(function( ){
    var userChosenColour = $(this).attr('id');
    //pushing it userClickedPattern
     userClickedPattern.push(userChosenColour);
     //console.log(userClickedPattern)
});

function nextSequence ( ) {
    var randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //button animation by ID selector
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //play audio
    var audio = new Audio('./sounds/' + randomChosenColour + '.mp3');
    audio.play();
}

function playSound(name) {

}
