//select all buttons

for(let i=0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', handelClick)
    function handelClick(){
        alert("I got clicked")
    }
}

