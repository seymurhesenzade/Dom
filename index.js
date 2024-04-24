const addBtn = document.getElementById("btn");
const clearBtn = document.getElementById("clearbtn");
const toDoContainer = document.getElementById("toDoContainer");
const inputText= document.getElementById("inputText");
// -------------------------------------------------------
addBtn.addEventListener("click", function(){
    let paragraph = document.createElement("p");
toDoContainer.appendChild(paragraph);
paragraph.innerHTML=inputText.value;


paragraph.addEventListener("dblclick", function(){
    toDoContainer.removeChild(paragraph);
})
});

clearBtn.addEventListener("click", function(){
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }
});










