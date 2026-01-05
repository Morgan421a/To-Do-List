let buttons = document.getElementsByClassName("checkbox");
let boxTicked = false;

for (let btn of buttons) {
    btn.addEventListener("click", boxTicker);
}

function boxTicker(event) {
    boxChecker();
    tickBox(event.currentTarget);
}
    
    
function boxChecker() {
    boxTicked = boxTicked === true ? false : true;
    console.log(boxTicked);
}

function tickBox(button) {
    if (boxTicked == true){
        button.innerHTML = "✓";
    } else {
        button.innerHTML = "";
    }
}

