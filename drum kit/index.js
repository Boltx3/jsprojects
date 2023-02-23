for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    //Look through the document that has the class of drum by looping through
    //adding the eventlistener to each item
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){    
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
});
}


document.addEventListener("keydown", function(event) {  
    makeSound(event.key);
    buttonAnimation(event.key);
});


function  makeSound(key) {
    switch (key) {
        case 'w':
                var crash = new Audio('/sounds/crash.mp3');
                crash.play();
            break;
        case 'a':
                var kickbass = new Audio('/sounds/kick-bass.mp3');
                kickbass.play();
            break;
        case 's':
                var snare = new Audio('/sounds/snare.mp3');
                snare.play();
            break;
        case 'd':
                var tom1 = new Audio('/sounds/tom-1.mp3');
                tom1.play();
            break;
         case 'j':
                var tom2 = new Audio('/sounds/tom-2.mp3');
                tom2.play();
            break;
         case 'k':
                var tom3 = new Audio('/sounds/tom-3.mp3');
                tom3.play();
            break;
        case 'l':
                var tom4 = new Audio('/sounds/tom-4.mp3');
                tom4.play();
            break;
        default: console.log(key);
    }
} ;

function buttonAnimation(currentKey) {
    //search for a button that has class ".key"
    var activeButton = document.querySelector("." + currentKey);
    //adding the class pressed to activeButton
    activeButton.classList.add("pressed");
    //Setting timeout to bring  back to non-active state
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}
s