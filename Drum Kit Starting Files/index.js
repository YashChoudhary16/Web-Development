function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
    }
}
function animation(key) {
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed")
    setTimeout (() => {
        activeButton.classList.remove("pressed")
    }, 100)

}
var length = document.querySelectorAll(".drum").length
for (var i=0 ; i < length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", buttonClicked);
}
document.addEventListener("keydown", keyPressed);
function buttonClicked(){
    var key = this.innerHTML;
    makeSound(key);
    animation(key);
}
function keyPressed(e) {
    makeSound(e.key);
    animation(e.key);
}