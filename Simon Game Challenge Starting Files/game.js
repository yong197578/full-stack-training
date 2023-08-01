
let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []

let started = false;
let level = 0;

$(document).keypress(function(){
    if(!started) {
        $("#level-title").text("Level " + level)
        nextSequence()
        started=true
    }
})

function nextSequence() {
    userClickedPattern = []
    level++
    $("#level-title").text("Level " + level)
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    let i = 0
    let interval = setInterval(function() {
        let currentColor = gamePattern[i]
    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(currentColor)
        i++;
        if(i >= gamePattern.length){
            clearInterval(interval)
        }
    }, 1000)
}

$(".btn").click(function(){
    let userChoseColour = $(this).attr("id")
    // console.log(userCHoseColour)
    userClickedPattern.push(userChoseColour)
    // console.log(userClickedPattern)
    playSound(userChoseColour)
    animatePress(userChoseColour)
    checkAnswer(userClickedPattern.length-1)

})

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColour){
    // setTimeout(function(){
    //     currentColour.classList.add("press")
    // }, 100)
    $("#" + currentColour).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}
function startOver(){
    level=0;
    gamePattern = []
    started = false
}