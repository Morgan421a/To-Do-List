const buttons = document.getElementsByClassName("checkbox");
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

const newEntryButton = document.getElementsByClassName("new-entry");
const list = document.getElementsByTagName("ul")[0];

for (let newBtn of newEntryButton) {
    newBtn.addEventListener("click", newEntry);
}


let checkbox = document.createElement("input"); //creates a node and specifies the type
checkbox.type = "checkbox";
checkbox.classList.add("checkbox");
checkbox.addEventListener("click", boxTicker)

function newEntry() {
    // create new list entry and ask for user input, ensure new entry has a working tickbox
    let newItem = document.createElement('li');
    newItem.textContent = prompt("Please enter a task", "New Task");
    newItem.prepend(checkbox);
    list.appendChild(newItem);
}

const delButton = document.getElementsByClassName("delete");

for (let delBtn of delButton) (
    delBtn.addEventListener("click", deleteEntry)
)


function deleteEntry() {

}