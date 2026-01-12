// Checkbox
let boxTicked = false;

function boxTicker(event) {
    boxChecker();
}

function boxChecker() {
    boxTicked = boxTicked === true ? false : true;
    if (boxTicked == true) {
        document.getElementsByClassName("list-item");
        
    }
}




// New Entry Button
const list = document.getElementsByTagName("ul")[0];
const listEntries = [...document.getElementsByTagName("li")];

let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.classList.add("checkbox");

function newEntry() {
    let newItem = document.createElement("li");
    newItem.textContent = prompt("Please enter a task", "New Task");
    newItem.prepend(checkbox);
    list.appendChild(newItem);
    listEntries.push(newItem);
}


// Delete Button
const delButton = document.getElementsByClassName("delete");

function deleteEntry() {
    const clickedButton = delButton.closest("li");
    const index = listEntries().indexOf(delButton);
    console.log(index);
}


// EVENT DELEGATION
document.addEventListener("click", e => {

    const deleteBtn = e.target.closest(".delete");
    if (deleteBtn) {
        deleteEntry();
        return;
    }

    const newEntryBtn = e.target.closest(".new-entry");
    if (newEntryBtn) {
        newEntry();
        return;
    }

    const chkBox = e.target.closest(".checkbox");
    if (chkBox) {
        boxTicker();
        return;
    }

    // event delegation, does nothing if click isn't relevant
});