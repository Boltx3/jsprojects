const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

$('.btn').click(function(event){
    var userChosenColour = $(this).attr('id');
    //pushing it userClickedPattern
     userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});


function nextSequence ( ) {
    var randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}