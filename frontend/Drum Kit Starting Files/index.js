//select all buttons

for(let i=0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        //this will trigger button user clicks. Inspect and see click each box.
        console.log(this.innerHTML)

        let buttonInnerHTML = this.innerHTML

        playSoundByKeyboard(buttonInnerHTML)
        animation(buttonInnerHTML)
    });
}

// let drumSound = new Audio('sounds/tom-1.mp3')
// drumSound.play()
document.addEventListener('keydown', function(event){
    playSoundByKeyboard(event.key)
    animation(event.key)
})

function playSoundByKeyboard(key){
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;

        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;
        case "j":
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        case "k":
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case "l":
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break;
        default: console.log("error!")
    }
}

function animation(currentKey) {
    let activeBtn = document.querySelector("."+currentKey)
    activeBtn.classList.add("pressed")
    setTimeout(function(){
        activeBtn.classList.remove("pressed")
    }, 100)
}