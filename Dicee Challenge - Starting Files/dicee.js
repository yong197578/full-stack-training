let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let diceImage1 = "images/dice" + randomNumber1 + ".png";
let diceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceImage1);
document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎊 Player 1 Won!"
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 Won! 🎊"
}else {
    document.querySelector("h1").innerHTML = "Draw!"
}