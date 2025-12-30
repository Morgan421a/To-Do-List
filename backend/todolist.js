let buttons = document.getElementsByTagName("button");
let boxChecked = 0;

for (let btn of buttons) {
    btn.addEventListener("click", boxChecker);
}

function boxChecker() {
    boxChecked = boxChecked === 1 ? 0 : 1;
    console.log(boxChecked);
}

console.log(boxChecked);