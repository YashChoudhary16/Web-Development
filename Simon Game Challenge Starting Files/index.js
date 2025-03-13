var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
function nextSequence(){
    var randomNumber =Math.round(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).on("click", function(){
        $("#" + randomChosenColour).hide();
        setTimeout(function() {
            $("#" + randomChosenColour).show()
        },1000)
    })
    $(".btn").click(playSound)
   
}
function playSound(e) {
    var id = e.currentTarget.id
    console.log(id)
    switch (id) {
        case "blue" :
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
            break;
        case "green" :
            var green = new Audio("./sounds/green.mp3");
            green.play();
            break;
        case "red" :
            var red = new Audio("./sounds/red.mp3");
            red.play();
            break;
        case "yellow" :
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
        default : console.log('error');
        break;
    }
}




